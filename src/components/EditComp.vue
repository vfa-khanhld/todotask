<template>
  <div class="addInput">
    <input class="addInputTerm" type="text" placeholder="" />
    <select class="addInputTerm" v-model="selectedCate">
      <option
        v-for="(category, index) in cate"
        :key="index"
        :value="{ name: category.name, value: category.value }"
      >
        {{ category.name }}
      </option>
    </select>
    <input class="addInputTerm" type="text" />
    <input class="addInputTerm" type="text" />
    <button class="btn btn-success">Update</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  data() {
    return {
      selectedCate: {},
    };
  },
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.todoList);
    const cate = computed(() => store.state.cate);

    return { cate, todoList };
  },
  getters: {
    getById: (state) =>
      state.todoList.filter((todo) => (todo.id = state.todoList.id)),
  },
};
</script>

<style scoped>
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
button {
  margin-top: 10px;
  width: 400px;
  height: 60px;
  border: solid 3px rgb(19, 213, 31);
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
