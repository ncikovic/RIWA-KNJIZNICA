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

        <q-toolbar-title class="text-h2"> {{ title }} </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <q-item
          v-for="link in linksList"
          :key="link.title"
          clickable
          @click="navigateTo(link.route)"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
            <q-item-label caption>{{ link.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "AdminLayout",
});

let title = computed(() => {
  return "Knjižnica (admin)";
});

const linksList = [
  {
    title: "Početna",
    caption: "Početna stranica",
    icon: "home",
    route: "/admin",
  },
  {
    title: "Popis knjiga",
    caption: "Popis svih knjiga u knjižnici",
    icon: "book",
    route: "/admin/popisKnjiga",
  },
  {
    title: "Pretraživanje ",
    caption: "Tražiš knjigu?",
    icon: "search",
    route: "/admin/Pretrazivanje",
  },
  {
    title: "Popis korisnika",
    caption: "Popis korisnika knjižnice",
    icon: "local_library",
    route: "/admin/PopisKorisnika",
  },
  {
    title: "Unos knjiga",
    caption: "Ovdje možete unijeti novu knjigu",
    icon: "local_library",
    route: "/admin/UnosKnjiga",
  },
  {
    title: "Logout",
    caption: "Odjava admina",
    icon: "login",
    route: "/Logout",
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
