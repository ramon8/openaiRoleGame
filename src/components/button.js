/** @jsxImportSource @emotion/react */
import React from 'react';

import anime from 'animejs/lib/anime.es.js';



const styles = (variant) => ({
    color: '#333032',
    backgroundColor: '#f9c962',

    fontFamily: '"Fredoka One", cursive',
    fontSize: '1.2rem',

    width: '15rem',
    height: 'fit-content',
    border: 0,
    borderRadius: '.2rem',
    padding: '.8rem 3.2rem',
    transform: 'translate(0, 0)',

    cursor: 'pointer',
})

export const Button = ({ children, onClick, variant }) => {

    const ref = React.useRef(null);
    const animateButton = (anim) => {
        anime.remove(ref.current);
        anime(anim);
    }
    const onHoverIn = () => {
        animateButton({
            targets: ref?.current,
            easing: 'cubicBezier(.06,.56,.01, 2.5)',
            duration: 250,
            translateY: -5,
            boxShadow: '0 5px 0 black',
        })
    }
    const onHoverOut = () => {
        animateButton({
            targets: ref?.current,
            boxShadow: '0px 0px 0px black',
            easing: 'linear',
            translateY: '0',
            duration: 200
        })
    }
    const onClickDown = () => {
        animateButton({
            targets: ref?.current,
            boxShadow: '0px 0px 0px black',
            easing: 'linear',
            translateY: 0,
            duration: 50
        })
    }

    return <button
        css={styles(variant)}
        ref={ref}
        onClick={onClick}
        onMouseDown={onClickDown}
        onMouseUp={onHoverIn}
        onMouseOver={onHoverIn}
        onMouseOut={onHoverOut}
    >{children}
    </button>
}