<template>
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <ul>
    <li v-for="num in numbers" :key="num">
      <h1>{{num}}</h1>
    </li>
  </ul>
  <h1>{{person.name}}</h1>
  <div class="button" @click="increase">👍+1</div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import { computed, reactive, toRefs, onMounted, onUpdated, onRenderTriggered, watch } from "vue"
interface DataProps {
  count: number
  double: number
  increase: () => void
  numbers: number[]
  person: { name?: string }
}
export default {
  name: "App",
  setup() {
    // const count = ref(0)
    // const double = computed(() => {
    //   return count.value * 2
    // })
    // const increase = () => {
    //   count.value++
    // }
    onMounted(() => {
      console.log("onMounted")
    })
    onUpdated(() => {
      console.log("onUpdated")
    })
    // debugger操作
    onRenderTriggered(event => {
      console.log(event)
    })
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++
      },
      double: computed(() => {
        return data.count * 2
      }),
      numbers: [0, 1, 2, 3],
      person: {}
    })
    // watch([data], () => {})
    // 不能data.count直接写 失去响应式
    watch([data, () => data.count], (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    data.numbers[0] = 5 //proxy 改变原来的弊端
    data.person.name = "viking"
    return {
      // ...data 失去响应式了
      ...toRefs(data)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  margin: 0 auto;
  width: 50px;
  height: 30px;
  line-height: 30px;
  background-color: #ccc;
}
</style>
