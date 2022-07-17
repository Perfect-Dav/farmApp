import { useState, useRef } from 'react'
import {Container, Title, InfoPart, List, ListItem, Icon, BarsContainer, BarsBg, BarsLegend, Circle, Bars, Bar, Column, Fill, Apy} from '../styles/earnStyles'
import {InfoText} from '../styles/infoStyles'
import MyImg, {LazyImg} from './MyImg'
import {useIntersection} from '../utlis/intersectionObserver'

export default function Earn(){
    const [inView, setIsInView] = useState(false);
    const ref = useRef();
    useIntersection(ref, () => {
        setIsInView(true);
    }, {
        rootMargin: '0px',
        threshold: '0.7'
    });

    return(
        <Container style={{paddingTop: '135px'}}>
            <BarsContainer ref={ref}>
                <BarsBg>
                    <MyImg src="/plant_bg.svg" alt="plant"/>
                </BarsBg>
                <BarsLegend>
                    <div className='centerFlex'><Circle/>Yield without Harvest</div>
                    <div className='centerFlex'><Circle half/>Yield with Harvest</div>
                </BarsLegend>
                <Bars>
                    <Column>
                        <Bar><Apy>APY</Apy><Fill height={inView ? 0.7 : 0}/></Bar>
                        <p className='centerFlex'>Liquidity Provision</p>
                    </Column>

                    <Column>
                        <Bar><Apy>APY</Apy><Fill height={inView ? 0.7 : 0} style={{transitionDelay: '0.4s'}}/></Bar>
                        <p className='centerFlex'>Staking</p>
                    </Column>
                </Bars>
            </BarsContainer>
            <InfoPart>
                <Title>
                    EARN EXTRA YIELD WITH FARMTOKEN
                </Title>
                <InfoText>
                    By Staking Farmtoken LP Token.
                </InfoText>
                <List>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <LazyImg src="/compounding.svg" width={30} height={30} alt="Auto-compounding"/>
                        </Icon>
                        High APY
                    </ListItem>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <LazyImg src="/auto_rewards.svg" width={30} height={30} alt="Auto-harvested rewards"/>
                        </Icon>
                        Multiple Reward Pair
                    </ListItem>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <LazyImg src="/farm_rewards.svg" width={30} height={30} alt="FARM Rewards"/>
                        </Icon>
                        FARMTOKEN Rewards
                    </ListItem>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <LazyImg src="/token_rewards.svg" width={30} height={30} alt="Unique DAO token rewards"/>
                        </Icon>
                        Farmers token rewards
                    </ListItem>
                </List>
            </InfoPart>
        </Container>
    )
}