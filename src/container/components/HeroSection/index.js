
import video  from '../../images/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtn,
    ArrowForward,
    ArrowRight
} from './styleElement';
import { Button } from '../globalstyle/buttonElement.js';
import { useState } from 'react';




const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay muted loop src={ video } type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Virtual Bank</HeroH1>
                <HeroP>Create an Account Today and recieve a 250$ in credit towards your next payment .</HeroP>
            </HeroContent>
            <HeroBtn>
                <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover} dark primary fontBig>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtn>
        </HeroContainer>
        )
}

export default HeroSection;