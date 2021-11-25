/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import { Button } from '../../components/button';
import * as style from './game.style';
import * as animation from './game.animation';

export const Game = () => {
   return <div css={style.container}>
    <motion.div {...animation.container}>
      <motion.span {...animation.text}>
        Lorem ipsum texto 1
      </motion.span>
    </motion.div>
    <motion.div {...animation.container} css={{ background: '#f9c962' }}>
      <motion.span {...animation.text}>
        Lorem ipsum texto 2
      </motion.span>
    </motion.div>
    <motion.div {...animation.button} css={style.button}><Button>Go</Button></motion.div>
  </div>
}