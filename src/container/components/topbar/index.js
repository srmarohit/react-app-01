
import {
    TopBarContainer,
    Icon,
    CloseIcon,

    TopBarWrapper,
    TopBarMenu,
    TopBarLink,
    TopBarBtn,
    TopBarBtnLink
} from './styleElement.js';

const TopBar = ({ isOpen, toggle}) => {
    return (
        <TopBarContainer isOpen={ isOpen }>
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>

            <TopBarWrapper>
                <TopBarMenu>
                    <TopBarLink to="about">About</TopBarLink>
                    <TopBarLink to="services">Services</TopBarLink>
                    <TopBarLink to="discovery">Discovery</TopBarLink>
                    <TopBarLink to="contact">ContactUs</TopBarLink>
                    <TopBarLink to="/signup">SignUp</TopBarLink>
                </TopBarMenu>
                <TopBarBtn>
                    <TopBarBtnLink to="/signin">SignIn</TopBarBtnLink>
                </TopBarBtn>
            </TopBarWrapper>
        </TopBarContainer>
        )
}

export default TopBar;