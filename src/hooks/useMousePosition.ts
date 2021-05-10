import { ref, toRefs, reactive, onMounted, onUnmounted } from 'vue';
function useMousePosition() {
  // const x = ref(0);
  // const y = ref(0);
  const postion = reactive({
    x: 0,
    y: 0,
  });
  const updateMouse = (e: MouseEvent) => {
    postion.x = e.pageX;
    postion.y = e.pageY;
  };
  onMounted(() => {
    document.addEventListener('mousemove', updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener('mousemove', updateMouse);
  });
  return { ...toRefs(postion) };
}

export default useMousePosition;
