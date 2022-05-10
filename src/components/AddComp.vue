<template>
  <div class="addInput">
    <div class="head"><h3>Add Task</h3></div>
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
    {{ selectedCate }}
    <input
      class="addInputTerm"
      type="text"
      placeholder="Ngày Bắt Đầu"
      v-model="todoText.dayStart"
    />
    <input
      class="addInputTerm"
      type="text"
      placeholder="Ngày Kết Thúc"
      v-model="todoText.dayDone"
    />
    <button class="btn btn-success" @click="addTodo1(todoText)">
      Add Task
    </button>
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
        dayStart: "06/05/2022",
        dayDone: "27/05/2022",
      },
      selectedCate: Object(),
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    addTodo1() {
      this.addTodo({
        id: length + 1,
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
        dayStart: "06/05/2022",
        dayDone: "27/05/2022",
      };
    },
  },
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.todoList);
    const cate = computed(() => store.state.cate);
    const length = computed(() => store.state.todoList.length());
    console.log(todoList);
    return { cate, todoList, length };
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
