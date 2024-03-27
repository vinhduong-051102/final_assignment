import styled from "styled-components";
import {colorBlueJay, colorHare, colorIguana, colorSnow, colorSwan} from "../../constants/colors";

export const OptionAnswerContainer = styled.button `
  border: 2px solid rgb(${colorSwan});
  border-bottom-width: 4px;
  transform: translateZ(0);
  cursor: pointer;
  border-radius: 12px;
  padding: 12px 16px;
  background-color: rgb(${colorSnow});
  &:hover {
    background-color: #f7f7f7;
  }
  &.mouseDown {
    margin-top: 2px;
    border-bottom-width: 2px;
    height: calc(100% - 2px);
  }
  &.selected {
    background-color: rgb(${colorIguana});
    color: rgb(${colorBlueJay});
    border-color: rgb(132 216 255);
  }
`

export const OptionAnswerLayout = styled.div `
  display: grid;
  grid-template-columns: min-content 1fr;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
  }
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
  @media (max-width: 767px) {
    display: none;
  }
  &.selected {
    color: rgb(${colorBlueJay});
    border-color: rgb(132 216 255);
  }
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

