import React from "react";
import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 10px;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.offWhite02};
  &:hover {
    color: ${(props) => props.theme.colors.brown};
  }
  & button {
    opacity: 0;
  }
  &:hover button {
    opacity: 1;
  }
`;
const TodoContent = styled.div`
  ${(props) =>
    props.$isDone &&
    `
      text-decoration: line-through;
      opacity: 0.5;
    `}
`;
const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;
const Button = styled.button`
  background: ${(props) => props.theme.colors.offWhite03};
  color: ${(props) => props.theme.colors.brown};
  border: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
  & + & {
    margin-left: 10px;
  }
`;
const DeleteButton = styled(Button)`
  background: ${(props) => props.theme.colors.brown};
  color: ${(props) => props.theme.colors.offWhite02};
  border-radius: 5px;
`;
export default function TodoItem({
  todo,
  handleDeleteTodo,
  handleToggleIsDone,
}) {
  const handleToggeClick = () => {
    handleToggleIsDone(todo.id);
  };
  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id);
  };
  return (
    <TodoWrapper data-todo-id={todo.id}>
      <TodoContent $isDone={todo.isDone}>{todo.content}</TodoContent>
      <ButtonWrapper>
        <Button onClick={handleToggeClick}>
          {todo.isDone ? "已完成" : "未完成"}
        </Button>
        <DeleteButton onClick={handleDeleteClick}>刪除</DeleteButton>
      </ButtonWrapper>
    </TodoWrapper>
  );
}
