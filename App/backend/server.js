const express = require('express');
const { Sequelize, DataTypes, Op } = require('sequelize');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db',
    logging: true
});

const Order = sequelize.define('Order', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    customerName: { type: DataTypes.STRING, allowNull: false },
    pickupDate: { type: DataTypes.DATEONLY, allowNull: false },
    pickupTime: { type: DataTypes.TIME, allowNull: false },
    foodItems: { type: DataTypes.JSON, allowNull: false },
    totalPrice: { type: DataTypes.FLOAT, allowNull: false }
}, { timestamps: false });

const Reservation = sequelize.define('Reservation', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    customerName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    time: { type: DataTypes.TIME, allowNull: false },
    partySize: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: false });

sequelize.sync()
    .then(() => console.log("Tietokanta synkronoitu."))
    .catch(err => console.error("Virhe tietokantaa synkronoinnissa:", err));

app.post('/orders', async (req, res) => {
    try {
        const { customerName, pickupDate, pickupTime, foodItems, totalPrice } = req.body;

        if (!customerName || !pickupDate || !pickupTime || !foodItems || !totalPrice) {
            return res.status(400).json({ error: 'Kaikki kentät ovat pakollisia.' });
        }

        const order = await Order.create({ customerName, pickupDate, pickupTime, foodItems, totalPrice });
        res.status(201).json(order);
    } catch (err) {
        console.error("Virhe tilauksen tallentamisessa:", err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/reservations', async (req, res) => {
    try {
        const { customerName, email, phoneNumber, date, time, partySize } = req.body;

        if (!customerName || !email || !phoneNumber || !date || !time || !partySize) {
            return res.status(400).json({ error: 'Kaikki kentät ovat pakollisia' });
        }

        // Rakenna Date-objekti päivästä ja kellonajasta
        const [hours, minutes] = time.split(':');
        const reservationStart = new Date(date);
        reservationStart.setHours(parseInt(hours));
        reservationStart.setMinutes(parseInt(minutes));
        reservationStart.setSeconds(0);

        const reservationEnd = new Date(reservationStart.getTime() + 90 * 60 * 1000);

        const existingReservations = await Reservation.findAll();

        let totalOccupied = 0;
        existingReservations.forEach((r) => {
            const [rHours, rMinutes] = r.time.split(':');
            const existingStart = new Date(r.date);
            existingStart.setHours(parseInt(rHours));
            existingStart.setMinutes(parseInt(rMinutes));
            existingStart.setSeconds(0);

            const existingEnd = new Date(existingStart.getTime() + 90 * 60 * 1000);

            if (reservationStart < existingEnd && reservationEnd > existingStart) {
                totalOccupied += r.partySize;
            }
        });

        if (totalOccupied + partySize > 20) {
            return res.status(400).json({
                error: `Varaus ei onnistu. Tälle ajalle on jo varattuna ${totalOccupied} paikkaa. Vapaita paikkoja on ${Math.max(0, 20 - totalOccupied)}.`
            });
        }

        const reservation = await Reservation.create({
            customerName,
            email,
            phoneNumber,
            date,
            time,
            partySize
        });

        res.status(201).json(reservation);
    } catch (err) {
        console.error("Virhe varauksen käsittelyssä:", err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
