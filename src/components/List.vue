<template>
  <div>
    <h1>Товары</h1>
    <ul class="ProductSet" v-bind:class="view">
      <li
        v-for="item in Products"
        v-bind:key="item.id"
        class="ProductCard"
        v-bind:class="view_c"
      >
        <div class="ProductCard__img-wrapper">
          <img
            :src="item.img + '2000'"
            :alt="item.text"
            class="ProductCard__img"
          />
        </div>
        <div class="ProductCard__details">
          <div class="ProductCard__details__header">
            <div class="ProductCard__titles">
              <h4 class="ProductCard__title">{{ item.text }}</h4>
              <h5 class="ProductCard__price">{{ item.cost }} ₽</h5>
            </div>
            <button @click="addToItems(item);" class="IconBtn">
              <svg
                class="Icon Icon--medium Icon--colored"
                viewBox="0 0 576 512"
              >
                <path
                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                />
              </svg>
            </button>
          </div>
          <p class="ProductCard__description">
            Описание товара {{ item.text }} - текст текст текст
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "List",
  data() {
    return {
      view: "ProductSet--grid",
      view_c: "ProductCard--grid"
    };
  },
  computed: {
    ...mapGetters(["Products"])
  },
  methods: {
    ...mapActions(["addToItems"])
  }
};
</script>
