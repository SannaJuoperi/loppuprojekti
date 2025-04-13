# Projektin toinen vaihe - Perusrunko ja päätoiminnallisuudet

Tässä vaiheessa projektista on rakennettu perusrunko, jossa sovelluksen päätoiminnallisuudet – kuten ruokatilauksen ja pöytävarauksen tekeminen – toimivat kokonaisuutena sekä käyttöliittymän että taustajärjestelmän osalta. Käytössä on React-pohjainen frontend ja Express-pohjainen Node.js-backend, joka kommunikoi SQLite-tietokannan kanssa.

## 1. Ympäristö

Projekti toimii paikallisesti kehitysympäristössään Visual Studio Codessa. Node.js toimii taustajärjestelmänä, ja Reactilla rakennettu käyttöliittymä toimii frontendissä. Tietokantana käytetään SQLitea nopean kehityksen ja testauksen vuoksi.

## [2. Taustajärjestelmä](../App/backend/)

Taustajärjestelmä on toteutettu Node.js:llä ja Expressillä. Se tarjoaa REST-rajapinnan tilausten ja pöytävarausten hallintaan. API:n avulla frontend voi lähettää tilauksia ja varauksia backendille JSON-muodossa. Palvelin validoi tiedot ja tallentaa ne tietokantaan.

## [3. Käyttöliittymä](../App/frontend/)

Käyttöliittymä on toteutettu Reactilla. Käyttäjä voi selata ruokalistaa, tehdä tilauksen ja varata pöydän. Tilaukset lisätään ostoskoriin ja lähetetään palvelimelle. Käyttöliittymässä on lomakkeet tilausta ja varausta varten sekä ilmoitukset onnistuneista tai epäonnistuneista toiminnoista.

## [4. Tietokanta](../App/backend/database.db)

Tietokantana toimii SQLite. Se on kevyt ja helposti integroitavissa paikalliseen kehitysympäristöön ilman erillistä tietokantapalvelinta. Tietokannassa on kaksi taulua: Order ja Reservation. Order-taulu tallentaa tilatut ruoat ja kokonaishinnan. Reservation-taulu tallentaa asiakkaan varaustiedot, kuten nimen, sähköpostin, ajankohdan ja henkilömäärän.

## 5. Perusrunko ja arkkitehtuuri

Sovellus on jaettu frontend- ja backend-kansioihin. Backend käsittelee liiketoimintalogiikan ja tietokannan hallinnan, kun taas frontend hoitaa käyttöliittymän ja kommunikoinnin palvelimen kanssa Axios-kirjaston avulla. Tiedon siirto tapahtuu HTTP-pyyntöjen avulla JSON-muodossa.

## 6. Toiminnallisuudet

Toteutetut toiminnallisuudet:

-Ruokalistan selaus

-Ruoan lisääminen ostoskoriin

-Tilausten lähetys palvelimelle

-Pöytävarauksen tekeminen

-Varausajankohtien tarkistus ja rajoittaminen (max 20 henkilöä samalle ajalle)

-Tietojen tallennus SQLite-tietokantaan

## 7. Koodin laatu ja dokumentointi

Koodi on jaettu loogisiin osiin, ja toiminnallisuudet on toteutettu omissa tiedostoissaan. Palvelin- ja käyttöliittymäkoodi on kommentoitu. Projektin rakenne on selkeä ja noudattaa MVC-periaatteita kevyesti. Dokumentointi etenee vaiheittain README-tiedoston ja koodikommenttien avulla.

## 8. Testaus ja virheenkäsittely

Toiminnallisuuksia on testattu manuaalisesti käyttöliittymän kautta. Syötteiden validointia on tehty palvelinpuolella, esim. pakollisten kenttien tarkistus ja varausaikojen päällekkäisyyksien esto. Virhetilanteet palautetaan selkeänä viestinä frontendille JSON-muodossa.

## 9. Käyttöliittymä ja vuorovaikutus

Käyttöliittymä on responsiivinen ja käyttäjäystävällinen. Käyttäjä saa palautetta lomakkeen lähettämisen onnistumisesta tai epäonnistumisesta. Navigointi on yksinkertaista, ja tärkeimmät toiminnot (tilaaminen ja varaaminen) ovat helposti löydettävissä.