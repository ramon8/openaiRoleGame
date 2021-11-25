/** @jsxImportSource @emotion/react */
import React from 'react';
import { Button } from "../../components/button";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const anim = {
    exit: { opacity: 0 },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: .2 } 
}

const styles = {
    display: 'grid',
    width: '100%',
    heigh: '100%',
    gridAutoFlow: 'rows',
    placeItems: 'center',
    gap: '2rem',
    span: {
        color: '#f9c962',
        fontSize: '2rem'
    }
}

export const container = {
    height: '100%',
    width: '100%',
    background: 'transparent',
    position: 'absolute',
    left: 0,
    top: 0,
}

export const Home = () => {

    const navigate = useNavigate();
    return <motion.div {...anim}>
        <div css={container}>
            Test
        </div>
        <div css={styles}>
            <span>QWIKI</span>
            <Button onClick={() => { navigate('/game') }}>Start Game</Button>
            <Button>Leaderboard</Button>
        </div>
    </motion.div>
}