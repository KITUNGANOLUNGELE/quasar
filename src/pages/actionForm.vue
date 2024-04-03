<template>
  <div>
    <q-input v-model="taskname" type="text" label="Task name" />
    <div class="confirm_btn">
      <q-btn flat color="primary" icon="check" @click="add_mysk" />
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { useTask } from "../stores/taskUsage";
export default defineComponent({
  name: "actionForm",
  setup() {
    const taskname = ref("");
    const s = useTask();
    const add_mysk = () => {
      s.addTask({
        name: taskname.value,
        do: false,
      });
    };

    return { taskname, add_mysk };
  },
});
</script>

<style lang="scss" scoped></style>
