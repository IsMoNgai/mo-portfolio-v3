import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
      <motion.div 
        className="flex justify-center text-center mt-20"
        variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}>
        <span className="text-[20px] sm:text=[9px]">I know more than these! <br/> Check this&nbsp; <a className="underline" href="https://github.com/IsMoNgai">Link</a> &nbsp;for more!</span>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "");