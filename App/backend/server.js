const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Käytetään JSON-middlewarea POST-datan käsittelyyn
// Palvele index.html-tiedosto
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db',
    logging: true // Tulostaa SQL komennot 
});

//Määrittele tilauksen ja varauksen tyyppi
const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    foodItems: {
        type: DataTypes.JSON, 
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
});

const Reservation = sequelize.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    partySize: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

// Synkronoi tietokanta
sequelize.sync()
    .then(() => console.log("Database synchronized"))
    .catch(err => console.error("Error synchronizing database:", err));

// Luo uusi tilaus
app.post('/orders', async (req, res) => {
    try {
        const { foodItems, totalPrice } = req.body;
        if (!foodItems || !totalPrice) {
            return res.status(400).json({ error: 'Food items and total price are required' });
        }
        const order = await Order.create({ foodItems, totalPrice });
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//Hae kaikki varaukset
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Luo uusi varaus
const { Op } = require('sequelize');

app.post('/reservations', async (req, res) => {
  try {
    const { customerName, email, phoneNumber, date, time, partySize } = req.body;

    if (!customerName || !email || !phoneNumber || !date || !time || !partySize) {
      return res.status(400).json({ error: 'Kaikki kentät ovat pakollisia' });
    }

    const reservationStart = new Date(`${date}T${time}`);
    const reservationEnd = new Date(reservationStart.getTime() + 90 * 60 * 1000); // +1h 30min

    // Haetaan kaikki varaukset, joiden aika-ikkuna menee päällekkäin uuden kanssa
    const existingReservations = await Reservation.findAll();

    let totalOccupied = 0;

    existingReservations.forEach((r) => {
      const existingStart = new Date(`${r.date.toISOString().split('T')[0]}T${r.time}`);
      const existingEnd = new Date(existingStart.getTime() + 90 * 60 * 1000);

      const overlap = reservationStart < existingEnd && reservationEnd > existingStart;
      if (overlap) {
        totalOccupied += r.partySize;
      }
    });

    if (totalOccupied + partySize > 20) {
      return res.status(400).json({
        error: `Varaus ei onnistu. Tälle ajalle on jo varattuna ${totalOccupied} paikkaa. Vapaita paikkoja on ${Math.max(0, 20 - totalOccupied)}.`,
      });
    }

    const reservation = await Reservation.create({
      customerName,
      email,
      phoneNumber,
      date,
      time,
      partySize,
    });

    res.status(201).json(reservation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


// Käynnistä server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

