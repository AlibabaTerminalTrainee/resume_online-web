import TestA from "../views/home/TestA.vue"

export default [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
    },
    component: TestA,
  },
];