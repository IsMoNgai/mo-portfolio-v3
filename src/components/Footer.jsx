import { email, telephone, linkedin, github, youtube } from '../assets';
import { SectionWrapper } from '../hoc';

const Footer = () => {
  return (
    <section className='w-full h-30 bg-tertiary relative flex flex-col items-center justify-center rounded-lg'>
        <div className='grid md:grid-cols-3 md:grid-rows-2 sm:grid-cols-1 md:grid-rows-3 h-full w-9/10 mt-5 mb-5'>
            <div className='relative flex items-center justify-center row-start-1 col-start-1 gap-3 pt-3'>
                <img className='w-5 h-6' src={email}/>
                <p>mongaiwaiyin@gmail.com</p>
            </div>
            <div className='relative flex items-center justify-center md:row-start-1 md:col-start-2 sm:row-start-1 sm:col-start-1 gap-10 pt-3'>
                <p><a href="https://www.youtube.com/@mongai720/featured"><img className='w-5 h-6'  src={youtube}/></a></p>
                <p><a href="https://www.linkedin.com/in/mo-ngai-1ba059266/"><img className='w-5 h-5'  src={linkedin}/></a></p>
                <p><a href="https://github.com/IsMoNgai"><img className='w-5 h-6'  src={github}/></a></p>
            </div>
            <div className='relative flex items-center justify-center md:row-start-1 md:col-start-3 gap-3 sm:row-start-2 sm:col-start-1 pt-3'>
                <img className='w-5 h-5' src={telephone}/>
                <p>+1 (604) 722-1278</p>
            </div>  
            <div className='relative flex items-center justify-center md:row-start-2 md:col-start-2 sm:row-start-3 sm:col-start-1 pt-5'><p>Wai Yin Mo Ngai</p></div>
        </div>
    </section>
  )
}

export default SectionWrapper(Footer, "")