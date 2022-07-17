import {Box, Container, Grid, FooterBG, BottomText} from '../styles/footerStyles'
import MyImg, {LazyImg} from './MyImg'
import {media, navLinks} from '../consts/links'

export default function Footer(){
    const {telegram, twitter} = media;
    const {tokenomics, farm, community} = navLinks;
    return(
        <Container>
            <FooterBG>
                <MyImg src="/field_footer.svg" layout='fill' alt="field"/>
            </FooterBG>
            <div className='container' style={{alignContent: 'center'}}>
                <Grid>
                    <Box className='centerFlex' href={twitter} target="_blank">
                        <LazyImg src="/twitter.svg" width={50} height={54} alt="Twitter icon"/>
                        <p>Twitter</p>
                    </Box>
                    <Box className='centerFlex' href={telegram} target="_blank">
                        <LazyImg src="/telegram.png" width={54} height={54} alt="Discord icon"/>
                        <p>Telegram</p>
                    </Box>
                </Grid>
                <BottomText>
                    <p>All rights reserved. Farm Token | SMARTBCH 2022.</p>
                    <div>
                        <a href={tokenomics} target="_blank" rel="noreferrer">Tokenomics</a>
                        <a href={farm} target="_blank" rel="noreferrer">Farm</a>
                        <a href={community} target="_blank" rel="noreferrer">Community</a>
                    </div>
                </BottomText>
            </div>
        </Container>
    )
}