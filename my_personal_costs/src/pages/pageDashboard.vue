<template>
  <main>
    <Button @click="clickBtn" :title="title" @ />
    <div :class="[$style.wrapper]">
      <PaymentTable />
    </div>
  </main>
</template>

<script>
import PaymentTable from "../components/paymentTable.vue";
import Button from "../components/button.vue";
import { mapActions } from "vuex";
export default {
  name: "Dashboard",
  components: {
    PaymentTable,
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
        this.$modal.show("PaymentForm");
      }
      if (title === "Закрыть") {
        this.title = "Добавить +";
        this.$modal.hide();
      }
    },
    renameButton() {
      this.title = "Добавить +";
    },
  },
  mounted() {
    this.fetchData();
    if (this.$route.params.category) {
      this.title = "Закрыть";
    } else {
      this.title = "Добавить +";
    }

    this.$modal.EventBus.$on("hide", this.renameButton);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("hide", this.renameButton);
  },
};
</script>
<style lang="scss" module>
.wrapper {
  display: flex;
  padding: 20px 50px;
}
</style>