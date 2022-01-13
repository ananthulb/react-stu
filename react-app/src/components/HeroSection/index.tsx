import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import video from '../../video/video.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    console.log('HeroSection video', video);
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive $250 in credut towards your next payment</HeroP>
                <HeroBtnWrapper>
                    <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" >Get started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
