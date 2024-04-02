import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    Task: [
      {
        id: 1,
        name: "wah body",
        do: false,
      },
      {
        id: 2,
        name: "wah body",
        do: true,
      },
    ],
  }),
  getters: {
    gettask() {
      return this.Task;
    },
    getComplete() {
      return this.Task.filter((t) => t.do);
    },
    getUncomple() {
      return this.Task.filter((t) => t.do == false);
    },
  },
});
