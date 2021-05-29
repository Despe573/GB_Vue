<template>
  <div>
    <header :class="[$style.header]">Мои расходы</header>
    <main>
      <Button @click="clickBtn" :title="title" />
      <div :class="[$style.wrapper]">
        <PaymentForm v-show="this.title === 'Закрыть'" />
        <PaymentTable />
      </div>
    </main>
  </div>
</template>

<script>
import PaymentForm from "./components/paymentForm.vue";
import PaymentTable from "./components/paymentTable.vue";
import Button from "./components/button.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentTable,
    PaymentForm,
    Button,
  },
  data() {
    return {
      title: "Добавить +",
    };
  },
  methods: {
    ...mapActions(["loadPage", "fetchData"]),

    clickBtn() {
      let { title } = this;
      if (title === "Добавить +") {
        this.title = "Закрыть";
        this.active = true;
      }
      if (title === "Закрыть") {
        this.title = "Добавить +";
        this.active = false;
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<style lang="scss" module>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic);

body {
  background-color: #f7f7f7;
  font-family: "Roboto", sans-serif;
  color: #242424;
  font-size: 18px;
  font-weight: 100;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.header {
  min-width: 1300px;
  border-bottom: 1px solid #b5b7ba;
  background-color: #dfdfdf;
  margin: 0 auto;
  height: 50px;
  padding-top: 18px;
  padding-left: 50px;
  font-size: 24px;
}
.wrapper {
  display: flex;
  padding: 20px 50px;
}
</style>
