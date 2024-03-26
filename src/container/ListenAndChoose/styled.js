import styled from "styled-components";
import {colorMacaw} from "../../constants/colors";

export const AssigmentContainer = styled.div `
  display: grid;
  transform: translateZ(0);
  grid-gap: 24px;
  grid-template-rows: min-content minmax(0, 1fr);
  overflow-x: hidden;
  overflow-y: auto;
  @media (min-width: 768px) {
    min-height: 450px;
    overflow: visible;
    width: 600px;
  }
`

export const AssignmentPrompt = styled.div `
  font-size: 25px;
  line-height: 1.25;
  margin: 0;
  text-align: left;
  width: 100%;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`

export const AssigmentContentLayout = styled.div `
  display: grid;
  text-align: center;
  grid-template-rows: min-content 1fr;
  gap: 16px;
  @media (min-width: 768px) {
    align-self: center;
    align-items: center;
  }
`

export const SpeakerBtnLayout = styled.div `
  margin: 0 auto;
`

export const SpeakerIconBg = styled.button `
  background-color: rgb(${colorMacaw});
  border-color: transparent;
  border-width: 0 0 4px;
  border-bottom-color: #1799d6;
  border-radius: 25%;
  height: 140px;
  width: 140px;
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
  &:hover {
    background-color: #1dbefd;
  }
  &.mouseDown {
    border-bottom-width: 0;
    height: 136px;
    margin-top: 4px;
    @media (max-width: 767px) {
      height: 96px;
    }
  }
`

export const SpeakerIconWrapper = styled.span `
  height: 50%;
  display: inline-block;
`

export const SpeakerIcon = styled.img `
  width: 100%;
  height: 100%;
`

export const AnswerLayout = styled.div `
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 768px) {
    align-self: center;
  }
`
