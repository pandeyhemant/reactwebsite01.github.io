import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { Pricing } from '../../components';
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing/>
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;
