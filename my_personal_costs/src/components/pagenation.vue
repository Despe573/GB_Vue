<template>
  <div :class="[$style.center]">
    <div :class="[$style.wrapper]">
      <div :class="[$style.pageBtn]">{{ pre }}</div>
      <div
        v-for="page in numOfLines / 5"
        :key="page"
        :class="[$style.pageBtn]"
        @click="dispatchPage(page)"
      >
        {{ page }}
      </div>
      <div :class="[$style.pageBtn]">{{ next }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagenation",
  data() {
    return {
      pre: "<",
      next: ">",
    };
  },
  props: {
    numOfLines: {
      type: Number,
    },
  },
  methods: {
    dispatchPage(page) {
      this.$emit("PageNumber", page);
    },
  },
};
</script>

<style lang="scss" module>
.center {
  margin-bottom: 100px;
  margin-left: 200px;
  background-color: #f7f7f7;
  font-family: "Roboto", sans-serif;
  color: #242424;
  font-size: 18px;
  font-weight: 100;
  box-sizing: border-box;
}
.wrapper {
  display: flex;
  justify-content: center;
  width: 340px;
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
</style>