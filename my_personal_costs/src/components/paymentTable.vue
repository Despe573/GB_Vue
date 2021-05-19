<template>
  <div>
    <ul>
      <li :class="[$style.list]">
        <div :class="[$style.head]">№</div>
        <div :class="[$style.head]">Дата</div>
        <div :class="[$style.head]">Категория</div>
        <div :class="[$style.head]">Сумма</div>
      </li>
      <li :class="[$style.list]" v-for="(item, index) in items" :key="index">
        <div :class="[$style.width]">{{ index + 1 }}</div>
        <div :class="[$style.width]">{{ item.date }}</div>
        <div :class="[$style.width]">{{ item.category }}</div>
        <div :class="[$style.width]">{{ item.price }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "paymentTable",
  props: {
    items: {
      type: Array,
    },
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