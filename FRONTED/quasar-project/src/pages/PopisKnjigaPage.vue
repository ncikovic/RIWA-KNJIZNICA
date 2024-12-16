<template>
  <q-page padding>
    <h1>Popis Knjiga</h1>
    <p>Ovdje možete pronaći popis svih knjiga u našoj knjižnici.</p>
    <q-table :rows="books" :columns="columns" row-key="id">
      <template v-slot:body-cell-slika="props">
        <div v-if="props.row.slika">
          <img
            :src="props.row.slika"
            alt="Slika knjige"
            style="height: 100px; width: auto"
          />
        </div>
        <div v-else>
          <span>Nema slike</span>
        </div>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          id: 1,
          naslov: "Ponos i predrasude",
          autor: "Jane Austen",
          opis: "Roman koji istražuje društvene običaje i složenost ljubavi kroz priču o Elizabeth Bennet i gospodinu Darcyju.",
          slika:
            "https://shop.skolskaknjiga.hr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/169875.jpg",
          stanje: 5,
        },
        {
          id: 2,
          naslov: "1984",
          autor: "George Orwell",
          opis: "Distopijski roman o totalitarnom društvu i borbi pojedinca za slobodu misli i izražavanja.",
          slika:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIhaak-ljdhABP-56I6_jZgM6SkfdcT7GKA&s",
          stanje: 3,
        },
        {
          id: 3,
          naslov: "Lovac u žitu",
          autor: "J.D. Salinger",
          opis: "Roman o adolescentskom otuđenju i potrazi za smislom kroz priču o Holden Caulfieldu.",
          slika:
            "https://znanje.hr/product-images/c04d81d7-06a5-4f00-b12d-2a0fb65abe73.jpg",
          stanje: 2,
        },
        {
          id: 4,
          naslov: "Ana Karenjina",
          autor: "Lav Tolstoj",
          opis: "Priča o ljubavi, društvu i obiteljskim dilemama kroz tragičnu sudbinu Ane Karenjine.",
          slika:
            "https://m.media-amazon.com/images/M/MV5BMTU0NDgxNDg0NV5BMl5BanBnXkFtZTcwMjE4MzkwOA@@._V1_.jpg",
          stanje: 4,
        },
        {
          id: 5,
          naslov: "Veliki Gatsby",
          autor: "F. Scott Fitzgerald",
          opis: "Priča o luksuzu, ljubavi i društvenim ambicijama u 1920-im kroz lik Jaya Gatsbyja.",
          slika:
            "https://shop.skolskaknjiga.hr/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/4/147048.jpg",
          stanje: 6,
        },
        {
          id: 6,
          naslov: "Mali princ",
          autor: "Antoine de Saint-Exupéry",
          opis: "Filozofska pripovijetka o malom princu i njegovim putovanjima kroz svjetove, tražeći prijateljstvo i ljubav.",
          slika:
            "https://www.profil.hr/wp-content/uploads/Mali-princ-scaled.jpeg",
          stanje: 7,
        },
        {
          id: 7,
          naslov: "Sto godina samoće",
          autor: "Gabriel García Márquez",
          opis: "Ep o obitelji Buendía u mitskom mjestu Macondo, koji prati generacije obitelji kroz ljubav, ratove i magijski realizam.",
          slika:
            "https://shop.skolskaknjiga.hr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/1/118679_1.jpg",
          stanje: 5,
        },
        {
          id: 8,
          naslov: "Zločin i kazna",
          autor: "Fjodor Dostojevski",
          opis: "Roman o moralnoj dilemi i psihološkoj borbi čovjeka koji se suočava sa svojim zločinom i posljedicama.",
          slika:
            "https://www.sareni-ducan.hr/wp-content/uploads/2023/01/zlocin_kazna.jpg",
          stanje: 4,
        },
      ],
      columns: [
        { name: "id", label: "ID", field: "id", align: "left" },
        { name: "naslov", label: "Naslov", field: "naslov", align: "left" },
        { name: "autor", label: "Autor", field: "autor", align: "left" },
        { name: "opis", label: "Opis", field: "opis", align: "left" },
        { name: "slika", label: "Slika", field: "slika", align: "left" },
        { name: "stanje", label: "Stanje", field: "stanje", align: "left" },
      ],
    };
  },
};
</script>
