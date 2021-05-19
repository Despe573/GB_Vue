<template>
  <div :class="[$style.wrapper]">
    <input :class="[$style.input]" placeholder="Дата" v-model="date" />
    <br />
    <input :class="[$style.input]" placeholder="Категория" v-model="category" />
    <br />
    <input :class="[$style.input]" placeholder="Сумма" v-model="price" />
    <br />
    <button :class="[$style.btn]" @click="onSave()">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: "paymentForm",
  data() {
    return {
      date: "",
      category: "",
      price: 0,
    };
  },
  methods: {
    onSave() {
      let data = {
        date: this.date,
        category: this.category,
        price: this.price,
      };
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  margin-top: 1em;
}
.input {
  margin-bottom: 20px;
  padding: 8px;
  width: 200px;
  background-color: #f7f7f7;
  font-family: "Roboto", sans-serif;
  color: #242424;
  font-size: 18px;
  font-weight: 100;
  box-sizing: border-box;
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