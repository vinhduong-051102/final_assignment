import {
  BodyContainer,
  MenuContainer,
  SidebarContainer,
  LogoContainer,
  LogoPC,
  LogoMobile,
  ListMenuItemLayout,
  MenuItemLayout,
  MenuItemIcon,
  MenuItemText,
} from "./styled";
import {logoIcon, logoTextIcon, homeIcon, vowIcon, addIcon} from "../../constants/icons";
import { Link } from "react-router-dom";

const Menu = ({ children }) => {
  return (
    <MenuContainer>
      <SidebarContainer>
        <LogoContainer>
          <Link to="/">
            <LogoPC src={logoTextIcon} />
            <LogoMobile src={logoIcon} />
          </Link>
        </LogoContainer>
        <ListMenuItemLayout>
          <MenuItemLayout to="/learn">
            <MenuItemIcon src={homeIcon}/>
            <MenuItemText>học</MenuItemText>
          </MenuItemLayout>
          <MenuItemLayout to="/characters">
            <MenuItemIcon src={vowIcon}/>
            <MenuItemText>phát âm</MenuItemText>
          </MenuItemLayout>
          <MenuItemLayout to="/add">
            <MenuItemIcon src={addIcon}/>
            <MenuItemText>Thêm mới</MenuItemText>
          </MenuItemLayout>

        </ListMenuItemLayout>
      </SidebarContainer>
      <BodyContainer>{children}</BodyContainer>
    </MenuContainer>
  );
};

export default Menu;
