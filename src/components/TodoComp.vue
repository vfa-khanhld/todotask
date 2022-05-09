<template>
  <div class="wrapper">
    <div class="todoListName">
      <div class="name">Công Việc</div>
      <div class="status">Trạng Thái</div>
      <div class="time">Thời Gian</div>
    </div>
    <div class="todoList" v-for="(todo, index) in todoList" :key="index">
      <input
        type="checkbox"
        v-model="todo.isDone"
        @click="todo.isDone = !todo.isDone"
        :value="todo.title"
      />
      <span>{{ todo.title }}</span>
      <span class="done" v-if="todo.isDone">Hoàn Thành</span>
      <span class="notDone" v-else>Chưa Hoàn Thành</span>
      <span>{{ todo.dayStart }} - {{ todo.dayDone }}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.todoList);

    return { todoList };
  },
  components: {},
};
</script>

<style scoped>
button {
  margin: 0 5px;
  margin-left: 14px;
  width: 80px;
}

span {
  margin-left: 20px;
  font-size: 22px;
  margin-top: 15px;
}

.name {
  flex: 2;
  margin-left: 20px;
}
.status {
  flex: 3;
  margin-left: 15px;
}
.time {
  flex: 6;
  text-align: left;
  margin-left: 130px;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  border-radius: 6px;
  margin-top: 22px;
}

.wrapper {
  background: white;
  width: 1000px;
  margin: 20px auto;
  padding: 30px 30px;
  border: solid 3px rgb(192, 191, 191);
  border-radius: 10px;
}

.todoListName {
  display: flex;
  font-size: 20px;
  margin: 14px 0;
  font-weight: 700;
}

.todoList {
  text-align: center;
  display: flex;
  margin: 0 46px;
}

.done {
  border: solid 3px rgb(141, 224, 16);
  padding: 5px 5px;
  border-radius: 8px;
  margin-top: 6px;
  width: 240px;
  margin-right: 10px;
}

.notDone {
  border: solid 3px rgb(224, 16, 16);
  padding: 5px 5px;
  border-radius: 8px;
  margin-top: 6px;
  width: 240px;
  margin-right: 10px;
}
</style>
