<template>
  <q-page padding>
    <h1>Popis Knjiga</h1>
    <p>Ovdje možete pronaći popis svih knjiga u našoj knjižnici.</p>
    <q-table
      :rows="books"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
     books: [
  { 
    id: 1, 
    naslov: 'Ponos i predrasude', 
    autor: 'Jane Austen', 
    opis: 'Roman koji istražuje društvene običaje i složenost ljubavi kroz priču o Elizabeth Bennet i gospodinu Darcyju.', 
    stanje: 5 
  },
  { 
    id: 2, 
    naslov: '1984', 
    autor: 'George Orwell', 
    opis: 'Distopijski roman o totalitarnom društvu i borbi pojedinca za slobodu misli i izražavanja.', 
    stanje: 3 
  },
  { 
    id: 3, 
    naslov: 'Lovac u žitu', 
    autor: 'J.D. Salinger', 
    opis: 'Roman o adolescentskom otuđenju i potrazi za smislom kroz priču o Holden Caulfieldu.', 
    stanje: 2 
  },
  { 
    id: 4, 
    naslov: 'Ana Karenjina', 
    autor: 'Lav Tolstoj', 
    opis: 'Priča o ljubavi, društvu i obiteljskim dilemama kroz tragičnu sudbinu Ane Karenjine.', 
    stanje: 4 
  },
  { 
    id: 5, 
    naslov: 'Veliki Gatsby', 
    autor: 'F. Scott Fitzgerald', 
    opis: 'Priča o luksuzu, ljubavi i društvenim ambicijama u 1920-im kroz lik Jaya Gatsbyja.', 
    stanje: 6 
  },
  { 
    id: 6, 
    naslov: 'Mali princ', 
    autor: 'Antoine de Saint-Exupéry', 
    opis: 'Filozofska pripovijetka o malom princu i njegovim putovanjima kroz svjetove, tražeći prijateljstvo i ljubav.', 
    stanje: 7 
  },
  { 
    id: 7, 
    naslov: 'Sto godina samoće', 
    autor: 'Gabriel García Márquez', 
    opis: 'Ep o obitelji Buendía u mitskom mjestu Macondo, koji prati generacije obitelji kroz ljubav, ratove i magijski realizam.', 
    stanje: 5 
  },
  { 
    id: 8, 
    naslov: 'Zločin i kazna', 
    autor: 'Fjodor Dostojevski', 
    opis: 'Roman o moralnoj dilemi i psihološkoj borbi čovjeka koji se suočava sa svojim zločinom i posljedicama.', 
    stanje: 4 
  }
],
      columns: [
        { name: 'id', label: 'ID', field: 'id', align: 'left' },
        { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left' },
        { name: 'autor', label: 'Autor', field: 'autor', align: 'left' },
        { name: 'opis', label: 'Opis', field: 'opis', align: 'left' },
        { name: 'stanje', label: 'Stanje', field: 'stanje', align: 'left' }
      ]
    };
  }
};
</script>
