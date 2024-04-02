import { defineStore } from "pinia";
export const useTask = defineStore("tasks", {
  state: () => ({
    task: [
      {
        id: 0,
        nom: "Living room",
        do: false,
      },
      {
        id: 0,
        nom: "Rwite some codes",
        do: true,
      },
    ],
    name: "notre task",
  }),
  getters: {
    get_task() {
      return this.task;
    },
    get_completed_task() {
      return this.task.filter((t) => t.do == true);
    },
    get_uncompleted_task() {
      return this.task.filter((t) => t.do == false);
    },
  },
  actions: {},
});
