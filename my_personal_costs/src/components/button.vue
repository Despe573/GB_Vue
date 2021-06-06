<template>
  <div :class="[$style.wrapper]">
    <button @click="click" :class="[$style.btn]">{{ title }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      default: "Press",
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  margin: 20px 0 0 50px;
  width: 200px;
}
.btn {
  border-radius: 4px;
  padding: 4px 12px;
  font-family: "Roboto", sans-serif;
  color: #242424;
  font-size: 18px;
  background-color: aqua;
  width: 150px;
  margin: 0 auto;
  display: block;
  &:hover {
    background-color: #dfdfdf;
    box-shadow: 0 0 35px lightseagreen;
  }
}
</style>