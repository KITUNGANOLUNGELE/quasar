<template>
  <q-item clikable exact tag="router-link" :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ titre }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyLink",
  props: {
    titre: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "#",
    },
  },
});
</script>
