<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" />
      <input v-model.number="operand2" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button value="sum" @click="calculate($event)">+</button>
      <button value="sub" @click="calculate($event)">-</button>
      <button value="div" @click="calculate($event)">/</button>
      <button value="mul" @click="calculate($event)">*</button>
      <button value="int" @click="calculate($event)">%</button>
      <button value="exp" @click="calculate($event)">**</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    calculate(event) {
      switch (event.target.value) {
        case "sum":
          this.result = this.operand1 + this.operand2;
          break;
        case "sub":
          this.result = this.operand1 - this.operand2;
          break;
        case "div":
          this.result = this.operand1 / this.operand2;
          break;
        case "mul":
          this.result = this.operand1 * this.operand2;
          break;
        case "int":
          this.result = this.operand1 % this.operand2;
          break;
        case "exp":
          this.result = this.operand1 ** this.operand2;
          break;
      }
    },
  },
};
</script>

<style>
</style>