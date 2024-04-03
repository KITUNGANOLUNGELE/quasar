<template>
  <q-page class="float" padding>
    <actionForm />
    <q-btn color="primary" icon="list" flat @click="filtre = 'all'" />
    <q-btn color="negative" icon="list" flat @click="filtre = 'uncomplete'" />
    <q-btn color="positive" icon="list" flat @click="filtre = 'complete'" />
    <q-btn color="primary" icon="edit" flat @click="filtre = 'form'" />
    <div v-if="filtre == 'all'">
      <div v-for="item in s.task" :key="item.id">
        {{ item.name }}
      </div>
    </div>

    <div v-if="filtre == 'complete'">
      <div v-for="item in get_task_my" :key="item.id">
        {{ item.nom }}
      </div>
    </div>

    <div v-if="filtre == 'uncomplete'">
      <div v-for="item in s.get_uncompleted_task" :key="item.id">
        {{ item.nom }}
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onUpdated, toRaw } from "vue";
// import { useTaskStore } from "stores/taskstore";
import { useTask } from "stores/taskUsage";
import actionForm from "pages/actionForm.vue";

export default defineComponent({
  name: "IndexPage",
  components: { actionForm },
  beforeMount() {
    console.log("before mount");
    const s = useTask();
    s.get_task;
  },
  beforeUpdate() {
    console.log("before mount");
    const s = useTask();
    s.get_task;
  },
  setup() {
    const filtre = ref("all");
    const s = useTask();
    return { filtre, s };
  },
  computed: {
    get_task_my() {
      const s = useTask();
      return s.task;
    },
  },
});
</script>
<style lang="css" scoped>
.red {
  background-color: red;
  color: white;
}
.input {
  width: 40%;
  margin: auto;
}
.confirm_btn {
  margin: auto;
}
.q-btn {
  margin: auto;
}
</style>
