/* eslint-disable prettier/prettier */
import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            todoList: [{
                    id: 1,
                    title: "Todo 1",
                    isDone: false,
                    category: {
                        name: "Front-End",
                        value: 1,
                    },
                    dayStart: "06/05/2022",
                    dayDone: "27/05/2022",
                },
                {
                    id: 2,
                    title: "Todo 2",
                    isDone: false,
                    category: {
                        name: "Back-End",
                        value: 2,
                    },
                    dayStart: "06/05/2022",
                    dayDone: "27/05/2022",
                },
                {
                    id: 3,
                    title: "Todo 3",
                    isDone: false,
                    category: {
                        name: "Back-End",
                        value: 2,
                    },
                    dayStart: "06/05/2022",
                    dayDone: "27/05/2022",
                },
                {
                    id: 4,
                    title: "Todo 4",
                    isDone: false,
                    category: {
                        name: "Front-End",
                        value: 1,
                    },
                    dayStart: "06/05/2022",
                    dayDone: "27/05/2022",
                },
            ],
            cate: [{
                    name: "Front-End",
                    value: 1,
                },
                {
                    name: "Back-End",
                    value: 2,
                },
            ],
        };
    },
    getters: {
        allTodos: (state) => state.todoList,
    },
    actions: {
        addTodo({ commit }, todo) {
            commit("add", todo);
        },
        deleteTodo({ commit }, todo) {
            commit("deleteTodo", todo)
        }
    },
    mutations: {
        add(state, todo) {
            state.todoList.push(todo);
            console.log(todo);
        },
        deleteTodo(state, id) {
            state.todoList = state.todoList.filter((todo) => todo.id != id);
        }
    },
    modules: {},
});