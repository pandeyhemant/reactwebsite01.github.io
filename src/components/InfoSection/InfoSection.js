import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtitle,ImgWrapper,Img } from './InfoSection.elements';




const InfoSection = ({ primary, lightBg, imgStart, lightTopLine, lightText, lightTextdesc, topLine, headline, description, buttonLabel, img, alt, start}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart} >
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextdesc={lightTextdesc}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                   <Button big fontBig primary={primary}>
                                       {buttonLabel}
                                   </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                               <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection;
