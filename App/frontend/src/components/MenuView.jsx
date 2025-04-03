export default function MenuView() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", backgroundColor: "#f8f9fa" }}>
      <h2 style={{ textAlign: "center", color: "#601700" }}>Menu</h2>

      {/* Burgerit */}
      <h3 style={{ textAlign: "center", color: "#601700" }}>Burgerit</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <strong>CLASSIC BRGR - 15€</strong>
          <p>Jauhettua naudanlihaa, cheddar, salaatti, tomaatti, pikkelöity punasipuli, suolakurkku, ketsuppi, sinappi & majoneesi</p>
        </li>
        <li>
          <strong>VEGAN CLASSIC BRGR - 16€ (vegaaninen)</strong>
          <p>Moving mountains -pihvi, cheddar, salaatti, tomaatti, pikkelöity punasipuli, suolakurkku, ketsuppi, sinappi & majoneesi</p>
        </li>
        <li>
          <strong>RUOK CHEESE BRGR - 17€</strong>
          <p>Jauhettua naudanlihaa, cheddar, savupekoni, salaatti, tomaatti, pikkelöity kurkku, karamellisoitu punasipuli & Peltolan blue ja Jack Daniels -majoneesit</p>
        </li>
        <li>
          <strong>KUUSAMO BRGR - 19€</strong>
          <p>Jauhettua poronlihaa, leipäjuustoa, salaatti, pikkelöityä kanttarellia, lakkahilloa & majoneesi</p>
        </li>
        <li>
          <strong>HALLOUMI BRGR - 17€</strong>
          <p>Grillattua halloumia, salaatti, tomaatti, pikkelöity punasipuli, pahoilaisen hillo & majoneesi</p>
        </li>
        <li>
          <strong>KIDS MEAL - 12€ (alle 12v.)</strong>
          <p>Jauhettua naudanlihaa, cheddar juusto, salaatti, tomaatti, ketsuppi, majoneesi sekä pienet ranskalaiset & 0,3 l limu</p>
        </li>
        <li>
          <strong>CHICKEN BASKET MEAL - 12€ (alle 12v)</strong>
          <p>Friteerattua kanaa, majoneesi & pienet ranskalaiset & 0,3 l limu</p>
        </li>
      </ul>
      <p>Burgeriemme naudan ja poronliha on 100% suomalaista. Jätämme pihvimme punertaviksi sisältä parhaan maun takaamiseksi. Jos haluat pihvisi kypsänä, olethan hyvä ja ilmoitat siitä henkilökunnalle tilatessasi. Burgerit saatavana gluteenittomalla sämpylällä +2€.</p>
      {/* Lisukkeet */}
      <h3 style={{ textAlign: "center", color: "#601700" }}>Lisukkeet</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <strong>RANSKALAISET - 5,50€</strong>
        </li>
        <li>
          <strong>BATAATTIRANSKALAISET - 6,50€</strong>
        </li>
        <li>
          <strong>FRITEERATTUA KANAA - 7,50€</strong>
          <p>Sis. lime-jalapeno majoneesin</p>
        </li>
      </ul>

      {/* Dipit */}
      <h3 style={{ textAlign: "center", color: "#601700" }}>Dipit</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <strong>JACK DANIELS - €2</strong>
        </li>
        <li>
          <strong>AMERICAN STYLE - €2</strong>
        </li>
        <li>
          <strong>GARLIC - €2</strong>
        </li>
        <li>
          <strong>CHILI - €2</strong>
        </li>
        <li>
          <strong>SINIHOME- €2</strong>
        </li>
        <li>
          <strong>NATURAL - €2</strong>
        </li>
        <li>
          <strong>LIME-JALAPENO - €2</strong>
        </li>
      </ul>
    </div>
  );
}

