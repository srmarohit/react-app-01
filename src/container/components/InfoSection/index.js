
import { ImageWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, Heading, Subtitle, ButtonWrap, Column2, TopLine, Img } from "./infoStyled";
import { Button } from "../globalstyle/buttonElement";
import Icon1 from '../../images/svg-1.svg';


const InfoSection = ({ lightBg, imgStart, topLine, heading, subtitle, lightText, darkText, buttonLabel, img, alt, id, primary, dark, dark2 }) => {

    return (
        <>
            <InfoContainer LightBg={lightBg} id={ id }> 
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading LightText={lightText}>{heading}</Heading>
                                <Subtitle DarkText={darkText}>{subtitle}</Subtitle>
                                <ButtonWrap>
                                    <Button to="Home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={ dark2 ? 1 : 0}
                                    >{buttonLabel}</Button> 
                                </ButtonWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrap>
                                <Img src={img} alt={ alt } />
                            </ImageWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
        )
}

export default InfoSection;