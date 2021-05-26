<template>
  <div :class="[$style.center]">
    <div :class="[$style.wrapper]">
      <div :class="[$style.pageBtn]" @click="clickPage(curPage - 1)">
        {{ pre }}
      </div>
      <div
        v-for="p in numOfPage"
        :key="p"
        :class="[$style.pageBtn, { [$style.active]: curPage === p }]"
        @click="clickPage(p)"
      >
        {{ p }}
      </div>
      <div :class="[$style.pageBtn]" @click="clickPage(curPage + 1)">
        {{ next }}
      </div>
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
      if (p < 1 || p > this.numOfPage) {
        return;
      }
      this.$emit("PageNumber", p);
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