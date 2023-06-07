'use client';

import { motion } from 'framer-motion';

import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn,staggerContainer} from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title ="| About Natco Conference"
      textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween',0.2,1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px]
        text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'>NAT'CO </span>
        
        is a national conference which takes place at the
        end of each year in which the 11 local committees
        gather in one place to learn,
        celebrate their 

        <span className='font-extrabold text-white'> Achievements </span> 

        throughout the year and
        transmit their positions to the next
        generation.
        <br/>
        Scroll Down
      </motion.p>

      <motion.img
        variants={fadeIn('up' , 'tween',0.3,1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      >

      </motion.img>
    </motion.div>
  </section>
);

export default About;
