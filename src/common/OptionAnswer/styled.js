import styled from "styled-components";
import {colorHare, colorSwan} from "../../constants/colors";

export const OptionAnswerContainer = styled.div `
  border: 2px solid rgb(${colorSwan});
  border-bottom-width: 4px;
  touch-action: manipulation;
  transform: translateZ(0);
  cursor: pointer;
  border-radius: 12px;
  padding: 12px 16px;
  &:hover {
    background-color: #f7f7f7;
  }
`

export const OptionAnswerLayout = styled.div `
  display: grid;
  grid-template-columns: min-content 1fr;
`

export const OrderAnswer = styled.div `
  align-items: center;
  border: 2px solid rgb(${colorSwan});
  border-radius: 8px;
  color: rgb(${colorHare});
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  display: flex;
  justify-content: center;
  width: 30px;
`

export const AnswerContent = styled.div `
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
  white-space: normal;
`

