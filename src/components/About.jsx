import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { selfie } from '../assets';

const ServiceCard = () => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[500px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <p className="text-white text-[20px] font-bold text-left">
            I'm a 3rd-year Computer Engineering student at the University of British Columbia, 
            passionate about robotics and AI. 
            I find joy in turning fresh ideas into reality through hands-on work. 
            Explore my portfolio for a glimpse of my skills and creativity.
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <div className="flex flex-col-reverse md:flex-row gap-10 mt-10 items-center">
        <ServiceCard />
        <motion.div variants={fadeIn("left", "spring", 0.5 * 1, 0.75)} className="w-[80%] md:w-[40%] h-auto mb-5 md:mb-0">
          <img
            src= {selfie}
            alt="web-development"
            className='rounded-lg'
          />          
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
