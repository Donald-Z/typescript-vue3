<template>
  <div>
    <div class="row">
      <div v-for="colum in list" :key="colum.id" class="col-4">
        <div class="card">
          <img :src="colum.avator" class="card-img-top" :alt="colum.title">
          <div class="card-body">
            <h5 class="card-title">{{colum.title}}</h5>
            <p class="card-text">{{colum.description}}</p>
            <a href="#" class="btn btn-primary">进入专栏</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//# sourceURL=dynamicScript.js
import { computed, defineComponent, PropType } from "vue"
export interface ColumnProps {
  id: number
  title: string
  avator?: string
  description: string
}
export default defineComponent({
  name: "columnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>, //构造函数不是类型 需要PropType
      required: true
    }
  },
  setup(props) {
    console.log(props)
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avator) {
          console.log(123)
          column.avator = require("@/assets/avatar.jpg")
        }
        return column
      })
    })
    console.log(columnList.value[0].avator)
    return {
      columnList
    }
  }
})
</script>

<style scoped>
</style>