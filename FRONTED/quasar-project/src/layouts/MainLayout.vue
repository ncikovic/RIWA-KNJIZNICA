<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-h2"> KNJIŽNICA </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Početna",
    caption: "Početna stranica",
    icon: "home",
    link: "#/",
  },
  {
    title: "Popis knjiga",
    caption: "Popis svih knjiga u knjižnici",
    icon: "book",
    link: "#/popisKnjiga",
  },
  {
    title: "Popis knjiga - baza",
    caption: "Baza knjiga",
    icon: "book",
    link: "#/PopisKnjigaBaza",
  },
  {
    title: "Rezervirane Knjige",
    caption: "Rezervirane knjige",
    icon: "book",
    link: "#/RezerviraneKnjige",
  },
  {
    title: "Pretraživanje ",
    caption: "Tražiš knjigu?",
    icon: "search",
    link: "#/Pretrazivanje",
  },
  {
    title: "O nama",
    caption: "o_nama",
    icon: "record_voice_over",
    link: "#/O_nama",
  },
  {
    title: "Lokacija",
    caption: "Gdje se nalazimo?",
    icon: "pin_drop",
    link: "#/Lokacija",
  },
  {
    title: "Login",
    caption: "Prijava korisnika",
    icon: "login",
    link: "#/Login",
  },
  {
    title: "Registracija",
    caption: "Registracija korisnika",
    icon: "app_registration",
    link: "#/Registracija",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
