export default {
  addToItems: ({ commit }, item) => commit("ADD_ITEM", item),
  removeItem: ({ commit }, item) => commit("REMOVE_ITEM", item),
  chengeQt: ({ commit }) => commit("CHENGE_QT"),
  revivalItem: ({ commit }) => commit("REVIVA")
};
