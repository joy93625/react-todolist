import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";
import styled from "styled-components";
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
} from "./constants/style";

const TodoWrapper = styled.div`
  background: ${(props) => props.theme.colors.offWhite01};
  margin: 20px auto;
  border-radius: 5px;
  padding: 10px;
  ${MEDIA_QUERY_SM} {
    width: 300px;
  }
  ${MEDIA_QUERY_MD} {
    width: 400px;
  }
  ${MEDIA_QUERY_LG} {
    width: 500px;
  }
`;
const TodoTitle = styled.div`
  color: ${(props) => props.theme.colors.brown};
  font-size: 36px;
  text-align: center;
`;
const TodoAdd = styled.div`
  margin-top: 10px;
  display: flex;
`;
const InputAdd = styled.input`
  background: ${(props) => props.theme.colors.offWhite02};
  border: transparent;
  border-radius: 8px;
  flex: 1;
`;
const Button = styled.button`
  background: ${(props) => props.theme.colors.offWhite03};
  color: ${(props) => props.theme.colors.brown};
  border: transparent;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }
`;
const TodoList = styled.div`
  margin-top: 10px;
`;

export default function App() {
  const [todos, setTodos] = useState([{ id: 1, content: "aaa", isDone: true }]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("all");
  const id = useRef(2);
  const handleButtonClick = (e) => {
    if (value.length === 0) return;

    setTodos([
      {
        id: id.current,
        content: value,
        isDone: false,
      },
      ...todos,
    ]);
    setValue("");
    id.current++;
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        // 原本的todo和要修改的屬性
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };
  const handleClearAll = () => {
    setTodos([]);
  };
  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="App">
      <TodoWrapper>
        <TodoTitle>Todo List</TodoTitle>
        <TodoAdd>
          <InputAdd
            type="text"
            placeholder="Add item..."
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button onClick={handleButtonClick}>新增</Button>
        </TodoAdd>
        <TodoFilter
          handleFilterClick={handleFilterClick}
          handleClearAll={handleClearAll}
        ></TodoFilter>

        <TodoList>
          {todos
            // eslint-disable-next-line array-callback-return
            .filter((todo) => {
              if (filter === "all") return true;
              if (filter === "done") return todo.isDone === true;
              if (filter === "undone") return todo.isDone === false;
            })
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleDeleteTodo={handleDeleteTodo}
                handleToggleIsDone={handleToggleIsDone}
              />
            ))}
        </TodoList>
      </TodoWrapper>
    </div>
  );
}
