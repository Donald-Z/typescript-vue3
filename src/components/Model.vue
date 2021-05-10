<template>
  <teleport to="#modal">
    <div class="model" v-if="isOpen">
      <slot>我是title</slot>
      <button @click="buttonClick">close</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    isOpen: Boolean
  },
  emits: {
    "close-model": null
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit("close-model")
    }
    return {
      buttonClick
    }
  }
})
</script>

<style scoped>
.model {
  width: 300px;
  height: 200px;
  background-color: #ccc;
  margin: 0 auto;
}
</style>