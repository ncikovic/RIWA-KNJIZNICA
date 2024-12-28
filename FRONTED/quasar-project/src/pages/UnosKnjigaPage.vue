<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form class="q-gutter-md" @submit.prevent="onSubmit" @reset="onReset">
      <q-input
        filled
        v-model="naslov"
        label="Naslov knjige"
        hint="Naslov knjige"
      />
      <q-input filled v-model="autor" label="Autor" />
      <q-input filled v-model="opis" label="Opis" />
      <q-input filled v-model="slika" label="URL slike" />
      <q-input filled v-model="stanje" label="Stanje knjige" />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn
          label="Submit"
          type="submit"
          color="primary"
          @click="insertBook()"
        />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const naslov = ref(null);
    const autor = ref(null);
    const opis = ref(null);
    const slika = ref(null);
    const stanje = ref(null);
    const accept = ref(false);

    const onSubmit = () => {
      console.log("Form submitted");
      // Dodajte logiku za slanje podataka ili spremanje
    };

    const onReset = () => {
      naslov.value = "";
      autor.value = "";
      opis.value = "";
      slika.value = "";
      stanje.value = "";
      accept.value = false;
    };

    return {
      naslov,
      autor,
      opis,
      slika,
      stanje,
      accept,
      onSubmit,
      onReset,
    };
  },
  methods: {
    async insertBook() {
      const formData = {
        naslov: this.naslov,
        autor: this.autor,
        opis: this.opis,
        slika: this.slika,
        stanje: this.stanje,
      };

      try {
        const result = await axios.post(
          "http://localhost:3000/api/unos_knjiga/",
          formData
        );
        console.log(result.data);
        alert("Knjiga je uspješno unesena!");
      } catch (error) {
        console.error("Greška pri unosu knjige:", error);
        alert("Došlo je do greške pri unosu knjige.");
      }
    },
  },
};
</script>
