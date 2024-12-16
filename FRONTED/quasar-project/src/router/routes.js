const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/popisKnjiga",
        component: () => {
          return import("pages/PopisKnjigaPage.vue");
        },
      },
      {
        path: "/PopisKnjigaBaza",
        component: () => {
          return import("pages/PopisKnjigaBazaPage.vue");
        },
      },
      {
        path: "/Pretrazivanje",
        component: () => {
          return import("pages/PretrazivanjePage.vue");
        },
      },
      {
        path: "/RezerviraneKnjige",
        component: () => {
          return import("pages/RezerviraneKnjige.vue");
        },
      },
      {
        path: "/O_nama",
        component: () => {
          return import("pages/O_namaPage.vue");
        },
      },
      {
        path: "/Lokacija",
        component: () => {
          return import("pages/LokacijaPage.vue");
        },
      },
      {
        path: "/Login",
        component: () => {
          return import("pages/LoginPage.vue");
        },
      },
      {
        path: "/Registracija",
        component: () => {
          return import("pages/RegistracijaPage.vue");
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
