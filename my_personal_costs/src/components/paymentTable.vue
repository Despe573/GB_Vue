<template>
  <div>
    <ul>
      <li :class="[$style.list]">
        <div :class="[$style.head]">№</div>
        <div :class="[$style.head]">Дата</div>
        <div :class="[$style.head]">Категория</div>
        <div :class="[$style.head]">Сумма</div>
      </li>
      <li
        :class="[$style.list]"
        v-for="(item, index) in getPaymentsList.page1"
        :key="index"
      >
        <div :class="[$style.width]">{{ item.id }}</div>
        <div :class="[$style.width]">{{ item.date }}</div>
        <div :class="[$style.width]">{{ item.category }}</div>
        <div :class="[$style.width]">{{ item.price }}</div>
      </li>
    </ul>
    <Pagenation
      :length="10"
      :itemsOnPage="itemsOnPage"
      :curPage="page"
      @PageNumber="getPage"
    />
  </div>
</template>


<script>
import Pagenation from "./pagenation";
import { mapGetters } from "vuex";

export default {
  name: "paymentTable",
  components: {
    Pagenation,
  },
  data() {
    return {
      page: 1,
      itemsOnPage: 10,
    };
  },
  methods: {
    getPage(p) {
      this.page = p;
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),

    // getItems() {
    //   const { page, itemsOnPage } = this;
    //   return this.getPaymentsList.slice(
    //     itemsOnPage * (page - 1),
    //     itemsOnPage * (page - 1) + itemsOnPage
    //   );
    // },
  },
};
</script>

<style lang="scss" module>
.list {
  display: flex;
  text-align: center;
  width: 600px;
  height: 40px;
  justify-content: space-around;
}
.head {
  font-size: 20px;
  font: bold;
  font-weight: normal;
  width: 150px;
}
.width {
  width: 150px;
}
</style>