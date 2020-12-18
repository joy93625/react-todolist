import React from "react";
import styled from "styled-components";

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

const FilterList = styled.div`
  display: flex;
  margin-top: 24px;
`;
const DeleteButton = styled(Button)`
  background: ${(props) => props.theme.colors.brown};
  color: ${(props) => props.theme.colors.offWhite02};
  border-radius: 5px;
`;
export default function TodoFilter({ handleFilterClick, handleClearAll }) {
  return (
    <FilterList>
      <Button
        onClick={() => {
          handleFilterClick("all");
        }}
      >
        全部
      </Button>
      <Button
        onClick={() => {
          handleFilterClick("done");
        }}
      >
        已完成
      </Button>
      <Button
        onClick={() => {
          handleFilterClick("undone");
        }}
      >
        未完成
      </Button>
      <DeleteButton onClick={handleClearAll}>清空</DeleteButton>
    </FilterList>
  );
}
