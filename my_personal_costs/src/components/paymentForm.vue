<template>
  <div :class="[$style.wrapper]">
    <label :class="[$style.label]">Дата</label>
    <br />
    <input :class="[$style.input]" v-model="date" />
    <br />
    <label :class="[$style.label]">Категория</label>
    <br />
    <input
      type="text"
      :class="[$style.input]"
      v-model="category"
      list="category"
    />
    <datalist id="category" :class="[$style.input]">
      <option
        v-for="(elem, index) in getCategoryList"
        :key="index"
        :value="elem"
      >
        {{ elem }}
      </option>
    </datalist>
    <br />
    <label :class="[$style.label]">Сумма</label>
    <br />
    <input :class="[$style.input]" placeholder="Сумма" v-model="price" />
    <br />
    <button :class="[$style.btn]" @click="onSave()">Сохранить</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

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
    ...mapMutations(["saveNewPayment", "setCategoryData"]),
    ...mapActions(["fetchCategoryData"]),

    onSave() {
      const {
        date,
        category,
        price,
        saveNewPayment,
        getCategoryList,
        setCategoryData,
      } = this;

      let data = {
        date: date,
        category: category,
        price: price,
      };
      saveNewPayment(data);

      if (!getCategoryList.includes(category)) {
        setCategoryData(category);
      }
    },
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.fetchCategoryData();
    }
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
  border: 1px solid black;
}
.label {
  padding-bottom: 8px;
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