import React, { useState } from 'react'
import './about.css'
import Progresbar from '../progresbar/Progresbar'

const About = () => {

    const techs = [
        [
            {
                name_tech: 'PHP',
                image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
                exp_tech: '40%',
            },
            {
                name_tech: 'Javascript',
                image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                exp_tech: '50%',
            },
            {
                name_tech: 'Java',
                image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
                exp_tech: '30%',
            },
            {
                name_tech: 'Python',
                image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
                exp_tech: '30%',
            },
        ],
        [
            {
                name_tech: 'HTML',
                image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                exp_tech: '70%',
            },
            {
                name_tech: 'CSS',
                image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
                exp_tech: '70%',
            },
        ],
        [
            {
                name_tech: 'React',
                image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                exp_tech: '30%',
            },
            {
                name_tech: 'Laravel',
                image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
                exp_tech: '20%',
            },
        ],
    ]

    const [currentTypeTech, setCurrentTypeTech] = useState(0)


    return (
        <div className='about-section-container'>
            <div className='about-left-container'>
                <div className='types-techs-container'>
                    <h5 className={currentTypeTech === 0 ? 'selected' : ''} onClick={() => { setCurrentTypeTech(0) }}>BackEnd</h5>
                    <h5 className={currentTypeTech === 1 ? 'selected' : ''} onClick={() => { setCurrentTypeTech(1) }}>FrontEnd</h5>
                    <h5 className={currentTypeTech === 2 ? 'selected' : ''} onClick={() => { setCurrentTypeTech(2) }}>FrameWorks</h5>
                </div>
                <div className='techs-container-main'>
                    {
                        techs[currentTypeTech].map((tech) => (
                            <div className='about-techs-container'>
                                <div className='title-icon-container' key={tech.name_tech}>
                                    <img src={tech.image_tech} alt={tech.name_tech} />
                                </div>
                                <Progresbar percent={tech.exp_tech} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='about-right-container'>
                <div className='heading-about'>
                    <h4>Martin Ardiles</h4>
                    <p>Desarrollador Web</p>
                </div>
                <div className='content-about'>
                    <div className='content-container'>
                        <h5>Objetivo:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, excepturi fugit! Deserunt odit temporibus doloribus? Esse sint expedita reprehenderit quos placeat quaerat, cum pariatur voluptate? Aspernatur impedit temporibus iusto tenetur.</p>
                    </div>
                    <div className='content-container'>
                        <h5>Experiencia:</h5>
                        <div className='experiencie-container'>
                            <div className='date-container'>
                                <p>2022 - 2022</p>
                            </div>
                            <div className='desc-container'>
                                <h6>DevLev</h6>
                                <p>Desarrollador Web Backend</p>
                                <p>Lenguajes: PHP - Javascript</p>
                                <p>Frameworks: Laravel</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-about'>
                    <div className='footer-right'>
                        <a href="#">Github</a>
                    </div>
                    <div className='footer-left'>
                        <a href="#">Linkdin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About