<template>
  <q-page class="float" padding>
    <q-btn color="primary" icon="list" flat @click="filtre = 'all'" />
    <q-btn color="negative" icon="list" flat @click="filtre = 'uncomplete'" />
    <q-btn color="positive" icon="list" flat @click="filtre = 'complete'" />
    <q-btn color="primary" icon="edit" flat @click="filtre = 'form'" />
    <div v-if="filtre == 'all'">
      <div v-for="item in s.get_task" :key="item.id">
        {{ item.nom }}
      </div>
    </div>

    <div v-if="filtre == 'complete'">
      <div v-for="item in s.get_completed_task" :key="item.id">
        {{ item.nom }}
      </div>
    </div>

    <div v-if="filtre == 'uncomplete'">
      <div v-for="item in s.get_uncompleted_task" :key="item.id">
        {{ item.nom }}
      </div>
    </div>
    <div class="input" v-if="filtre == 'form'">
      <q-input v-model="tskname" type="text" label="Task name" />
      <div class="confirm_btn">
        <q-btn flat color="primary" icon="check" @click="enregistrer_tache" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onUpdated } from "vue";
// import { useTaskStore } from "stores/taskstore";
import { useTask } from "stores/taskUsage";

export default defineComponent({
  name: "IndexPage",
  setup() {
    // const store = useTaskStore();
    const s = ref(useTask());
    const tskname = ref("");
    const filtre = ref("all");
    const dernier_tache = s.value.task[s.value.task.length - 1];
    console.log(dernier_tache);
    const enregistrer_tache = () => {
      const obj_t = { id: dernier_tache.id++, name: tskname.value, do: false };
      s.value.addTask(obj_t);
      tskname.value = "";
      console.log(s.value.task);
    };
    return { filtre, s, tskname, enregistrer_tache };
  },
  onUpdated() {
    console.log("update");
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
