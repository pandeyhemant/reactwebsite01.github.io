import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    WebsiteRights,
    SocialIconLink,
    SocialIcon
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trands
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig> Subscribe </Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle> About us </FooterLinksTitle>
                        <FooterLink to='/sign-up'> How it work </FooterLink>
                        <FooterLink to='/'> Testimonials </FooterLink>
                        <FooterLink to='/'> Careers </FooterLink>
                        <FooterLink to='/'> Investors </FooterLink>
                        <FooterLink to='/'> Terms of Services </FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle> Contact us </FooterLinksTitle>
                        <FooterLink to='/sign-up'> How it work </FooterLink>
                        <FooterLink to='/'> Testimonials </FooterLink>
                        <FooterLink to='/'> Careers </FooterLink>
                        <FooterLink to='/'> Investors </FooterLink>
                        <FooterLink to='/'> Terms of Services </FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle> Videos </FooterLinksTitle>
                        <FooterLink to='/sign-up'> How it work </FooterLink>
                        <FooterLink to='/'> Testimonials </FooterLink>
                        <FooterLink to='/'> Careers </FooterLink>
                        <FooterLink to='/'> Investors </FooterLink>
                        <FooterLink to='/'> Terms of Services </FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle> Social Media </FooterLinksTitle>
                        <FooterLink to='/sign-up'> How it work </FooterLink>
                        <FooterLink to='/'> Testimonials </FooterLink>
                        <FooterLink to='/'> Careers </FooterLink>
                        <FooterLink to='/'> Investors </FooterLink>
                        <FooterLink to='/'> Terms of Services </FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
               <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        KreativeKoder
                    </SocialLogo>
                    <WebsiteRights>KreativeKoder © 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </SocialIconLink>
                    </SocialIcons>
               </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;