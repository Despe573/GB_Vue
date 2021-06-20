<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.overlay]"></div>
    <div :class="[$style.content]">
      <component :is="modalName" />
    </div>
  </div>
</template>

<script>
import PaymentForm from "./paymentForm.vue";

export default {
  name: "modalWindow",
  components: {
    PaymentForm,
  },
  props: {
    modalName: String,
  },
};
</script>
<style lang="scss" module>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100vh;
}
.overlay {
  z-index: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(50, 50, 50, 0.5);
  width: 100%;
  height: 100vh;
}
.content {
  position: relative;
  z-index: 100;
  text-align: center;
  margin: 15% 40%;
  color: white;
}
</style>
