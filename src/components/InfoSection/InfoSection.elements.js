import styled from "styled-components";


export const InfoSec = styled.div`
    color:#fff;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
`;


export const InfoRow = styled.div`
    display:flex;
    margin:0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};

`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-left:15px;
    padding-right:15px;
    flex: 1;
    max-width: 50%;
    flex-basic: 50%;

    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        max-width: 100%;
        flex-basic: 100%;
    }
`;

export const TextWrapper = styled.div`
    padding-top:0;
    padding-right:60px;
    max-width: 540px;

    @media screen and (max-width: 768px){
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
    font-size:18px;
    line-height:16px;
    letter-spacing:1.4px;
    margin-bottom:16px;
`;

export const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
    font-size:48px;
    line-height:1.1;
    margin-bottom:24px;
`;

export const Subtitle = styled.p`
    color: ${({lightTextdesc}) => (lightTextdesc ? '#f7f8fa' : '#1c2237')};
    font-size:18px;
    line-height:24px;
    margin-bottom:35px;
    max-width: 440px;
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display:flex;
    justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
    padding-right:0;
    border:0;
    max-width:100%;
    vertical-align: middle;
    display:inline-block;
    max-height:500px;
`;


