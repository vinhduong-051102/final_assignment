import styled from "styled-components";

export const MenuContainer = styled.div `
  display: flex;
`
export const SidebarContainer = styled.div `
  order: 1;
  @media (max-width: 425px) {
    order: 2;
  }
`

export const BodyContainer = styled.div `
  order: 2;
  @media (min-width: 426px) {
    order: 1;
  }
`
