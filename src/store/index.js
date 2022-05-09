/* eslint-disable prettier/prettier */
import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            todoList: [{
                    title: "Todo 1",
                    isDone: false,
                    cate: "Front-End",
                    dayStart: "06/05/2022",
                    dayDone: "27/05/2022",
                },
                {
                    title: "Todo 2",
                    isDone: false,
                    cate: "Back-End",
                    dayStart: "06/05/2022",
                    dayDone: "27/05/2022",
                },
                {
                    title: "Todo 3",
                    isDone: false,
                    cate: "Back-End",
                    dayStart: "06/05/2022",
                    dayDone: "27/05/2022",
                },
                {
                    title: "Todo 4",
                    isDone: false,
                    cate: "Front-End",
                    dayStart: "06/05/2022",
                    dayDone: "27/05/2022",
                },
            ],
            todoListFiltered: [],
        };
    },
    getters: {
        allTodos: (state) => state.todoList,
    },
    actions: {
        addTodo({ commit }, todo) {
            commit("add", todo);
        },
    },
    mutations: {
        add(state, todo) {
            state.todoList.push(todo);
            console.log(todo)
        },
    },
    modules: {},
});