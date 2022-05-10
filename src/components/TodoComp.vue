<template>
  <div class="wrapper">
    <table class="tableContent">
      <col style="width: 10%" />
      <tr class="spacer">
        <th></th>
        <th><div class="name">Công Việc</div></th>
        <th><div class="cate">Loại</div></th>
        <th><div class="status">Trạng Thái</div></th>
        <th><div class="time">Thời Gian</div></th>
        <th></th>
        <th></th>
      </tr>
      <tr
        class="todoList spacer"
        v-for="(todo, index) in todoList"
        :key="index"
      >
        <td>
          <input
            type="checkbox"
            v-model="todo.isDone"
            @click="todo.isDone = !todo.isDone"
            :value="todo.title"
          />
        </td>
        <td>
          <span class="titleName">{{ todo.title }}</span>
        </td>
        <td>
          <span>{{ todo.category.name }}</span>
        </td>
        <td>
          <span class="done pd-20" v-if="todo.isDone">Hoàn Thành</span>
          <span class="notDone pd-20" v-else>Chưa Hoàn Thành</span>
        </td>
        <td>
          <span>{{ todo.dayStart }} </span>
          <span>{{ todo.dayDone }}</span>
        </td>
        <td>
          <router-link
            :value="todo.id"
            class="btn btn-warning btn-add"
            :to="{ name: 'edit-by-id', params: { id: todo.id } }"
            >Edit</router-link
          >
        </td>
        <td>
          <button @click="deleteTodo(todo.id)" class="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import { mapActions, useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.todoList);
    const cate = computed(() => store.state.cate);

    return { cate, todoList };
  },
  components: {},
  methods: {
    ...mapActions(["deleteTodo"]),
  },
};
</script>

<style scoped>
.btn-add {
  margin-left: 20px;
}

.pd-20 {
  padding: 0 20px;
}

table {
  border-collapse: separate;
  border-spacing: 0 1em;
}

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

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin: 8px 0;
}

.tableContent {
  margin: 0 auto;
}

.wrapper {
  background: white;
  width: 1120px;
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

.titleName {
  word-break: break-all;
}

.todoList {
  text-align: center;
  margin: 10px 46px;
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
