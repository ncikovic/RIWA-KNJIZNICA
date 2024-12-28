<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Zaglavlje sa nazivom -->
    <q-header elevated class="bg-midnight-blue text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="text-h2">KNJIŽNICA</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Drawer sa navigacijom -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-midnight-blue text-white"
    >
      <q-list>
        <q-item-label header class="text-h6 text-center text-white"
          >Gradska knjižnica Rijeka</q-item-label
        >

        <q-item
          v-for="link in linksList"
          :key="link.title"
          clickable
          @click="navigateTo(link.route)"
          class="nav-item"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" size="xl" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-white">{{ link.title }}</q-item-label>
            <q-item-label caption class="text-grey-4">{{
              link.caption
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Glavni sadržaj -->
    <q-page-container class="page-background">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  { title: "Početna", caption: "Početna stranica", icon: "home", route: "/" },
  {
    title: "Popis knjiga",
    caption: "Popis svih knjiga u knjižnici",
    icon: "book",
    route: "/popisKnjiga",
  },
  {
    title: "Popis knjiga - baza",
    caption: "Baza knjiga",
    icon: "book",
    route: "/PopisKnjigaBaza",
  },
  {
    title: "Rezervirane Knjige",
    caption: "Rezervirane knjige",
    icon: "book",
    route: "/RezerviraneKnjige",
  },
  {
    title: "Pretraživanje",
    caption: "Tražiš knjigu?",
    icon: "search",
    route: "/Pretrazivanje",
  },
  {
    title: "O nama",
    caption: "O nama",
    icon: "record_voice_over",
    route: "/O_nama",
  },
  {
    title: "Lokacija",
    caption: "Gdje se nalazimo?",
    icon: "pin_drop",
    route: "/Lokacija",
  },
  {
    title: "Login",
    caption: "Prijava korisnika",
    icon: "login",
    route: "/Login",
  },
  {
    title: "Registracija",
    caption: "Registracija korisnika",
    icon: "app_registration",
    route: "/Registracija",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const router = useRouter();
function navigateTo(route) {
  router.push(route);
}
</script>

<style scoped>
/* Glavna pozadinska boja - Midnight Blue */
.page-background {
  background-color: #cfcfcf;
  color: white;
}

/* Styling za navigacijski izbornik */
.bg-midnight-blue {
  background-color: #10105a; /* Midnight Blue */
}

.text-white {
  color: #ffffff;
}

.text-grey-4 {
  color: #cecece;
}

.nav-item {
  transition: background-color 0.3s ease;
}

.nav-item:hover {
  background-color: #200202e3;
}

.q-drawer .q-item {
  border-bottom: 1px solid #122849;
}

.q-item-label {
  font-size: 16px;
}

/* Za centriranje naslova u izborniku */
.q-item-label.header {
  text-align: center;
}

/* Veći ikone u izborniku */
.q-icon {
  color: #10105a;
}
</style>
