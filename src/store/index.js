import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";

export default {
  state: {
    items: [
      {
        id: 1,
        text: "Товар с длинным названием",
        cost: 100,
        img: "https://via.placeholder.com/"
      },
      {
        id: 2,
        text: "Товар с длинным названием",
        cost: 200,
        img: "https://via.placeholder.com/"
      },
      {
        id: 3,
        text: "lorem3",
        cost: 300,
        img: "https://via.placeholder.com/"
      },
      {
        id: 4,
        text: "lorem4",
        cost: 400,
        img: "https://via.placeholder.com/"
      },
      {
        id: 5,
        text: "lorem5",
        cost: 400,
        img: "https://via.placeholder.com/"
      },
      {
        id: 6,
        text: "lorem6",
        cost: 1400,
        img: "https://via.placeholder.com/"
      },
      {
        id: 7,
        text: "lorem7",
        cost: 900,
        img: "https://via.placeholder.com/"
      },
      {
        id: 8,
        text: "lorem8",
        cost: 1900,
        img: "https://via.placeholder.com/"
      }
    ],
    cart: {},
    delItem: {},
    TotalPositions: 0,
    Total: 0
  },
  getters,
  actions,
  mutations,
  plugins: [
    createPersistedState({
      key: "cart",
      paths: ["cart", "TotalPositions", "Total"]
    })
  ]
};
