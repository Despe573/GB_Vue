<template>
  <div>
    <div class="display">
      <div :class="[$style.error]" v-if="error">Ошибка! {{ error }}</div>
      <input v-model="operand1" />
      <input v-model="operand2" />
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
      <br />
      <br />
      <input
        type="radio"
        id="one"
        value="one"
        v-model="picked"
        @click="clickPicked(picked)"
      />
      <label for="one">Операнд 1</label>
      <input
        type="radio"
        id="two"
        value="two"
        v-model="picked"
        @click="clickPicked(picked)"
      />
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
      operand1: [0],
      operand2: 0,
      result: 0,
      error: "",
      operations: ["+", "-", "/", "*", "%", "**"],
      keyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "<--"],
      checkKey: "",
      picked: "",
      op1: [],
      op2: [],
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
      if (this.picked === "one") {
        console.log(key, this.op1.length);
        if (key === 0 && this.op1.length === 0) {
          this.clickPicked("one");
        } else if (key === "<--" && this.op1.length > 0) {
          this.op1.pop();
          this.arrToString("one");
        } else {
          this.op1.push(key);
          this.arrToString("one");
        }
        if (this.picked === "two") {
          this.op2.push(key);
          this.arrToString("two");
        }
      }
    },
    clickPicked(p) {
      if (p === "two") {
        this.operand1 = 0;
        this.op1 = [];
      }
      if (p === "one") {
        this.operand2 = 0;
        this.op2 = [];
      }
    },
    arrToString(param) {
      if (param === "one") {
        this.operand1 = this.op1.join("");
      }
      if (param === "two") {
        this.operand2 = this.op2.join("");
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" module>
.error {
  color: red;
}
</style>