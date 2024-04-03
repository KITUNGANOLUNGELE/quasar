<template>
  <actionForm />
  <div v-for="item in s.task" :key="item.id">
    {{ item.name }}
  </div>
</template>

<script>
import { ref } from "vue";
import { useTask } from "../stores/taskUsage";
import actionForm from "../pages/actionForm.vue";
export default {
  beforeCreate() {
    const s = useTask();
    s.get_task;
  },
  components: { actionForm },
  setup() {
    const test = ref("");
    const s = useTask();
    return { test, s };
  },
};
</script>

<style lang="css" scoped></style>
