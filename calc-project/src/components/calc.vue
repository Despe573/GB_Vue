<template>
  <div>
    <div class="display">
      <div :class="[$style.error]" v-if="error">Ошибка! {{ error }}</div>
      <br />
      <input
        v-model.number="operand1"
        ref="op1"
        placeholder="0"
        @click="focus('op1')"
      />
      <input
        v-model.number="operand2"
        ref="op2"
        placeholder="0"
        @click="focus('op2')"
      />
      = {{ result }}
    </div>
    <br />
    <div class="operations">
      <button
        v-for="(operation, index) in operations"
        :key="index"
        @click="calculate(operation)"
      >
        {{ operation }}
      </button>
    </div>
    <br />
    <br />
    <input type="checkbox" id="checkbox" v-model="checkKey" />
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <br />
    <br />
    <div v-if="checkKey" class="keyboard">
      <button
        v-for="(key, index) in keyboard"
        :key="index"
        @click="inputOp(key)"
      >
        {{ key }}
      </button>
      <button @click="delOp">{{ backspace }}</button>
      <br />
      <br />
      <input type="radio" id="one" value="one" v-model="picked" />
      <label for="one">Операнд 1</label>
      <input type="radio" id="two" value="two" v-model="picked" />
      <label for="two">Операнд 2</label>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: "",
      operand2: "",
      result: 0,
      error: "",
      operations: ["+", "-", "/", "*", "%", "**"],
      keyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      checkKey: "",
      picked: "one",
      backspace: "<--",
    };
  },
  methods: {
    calculate(op) {
      let { operand1, operand2 } = this;
      operand1 = +operand1;
      operand2 = +operand2;
      this.error = "";
      switch (op) {
        case "+":
          this.result = operand1 + operand2;
          break;
        case "-":
          this.result = operand1 - operand2;
          break;
        case "/":
          if (operand2 === 0) {
            this.error = "Делить на 0 нельзя!";
          } else {
            this.result = operand1 / operand2;
          }
          break;
        case "*":
          this.result = operand1 * operand2;
          break;
        case "%":
          if (operand2 === 0) {
            this.error = "Делить на 0 нельзя!";
          } else {
            this.result = operand1 % operand2;
          }
          break;
        case "**":
          this.result = operand1 ** operand2;
          break;
      }
    },

    inputOp(key) {
      let { picked } = this;
      let { operand1, operand2 } = this;
      if (picked === "one") {
        this.$refs.op1.focus();
        if (key === 0 && operand1.length === 0) {
          operand1 = "";
        } else {
          this.operand1 = `${operand1}${key}`;
        }
      }
      if (picked === "two") {
        this.$refs.op2.focus();
        if (key === 0 && operand2.length === 0) {
          operand2 = "";
        } else {
          this.operand2 = `${operand2}${key}`;
        }
      }
    },

    delOp() {
      let { picked } = this;
      if (picked === "one") {
        this.operand1 = this.operand1.slice(0, -1);
      }
      if (picked === "two") {
        this.operand2 = this.operand2.slice(0, -1);
      }
    },

    focus(ev) {
      if (ev === "op1") {
        this.picked = "one";
      }
      if (ev === "op2") {
        this.picked = "two";
      }
    },
  },
};
</script>

<style lang="scss" module>
.error {
  color: red;
}
</style>