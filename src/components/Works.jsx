import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  const handleViewportEnter = () => {
    setIsInView(true);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      onViewportEnter={handleViewportEnter}
      variants={fadeIn("up", "spring", 0, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github} 
                alt="github"
                className='w-1/2 h-1/2 object-contain' 
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] sm:text-[20px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] sm:text-[12px]'>{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] sm:text-[12px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  const handleViewportEnter = () => {
    setIsInView(true);
  };

  return (
    <>
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        onViewportEnter={handleViewportEnter}
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
