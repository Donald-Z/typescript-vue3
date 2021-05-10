<template>
  <div class="container">
    <GlobalHeader :user="curretUser"></GlobalHeader>
    <columnList :list="list"></columnList>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import "bootstrap/dist/css/bootstrap.min.css"
import columnList, { ColumnProps } from "./components/ColumnList.vue"
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue"
const curretUser: UserProps = {
  isLogin: true,
  name: "Danland"
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是test1专栏，有一段非常有意思的简介"
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是test2专栏，有一段非常有意思的简介",
    avator:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F9fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D0b696fecdd1373f0f56a679b913f67cd%2Fd009b3de9c82d1581695ae268c0a19d8bc3e4216.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623043467&t=766705f39ede954534cfd537108d48a4"
  }
]
export default defineComponent({
  name: "App",
  components: {
    columnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      curretUser
    }
  }
})
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
