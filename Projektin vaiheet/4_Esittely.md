# Vaihe 4 – Projektin Esittely

## Projektin yleiskatsaus

Projektissa loin helpot verkkosivut ravintolan käyttöön. Sivuilla onnistuu tarkastella menua, tilata ruokaa ja varata pöytä. Sovellus sisältää verkkotilauksen eli ostoskorin hallintaa ja varausjärjestelmän kapasiteettirajoitusten kanssa. 

---

## Käyttötapaukset

| Käyttötapaus | Toteutettu (Kyllä/Ei) | Selitys / Demotiedot |
|----------|----------------------|------------------------|
| Asiakas lisää tuotteita ostoskoriin | Kyllä | Tuotteiden lisäys ja poisto toimivat ostoskorissa. [Lisäys](https://youtu.be/YzRoawtUrmg?t=8) ja [poisto](https://youtu.be/YzRoawtUrmg?t=17)|
| Asiakas tekee tilauksen ostoskorista | Kyllä | Tilaukset tallennetaan tietokantaan onnistuneesti. [Tilaus](https://youtu.be/YzRoawtUrmg?t=31)|
| Asiakas tekee pöytävarauksen | Kyllä | Pöydän varaaminen tallennetaan tietokantaan onnistuneesti. Kapasiteettirajoitus toimii enintään 20 hengelle. [Pöytävaraus](https://youtu.be/YzRoawtUrmg?t=105)|
| Asiakas näkee kaikki tehdyt varaukset | Ei | Tämä ominaisuus ei saatu toteutumaan. Vaati jatkokehitystä. |
| Käyttäjän kirjautuminen | Ei | Tämä ominaisuus ei saatu toteutumaan. Vaati jatkokehitystä. |
| Käyttäjän rekistöröityminen | Ei | Tämä ominaisuus ei saatu toteutumaan. Vaati jatkokehitystä. |

---

## Tekninen toteutus

Käytetyt teknologiat:

- Frontend: React.js ja React Router DOM.

- Backend: Node.js ja Express.

- Tietokanta: SQLite hallittuna Sequelize ORM:llä.

---

## Kehitysprosessi

Projektin ensimmäinen vaihe alkoi projektin tarpeiden kartoittamisella ja käyttötapausten määrittämisellä. Päätavoitteena oli luoda käyttäjäystävällinen verkkosovellus ravintolalle, jossa onnistuu ruoan tilaaminen ja pöytävaraukset. Tämän suunnitteluvaiheen tarkoitus oli keskittyä loppukäyttäjien tarpeisiin ja selkeän arkkitehtuurin määrittämiseen.

Projektin toisessa vaiheessa keskityin sovelluksen toiminnallisen perustan toteutukseen. Toteutusvaiheessa loin toiminnallisuuksia vaiheittain, varmistaen niiden yhteensopivuuden ja käytettävyyden. Backendiin loin RESTful-reitit tilauksille ja varauksille. Ohjasin SQL-tietokantaan tietojen tallentamisen ja tietokantamallien hallinta hoidin Sequelize ORM:lla. Käyttöliittymään lisäsin menun, verkkokaupan, ostoskorin ja varauslomakkeen. Tietojen lähetyksen hoidin tietokantaan axious- kirjaston avulla. Navigointirakenne tein React Routerilla, joka mahdollisti käyttäjän sujuvan siirtymisen eri näkymien välillä. Loin tietokantaan tilauksille ja varauksille omat taulut. Orders-tauluun tallentuu asiakkaan nimi, tilatut tuotteet, kokonaishinta ja arvioitu noutoaika päivämäärän kanssa. Reservation-tauluun tallentuu asiakkaan nimen, sähköpostin, ajan ja henkilömäärän. Tein myös runsaasti testausta, joka paljasti ongelmia tietokannan synkroroinnissa ja prosessien etenemisessä eri toiminnallisuuksissa. Virheilmoituksien ongelmia pyrin mahdollisuuksien mukaan korjaamaan. 
 
Kehitystyön tuloksena olevat toteutuneet toiminnallisuudet:

- Ruokalistan selaus ja tuotteiden lisääminen ostoskoriin. 
- Tilausten lähetys palvelimelle tallennettavaksi tietokantaan.
- Pöytävarauksen tekeminen kapasiteettirajoitukset huomioiden.
- Tietojen validointi ja virheilmoitukset käyttöliittymässä.

---

## Reflektio ja jatkokehitysideat

Ravintolan verkkosivut tulivat hienosti annetussa aikaraameissa toteutettua. Kurssin luennot ja materiaali tukivat projektin suorittamista. Minusta projektin yksinkertainen verkkosivu toimii hienosti siinä mihin se on kehitetty eli olemalla käyttäjäystävällinen käyttöliittymältään, siinä voi tarkastella menua, tehdä tilauksen, hallita ostoskoria ja varausjärjestelmää. Parasta antia minusta oli jatkokehitysideoiden suunnittelu, koska kun tarkastelen alla olevia jatkokehitysideoita, olisi projekti laajentunut aika kivasti ja massiivisesti luoden monipuolisesti lisäominaisuuksia alunperin niin yksinkertaieen verkkosivuun. Kokeilin tehdä jatkokehitysideoiden mukaisia muutoksia projektiini, mutta luovutin virheilmoitusten kasautuessa ja tekoälyn kompastuessaan omaan nokkeluuteensa.

Ensimmäinen jatkokehitysidea ravintolan verkkosivuille on rajoittaa tilaus - ja varausominaisuus tapahtumaan ravintolan aukioloaikoina. Nyt ainoana rajoitteena on pöytävarausten määrän rajoitus. Sivustolla on tärkeää näkyä osoite- ja aukioloajat sekä asettaa rajoitteet mihin aikaan pöytävarauksen ja ruuan tilaamisen voi tehdä. 

Seuraavana jatkokehitysideana on lisätä verkkosivuille rekistöröinti- ja kirjautumismahdollisuus. Tällä hetkellä tilaus- ja varaustiedot tallentuvat tietokantaan, mutta käyttäjä tai pääkäyttäjä eivät pääse niitä muokkaamaan ravintolan verkkosivujen kautta. Pääkäyttäjä pääsee tietokannasta tarkastelamaan tehtyjä varauksia ja tilauksia, mutta nämä eivät näy käyttäjäystävällisesti tietokannassa. Verkkosivuilla liikkuessa ainoastaan tilaustiedot välittyvät ostoskoriin, mutta käyttäjän lisäämät tiedot eivät tallennu selainhistoriaan. Ostoskori ja varaussivu päivittyvät uudestaan, kun käyttäjä klikkaa "Tee tilaus"- tai "Varaa"-nappia. Käyttäjän kirjoittamat tiedot näkyvät sivulla tilauksen tai varauksen jälkeen, mutta eivät jää sivulle, jos käyttäjä käy toisessa näkymässä ja palaa takaisin ostoskori- tai varaus-sivulle. 

Tämä vaatii:
- tilaus-/varauskohtainen poisto- ja muokkausmahdollisuus: server.js pitäisi lisätä DELETE- ja PUT-reitit.
- login.jsx, registeration.jsx ja dashboard.jsx - näkymät frontendiin, jotta käyttäjä voi rekistöröityä, kirjautua ja tarkastella tekemiään tilauksia ja varauksia.
- käyttäjähallintaa server.js - tiedostoon, jossa on reitit rekistöröinnille ja kirjautumiselle. Käyttäjähallinta pitäisi sisällään rekistöröidyn käyttäjän todentamisen id:llä, mikä vaatii JWT-tokenin tarkistamisen ja sitä kautta voi tunnistaa käyttäjän. 
- käyttäjän ja pääkäyttäjän roolien erottamisen, jolloin pääkäyttäjällä olisi laajemmat käyttöoikeudet esimerkiksi kaikkien tehtyjen varausten ja tilausteen tarkasteluun ja muokkaukseen. 
- localStoragen käyttäminen, joka mahdollistaa tietojen säilyttämisen sivujen välillä, kunnes ne poistetaan. Syöttötiedot voisi tallentaa tietokantaan käyttäjän istunnon tai käyttäjätilin perusteella. 

Kolmas jatkokehitysidea on lisätä ravintolan verkkosivut pilvimuotoiseen tallennukseen, ettei järjestelmä toimisi paikallisesti.

Neljäs jatkokehitysidea on tehdä käyttöliittymästä visuaalisempi. Tällä hetkellä sivustolla ei ole kuvia logon lisäksi.

Viides jatkokehitysidea on tehdä sivustosta saavutettavuusvaatimuksien mukainen. 
Tämä vaatii: 
- sivusto täyttää tekniset saavutettavuusvaatimukset (WCAG-ohjeistus)
- sivustolta on löydyttävä saavutettavuusseloste
- palautteen anto mahdollisuus saavutettavuuden toteutumisesta sivustolla

---

# Tuntikirjaukset

| Päivämäärä  | Käytetyt tunnit | Toiminta |  Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 26.3.2025 | 1 | Github repo | Github repo ja projektin vaiheet kansioon. |
| 26.3.2025 | 6 | 1. Määrittely ja suunnittelu | Projektin suunnittelu ja tekstin kirjoittaminen. |
| 30.3.2025 | 7 | 1. Määrittely ja suunnittelu | Prototyypin rakentaminen Figmassa. |
| 31.3.2025 | 2 | 1. Määrittely ja suunnittelu | Prototyypin ja ensimmäisen projektivaiheen tekstin viimeistely. |
| 1.4.2025 | 2 | 2.Perusrunko ja päätoiminnallisuudet | Kansiorakenteen luominen. |
| 2.4.2025 | 2 | 2.Perusrunko ja päätoiminnallisuudet | Toimiva Node.js- ja Express pohjainen backend rakennettu.|
| 3.4.2025 | 5 | 2.Perusrunko ja päätoiminnallisuudet | Frontend toimii Reactilla. Navigointia parannettu ja sisältöä frontendiin lisätty. |
| 7.4.2025 | 3 | 2.Perusrunko ja päätoiminnallisuudet | SQLite pohjaisesta tietokannasta varaus- ja verkkotilaustietojen hakemista parannettu. |
| 11.4.2025 | 3 | 2.Perusrunko ja päätoiminnallisuudet | Tietokantaa yritetty päivittää PostgreSQL siinä onnistumatta. Pidetään tietokanta SQLitenä. |
| 13.4.2025 | 2 | 2.Perusrunko ja päätoiminnallisuudet | Projektin toisen vaiheen kirjoittaminen. |
| 14.4.2025 | 3 | 2.Perusrunko ja päätoiminnallisuudet | Sovelluksen testaamista Vitest, Playwright ja K6 -testien avulla. |
| 14.4.2025 | 1 | 2.Perusrunko ja päätoiminnallisuudet |  Yritetty lisätä verkkosivu Azure Static Web App:ksi siinä onnistumatta. Sivu toimii paikallisesti. |
| 23.4.2025 | 1 | 3.Jatkokehitys |  Aloin suunnittelemaan mahdollisia jatkokehittämistoimia. |
| 27.4.2025 | 2 | 4. Esittely | Dokumentaatio ja esittelymateriaali kirjoitettu ja tuotettu. |


| Yhteensä käytetyt tunnit |
|     :---:      |
| 40 |
---

## Linkki esitykseen

[Demo](https://youtu.be/YzRoawtUrmg)