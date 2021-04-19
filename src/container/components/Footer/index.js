import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,

    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,

    SocialIconLink
} from "./footerStyle";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to="/signin">SignIn</FooterLink>
                                <FooterLink to="/">How it Works</FooterLink>
                                <FooterLink to="/signup">SignUp</FooterLink>
                                <FooterLink to="/signin">Privacy Policy</FooterLink>
                                <FooterLink to="services">Terms&Conditions</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to="/signin">SignIn</FooterLink>
                            <FooterLink to="/">How it Works</FooterLink>
                            <FooterLink to="/signup">SignUp</FooterLink>
                            <FooterLink to="/signin">Privacy Policy</FooterLink>
                            <FooterLink to="services">Terms&Conditions</FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to="/signin">SignIn</FooterLink>
                            <FooterLink to="/">How it Works</FooterLink>
                            <FooterLink to="/signup">SignUp</FooterLink>
                            <FooterLink to="/signin">Privacy Policy</FooterLink>
                            <FooterLink to="services">Terms&Conditions</FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to="/signin">SignIn</FooterLink>
                            <FooterLink to="/">How it Works</FooterLink>
                            <FooterLink to="/signup">SignUp</FooterLink>
                            <FooterLink to="/signin">Privacy Policy</FooterLink>
                            <FooterLink to="services">Terms&Conditions</FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            Dolla
                        </SocialLogo>
                        <WebsiteRights>Dolla {new Date().getFullYear()}
                            All rights reserved .
                        </WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"  aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        )
}

export default Footer;