import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, ImgWrap, Img, BtnWrap } from './InfoElements'
import { Button } from '../ButtonElement';

const InfoSection: any = (props: any) => {
    return (
        <>
            <InfoContainer lightBg={props.lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {props.topLine}
                                </TopLine>
                                <Heading lightText={props.lightText}>{props.headline}</Heading>
                                <SubTitle darkText={props.darkText}>{props.description}</SubTitle>
                                <BtnWrap>
                                    <Button to="home">{props.buttonLabel}</Button>
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
