<template>
  <div :class="[$style.center]">
    <div :class="[$style.wrapper]">
      <router-link
        tag="div"
        :to="{ name: 'dashboard', params: { page: clickPage(curPage - 1) } }"
        :class="[$style.pageBtn]"
      >
        {{ pre }}
      </router-link>
      <router-link
        tag="div"
        v-for="p in numOfPage"
        :key="p"
        :class="[$style.pageBtn, { [$style.active]: curPage === p }]"
        :to="{ name: 'dashboard', params: { page: p } }"
      >
        {{ p }}
      </router-link>
      <router-link
        tag="div"
        :to="{ name: 'dashboard', params: { page: clickPage(curPage + 1) } }"
        :class="[$style.pageBtn]"
      >
        {{ next }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "pagenation",
  data() {
    return {
      pre: "<",
      next: ">",
    };
  },
  props: {
    curPage: Number,
  },
  methods: {
    clickPage(p) {
      if (p < 1) {
        return 1;
      }
      if (p > this.numOfPage) {
        return (p = this.numOfPage);
      }
      return p;
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),

    numOfPage() {
      return Object.keys(this.getPaymentsList).length;
    },
  },
};
</script>

<style lang="scss" module>
.center {
  margin-bottom: 100px;
  background-color: #f7f7f7;
  font-family: "Roboto", sans-serif;
  color: #242424;
  font-size: 18px;
  font-weight: 100;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.wrapper {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 4px 0;
}
.pageBtn {
  padding: 0 8px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
}
.active {
  color: blue;
}
</style>