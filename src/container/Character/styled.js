import styled from 'styled-components';
import {
  colorEel,
  colorHare,
  colorSwan,
  colorWolf,
} from '../../constants/colors';

export const CharacterContainer = styled.div``;

export const CharacterLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  line-height: 1.6;
  margin: 0 20px;
  padding: 19px 0;
  width: 100%;
`;

export const TitleLayout = styled.div`
  align-items: center;
  display: grid;
`;

export const TitleContentContainer = styled.div`
  @media (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const MainTitle = styled.div`
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 10px;
  text-align: center;
  font-size: 25px;
  color: rgb(${colorEel});
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.div`
  color: rgb(${colorWolf});
  font-size: 19px;
  line-height: 1.4;
  text-align: center;
`;

export const ListVowelContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 500px;
  }
  width: 100%;
`;

export const ListVowelLayout = styled.div`
  align-items: center;
  row-gap: 20px;
  display: grid;
`;

export const ListVowelTitle = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  padding-top: 20px;
  text-align: center;
  overflow: hidden;
  &:before,
  &:after {
    background: rgb(${colorSwan});
    content: '';
    display: inline-block;
    height: 2px;
    position: relative;
    vertical-align: middle;
    width: 180px;
  }
  &:before {
    margin-left: -50%;
    right: 8px;
  }
  &:after {
    left: 8px;
    margin-right: -50%;
  }
`;

export const ListVowelBtnLayout = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);
`;

export const BtnContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: none;
  width: 100%;
`;

export const Symbol = styled.div`
  color: rgb(${colorEel});
  font-size: 19px;
  font-weight: 500;
  text-align: center;
`;

export const Word = styled.div`
  color: rgb(${colorHare});
  font-weight: 500;
  margin-bottom: 5px;
  text-align: center;
`;
