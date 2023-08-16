const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "reservations",
        component: () => import("pages/ReservationsPage.vue"),
      },
      { path: "cards", component: () => import("pages/AccountsPage.vue") },
    ],
  },
  {
    path: "/accounts",
    component: () => import("layouts/AccountsLayout.vue"),
    children: [{ path: "", component: () => import("pages/AccountsPage.vue") }],
  },
];

export default routes;
