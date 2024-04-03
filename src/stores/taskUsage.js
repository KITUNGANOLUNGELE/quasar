import { defineStore } from "pinia";
import axios from "axios";
import { data } from "autoprefixer";
export const useTask = defineStore("tasks", {
  state: () => ({
    task: [],
    name: "notre task",
  }),
  getters: {
    get_task() {
      axios
        .get("http://localhost/task/Taches/")
        .then((r) => {
          this.task = r.data.response;
          console.log(r.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  actions: {
    addTask(t) {
      let f = new FormData();
      f.append("name", t.name);
      f.append("do", t.do);
      axios
        .post("http://localhost/task/Taches/save/", f)
        .then((m) => {
          console.log(m);
        })
        .catch((err) => {
          console.log(err);
        });
      this.task.push(t);
    },
  },
});
