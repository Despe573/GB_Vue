<template>
  <div :class="[$style.wrapper]" v-if="modalName === 'PaymentForm'">
    <div :class="[$style.overlay]"></div>
    <div :class="[$style.content]">
      <PaymentForm v-if="modalName === 'PaymentForm'" />
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
    modalSettings: Object,
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
}
.content {
  position: relative;
  z-index: 100;
}
</style>
