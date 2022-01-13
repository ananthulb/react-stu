import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, ImgWrap, Img, BtnWrap } from './InfoElements'
import { Button } from '../ButtonElement';

const InfoSection = () => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    TopLine
                                </TopLine>
                                <Heading>Heading</Heading>
                                <SubTitle>Subtitle</SubTitle>
                                <BtnWrap>
                                    <Button to="home">Button</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
