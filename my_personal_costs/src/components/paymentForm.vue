<template>
  <div :class="[$style.wrapper]">
    <label>Дата</label>
    <br />
    <input type="date" :class="[$style.input]" v-model="date" /> <br />
    <label>Категория</label>
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
    <label>Сумма</label>
    <br />
    <input :class="[$style.input]" placeholder="500" v-model="price" />
    <br />
    <button :class="[$style.btn]" @click="onSave()">Сохранить</button>
    <button :class="[$style.btn]" @click="onСlose()">Закрыть</button>
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
      price: "",
    };
  },
  methods: {
    ...mapMutations(["saveNewPayment", "setCategoryData"]),
    ...mapActions(["fetchCategoryData"]),

    onSave() {
      let {
        date,
        category,
        price,
        formatDate,
        saveNewPayment,
        getCategoryList,
        setCategoryData,
      } = this;

      if (date === "") {
        date = new Date();
      }

      let data = {
        date: formatDate(date),
        category: category,
        price: price,
      };

      saveNewPayment(data);

      if (!getCategoryList.includes(category)) {
        setCategoryData(category);
      }
    },

    onСlose() {
      this.$modal.hide();
    },

    formatDate(item) {
      let date = new Date(item);
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let formatMonth = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];
      return `${day}.${formatMonth[month]}.${year}`;
    },
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.fetchCategoryData();
    }

    this.category = this.$route.params.category;
    if (this.$route.params.category == "undefined") {
      this.category = "";
    }

    this.price = Number(this.$route.query.value);
    if (isNaN(this.price)) {
      this.price = "";
    }

    if (this.category !== "" && this.price !== "") {
      setTimeout(this.onSave(), 0);
    }
  },
};
</script>

<style lang="scss" module>
.wrapper {
  margin-top: 1em;
}
.input {
  margin-top: 8px;
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