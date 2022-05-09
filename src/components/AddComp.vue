<template>
  <div class="addInput">
    <div class="head"><h3>Add Task</h3></div>
    <input
      class="addInputTerm"
      type="text"
      placeholder="Tên Task"
      v-bind="todoText"
      @change="todoTextChange"
    />
    <input
      class="addInputTerm"
      type="text"
      placeholder="Loại Task"
      v-bind="todoText"
    />
    <input
      class="addInputTerm"
      type="text"
      placeholder="Ngày Bắt Đầu"
      v-bind="todoText"
    />
    <input
      class="addInputTerm"
      type="text"
      placeholder="Ngày Kết Thúc"
      v-bind="todoText"
    />
    <button class="btn btn-success" @click="addTodo1">Thêm Task</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      todoText: {
        title: "Title",
        isDone: false,
        cate: "Front-End",
        dayStart: "06/05/2022",
        dayDone: "27/05/2022",
      },
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    addTodo1() {
      this.addTodo({
        title: this.todoText.title,
        cate: this.todoText.cate,
        dayStart: this.todoText.dayStart,
        dayDone: this.todoText.dayDone,
      });
      this.todoText = "";
      // {
      //   title: "",
      //   isDone: false,
      //   cate: "",
      //   dayStart: "",
      //   dayDone: "",
      // };
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 10px;
  width: 400px;
  height: 60px;
  border: solid 3px rgb(19, 213, 31);
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 700;
}

.addInput {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  margin-bottom: 30px;
}

.addInputTerm {
  width: 50%;
  border: 3px solid #00b4cc;
  padding: 5px;
  height: 58px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #000000;
  border-radius: 8px;
  margin: 4px 0;
}

.addInputTerm:focus {
  color: #000000;
  font-size: 24px;
  background: #f0f0f0;
}

h3 {
  font-size: 30px;
  font-weight: 500;
}

.head {
  background: rgb(236, 229, 229);
  border: solid 3px rgb(192, 191, 191);
  border-radius: 10x;
  padding: 0 100px;
  margin-bottom: 10px;
}
</style>
