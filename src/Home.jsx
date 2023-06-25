import hero from '/hero2.png'
import line from '/line.png'
import line2 from '/line2.png'
import git from '/git.png'
import gmail from '/gmail.png'
import ig from '/ig.png'

import './Home.css'
export default function Home(){

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      };

    return(
        <div className='container flex flex-row content-center'>
            <div className='ideas flex flex-col gap-11'>
                <div className='flex flex-row gap-2 '>
                    <img className='line' src={line} />
                    <h1 className="mohamed">Mohamed Amarcha</h1>
                </div>
                <h1 className='bring'>I bring <span className='blue'>ideas</span> to web.</h1>
                <p className="sol">Transforming complex ideas into elegant and scalable front-end solutions.</p>
                <button className="view" onClick={() => scrollToSection('works')}>View My Work</button>
            </div>
            <div className='flex flex-col items-center gap-16'>
                <img className='hero' src={hero}  />
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-row gap-2 justify-center'>
                        <img className='line2' src={line2} />
                        <h1 className="socials">Socials</h1>
                    </div>
                    <div className='flex items-center justify-evenly'>
                        <a href="https://github.com/ozawakyo" target='_blank' rel="noreferrer"><img className='logo' src={git} /></a>
                        <a href="https://www.instagram.com/simoamarcha/" target='_blank' rel="noreferrer"><img className='logo' src={ig} /></a>
                        <img onClick={() => scrollToSection('contact')} className='logo' src={gmail} />
                    </div>
                </div>
            </div>
        </div>
    )
}