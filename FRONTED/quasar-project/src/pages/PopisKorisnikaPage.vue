<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Popis Korisnika</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-table
          :rows="korisnici"
          :columns="columns"
          row-key="id"
          flat
          bordered
        >
          <template #body-cell-actions="props">
            <q-btn
              flat
              icon="delete"
              color="red"
              @click="deleteKorisnik(props.row.id)"
            />
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const korisnici = ref([
  { id: 1, ime: "Ana", prezime: "Anić", email: "ana@example.com" },
  { id: 2, ime: "Marko", prezime: "Markić", email: "marko@example.com" },
  { id: 3, ime: "Ivana", prezime: "Ivić", email: "ivana@example.com" },
]);

const columns = [
  { name: "ime", align: "left", label: "Ime", field: "ime" },
  { name: "prezime", align: "left", label: "Prezime", field: "prezime" },
  { name: "email", align: "left", label: "Email", field: "email" },
  {
    name: "actions",
    align: "center",
    label: "Akcije",
    field: "actions",
    sortable: false,
  },
];

function deleteKorisnik(id) {
  korisnici.value = korisnici.value.filter((korisnik) => korisnik.id !== id);
}
</script>

<style scoped>
.text-h6 {
  font-weight: bold;
}
</style>
