import styled from "styled-components";
import {colorOwl, colorSwan} from "../../constants/colors";
import {processBarHeight} from "../../constants/heights";


export const HeaderContainer = styled.div `
  @media (min-width: 700px) and (max-height: 650px) {
    padding-top: 40px;
  }

  @media (min-width: 700px) {
    padding: 50px 40px 0;
  }
`

export const HeaderLayout = styled.div `
  display: grid;
  align-items: center;
  grid-template-columns: min-content 1fr;
  grid-gap: 24px;
`

export const HeaderCancelBtn = styled.button `
  background: none;
  border: none;
  padding: 0;
  transition: filter .2s;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  cursor: pointer;
  display: inline-flex;
  outline: none;
  position: relative;
  touch-action: manipulation;
  transform: translateZ(0);
`

export const XMarkIcon = styled.img `
  height: 18px;
  width: 18px;
`

export const HeaderProcessBarContainer = styled.div `
  background-color: rgb(${colorSwan});
  border-radius: calc(${processBarHeight} / 2);
  height: ${processBarHeight};
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
`

export const HeaderProcessBar = styled.div `
  width: ${props => props.percentage}%;
  background-color: rgb(${colorOwl});
  height: ${processBarHeight};
  transition: width 0.5s ease-in-out;
  border-radius: calc(${processBarHeight} / 2 - 1px);
`

export const AssignmentContainer = styled.div `
  display: grid;
`

