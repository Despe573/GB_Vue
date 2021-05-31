<template>
  <main>
    <Button @click="clickBtn" :title="title" />
    <div :class="[$style.wrapper]">
      <PaymentForm v-show="this.title === 'Закрыть'" />
      <PaymentTable />
    </div>
  </main>
</template>

<script>
import PaymentForm from "../components/paymentForm.vue";
import PaymentTable from "../components/paymentTable.vue";
import Button from "../components/button.vue";
import { mapActions } from "vuex";

export default {
  name: "Dashboard",
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
.wrapper {
  display: flex;
  padding: 20px 50px;
}
</style>
