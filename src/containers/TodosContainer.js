//Container Component (컨테이너 컴포넌트)
//Redux와 연결되어 데이터를 가져오거나(dispatch, state 접근) 처리하는 컴포넌트

//store에 저장된 데이터를 “읽는 건 useSelector”
//store에 저장된 데이터를 “바꾸는 건 useDispatch”
import React from "react";
import Todos from "../components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
    const todos = useSelector(state => state.todos);
    const dispatch  = useDispatch();

    const onCreate = (text) => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));

    return (
        <Todos
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
        />
    )
}

export default TodosContainer;