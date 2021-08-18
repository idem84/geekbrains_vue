<template>
  <div class="calc">
    <div>
      <input type="number" placeholder="Operand1" v-model.number="operand1" />
      <input type="number" placeholder="Operand2" v-model.number="operand2" />
     <br>
      = {{ result }}
      <br>
      = fibReuslt - {{ fibReuslt }}


      <input type="text" placeholder="Operand1" v-model="user.data.name" />
      <input type="text" placeholder="Operand2" v-model="user.data.fio" />



      <div class="strange-message">
        <template v-if="result < 0">Отричательное число</template>
        <template v-else-if="result < 100">Результат в первой сотне</template>
        <template v-else>Все остальное</template>
      </div>

      <div v-if="!!error">
        Ошибка:
        {{ error }}
      </div>

      <div v-show="!!error" :class="{'error': !!error}">
        Ошибка:
        {{ error }}
      </div>

      <div class="keyboard">
        <button v-for="operation in opeations" 
                :key="operation"
                @click="calculate(operation)"
                :title="operation"
        >
                {{ operation }}
        </button>
      </div>

      <div class="array">
        {{ myCollection }}
        <div v-for="(item, index) in myCollection" :key="`${index}_list`">
          {{ index }} - {{ item }}
        </div>
      </div>
      <div class="logs">
        logs
        <br>
        <div v-for="(log, id) in logs" :key="id">
        {{id}}  -   {{log}}
        </div>
      </div>
      fib1- {{ fib1 }}
      fib2- {{ fib2 }}

      <template v-if="fib1 > 144">{{ alarmText }}</template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    fibReuslt: 0,
    error: "",
    opeations: ['+', '-', "*", "/"],
    myCollection: [1, 1, 2, 3, 4, 5, 6],
    alarmText: "Аккуратно, долгое вычисление",
    showAlarm: false,
    logs: {},
    user: {
      data: {
        name: "asda",
        fio: "asdas"
      },
    }
  }),
  watch: {
    'user.data.name': {
      deep: true,
      handler(){
        console.log('update', this.user)
      }
    },
    fib1(value) {
      console.log(value)
    }
  },
  methods: {
    fib(n) {
      return n <= 1 ? n: this.fib(n-1) + this.fib(n-2)
    },
    calculate(operation = "+") {
      const {operand1, operand2, result} = this
      this.error = "";
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.sub();
          break;
        case "/":
          this.div();
          break;
        case "*":
          this.mul();
          break;
      }
      const key = Date.now()
      const value = `${operand1}${operation}${operand2} = ${result}`
      this.$set(this.logs, key, value)
     // this.logs[Date.now()] = `${operand1}${operation}${operand2} = ${result}`
    },
    sum() {
      this.result = this.operand1 + this.operand2;
      this.fibReuslt = this.fib1 + this.fib2
    },
    sub() {
      this.result = this.operand1 - this.operand2;
       this.fibReuslt = this.fib1 -  this.fib2
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "На 0 делить нельзя";
      } else {
        this.result = operand1 / operand2;
      }
    },
    mul() {
      this.result = this.operand1 * this.operand2;
    }
  },
  computed: {
    fib1(){
      return this.fib(this.operand1)
    },
    fib2(){
      return this.fib(this.operand2)
    },
  }
};
</script>


<style scoped lang="scss">
.error {
  color:red;
}
</style>
