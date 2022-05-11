<template>
  <div class="head"><h3>Add Task</h3></div>
  <div class="addInput">
    <form @submit.prevent="addTodo1(todoText)">
      <label>Tên Task</label>
      <input
        class="addInputTerm"
        type="text"
        placeholder="Tên Task"
        v-model="todoText.title"
      />
      <!-- <input
      class="addInputTerm"
      type="text"
      placeholder="Loại Task"
      v-model="todoText.cate"
    /> -->
      <label>Loại Task</label>
      <select class="addInputTerm" v-model="selectedCate">
        <!-- <option selected value="1">Front-End</option>
      <option value="2">Back-End</option> -->
        <option
          v-for="(category, index) in cate"
          :key="index"
          :value="{ name: category.name, value: category.value }"
        >
          {{ category.name }}
        </option>
      </select>
      <label>Ngày Bắt Đầu</label>
      <input
        class="addInputTerm"
        type="text"
        placeholder="Ngày Bắt Đầu"
        v-model="todoText.dayStart"
      />
      <label>Ngày Kết Thúc</label>
      <input
        class="addInputTerm"
        type="text"
        placeholder="Ngày Kết Thúc"
        v-model="todoText.dayDone"
      />
      <button class="btn btn-success" type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  data() {
    return {
      todoText: {
        id: length + 1,
        title: "Title",
        isDone: false,
        category: {
          name: "Front-End",
          value: 1,
        },
        dayStart: this.currentDateTime(),
        dayDone: "27/05/2022",
      },
      selectedCate: {
        name: "Front-End",
        value: 1,
      },
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    addTodo1() {
      this.addTodo({
        id: this.todoList.length + 1,
        title: this.todoText.title,
        category: {
          name: this.selectedCate.name,
          value: this.selectedCate.value,
        },
        dayStart: this.todoText.dayStart,
        dayDone: this.todoText.dayDone,
      });
      this.todoText = {
        id: "",
        title: "Title",
        isDone: false,
        category: {
          name: "Front-End",
          value: 1,
        },
        dayStart: this.currentDateTime(),
        dayDone: "27/05/2022",
      };
      alert("Thành Công");
    },
    currentDateTime() {
      const current = new Date();
      const date =
        current.getDate() +
        "/" +
        (current.getMonth() + 1) +
        "/" +
        current.getFullYear();
      const dateTime = date;

      return dateTime;
    },
  },
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.todoList);
    const cate = computed(() => store.state.cate);
    return { cate, todoList };
  },
};
</script>

<style scoped>
label {
  font-size: 30px;
  display: block;
}

button {
  margin-top: 10px;
  width: 400px;
  height: 60px;
  border: solid 2px rgb(19, 213, 31);
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 700;
}

.addInput {
  background: rgb(255, 255, 255);
  border: solid 2px rgb(192, 191, 191);
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  margin-bottom: 30px;
  padding: 38px 0;
  border-radius: 8px;
}

.addInputTerm {
  width: 100%;
  border: 2px solid #000000;
  opacity: 0.6;
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
  background: #e9e9e9;
}

h3 {
  font-size: 30px;
  font-weight: 500;
}

.head {
  padding: 0 100px;
  margin-bottom: 10px;
}
</style>
