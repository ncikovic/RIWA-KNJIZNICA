<template>
  <q-page padding>
    <h1>Pretraživanje</h1>
    <p>Pretražite knjige prema naslovu ili autoru.</p>

    <q-input v-model="searchQuery" label="Unesite ključnu riječ" />
    <q-checkbox v-model="searchByTitle" label="Pretraži po naslovu" />
    <q-checkbox v-model="searchByAuthor" label="Pretraži po autoru" />
    <q-btn label="Traži" @click="searchBooks" color="primary" />

    <q-table v-if="filteredBooks.length" :rows="filteredBooks" :columns="columns" row-key="id" />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchByTitle: true,
      searchByAuthor: false,
      books: [
        { 
          id: 1, 
          naslov: 'Ponos i predrasude', 
          autor: 'Jane Austen', 
          opis: 'Roman koji istražuje društvene običaje i složenost ljubavi kroz priču o Elizabeth Bennet i gospodinu Darcyju.' 
        },
        { 
          id: 2, 
          naslov: '1984', 
          autor: 'George Orwell', 
          opis: 'Distopijski roman o totalitarnom društvu i borbi pojedinca za slobodu misli i izražavanja.' 
        },
        { 
          id: 3, 
          naslov: 'Lovac u žitu', 
          autor: 'J.D. Salinger', 
          opis: 'Roman o adolescentskom otuđenju i potrazi za smislom kroz priču o Holden Caulfieldu.' 
        },
        { 
          id: 4, 
          naslov: 'Ana Karenjina', 
          autor: 'Lav Tolstoj', 
          opis: 'Priča o ljubavi, društvu i obiteljskim dilemama kroz tragičnu sudbinu Ane Karenjine.' 
        },
        { 
          id: 5, 
          naslov: 'Veliki Gatsby', 
          autor: 'F. Scott Fitzgerald', 
          opis: 'Priča o luksuzu, ljubavi i društvenim ambicijama u 1920-im kroz lik Jaya Gatsbyja.' 
        },
        { 
          id: 6, 
          naslov: 'Mali princ', 
          autor: 'Antoine de Saint-Exupéry', 
          opis: 'Filozofska pripovijetka o malom princu i njegovim putovanjima kroz svjetove, tražeći prijateljstvo i ljubav.' 
        },
        { 
          id: 7, 
          naslov: 'Sto godina samoće', 
          autor: 'Gabriel García Márquez', 
          opis: 'Ep o obitelji Buendía u mitskom mjestu Macondo, koji prati generacije obitelji kroz ljubav, ratove i magijski realizam.' 
        },
        { 
          id: 8, 
          naslov: 'Zločin i kazna', 
          autor: 'Fjodor Dostojevski', 
          opis: 'Roman o moralnoj dilemi i psihološkoj borbi čovjeka koji se suočava sa svojim zločinom i posljedicama.' 
        }
      ],
      columns: [
        { name: 'id', label: 'ID', field: 'id', align: 'left' },
        { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left' },
        { name: 'autor', label: 'Autor', field: 'autor', align: 'left' },
        { name: 'opis', label: 'Opis', field: 'opis', align: 'left' }
      ]
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => {
        if (this.searchByTitle && book.naslov.toLowerCase().includes(this.searchQuery.toLowerCase())) return true;
        if (this.searchByAuthor && book.autor.toLowerCase().includes(this.searchQuery.toLowerCase())) return true;
        return false;
      });
    }
  }
};
</script>


