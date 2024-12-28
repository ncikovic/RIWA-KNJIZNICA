const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/popisKnjiga",
        component: () => import("pages/PopisKnjigaPage.vue"),
      },
      {
        path: "/Pretrazivanje",
        component: () => import("pages/PretrazivanjePage.vue"),
      },
      { path: "/O_nama", component: () => import("pages/O_namaPage.vue") },
      { path: "/Lokacija", component: () => import("pages/LokacijaPage.vue") },
      { path: "/Login", component: () => import("pages/LoginPage.vue") },
      {
        path: "/Registracija",
        component: () => import("pages/RegistracijaPage.vue"),
      },
      {
        path: "/PopisKnjigaBaza",
        component: () => import("pages/PopisKnjigaBazaPage.vue"),
      },
      {
        path: "/Rezervacija",
        component: () => import("pages/RezervacijaPage.vue"),
      },
    ],
  },

  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/admin/popisKnjiga",
        component: () => import("pages/PopisKnjigaPage.vue"),
      },
      {
        path: "/admin/Pretrazivanje",
        component: () => import("pages/PretrazivanjePage.vue"),
      },
      {
        path: "/admin/PopisKorisnika",
        component: () => import("pages/PopisKorisnikaPage.vue"),
      },
      {
        path: "/admin/UnosKnjiga",
        component: () => import("pages/UnosKnjigaPage.vue"),
      },
      { path: "/Logout", component: () => import("pages/LogoutPage.vue") },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
