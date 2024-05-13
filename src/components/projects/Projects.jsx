import React, { useEffect, useState } from 'react'
import './projects.css'
import { Box, Button, Container, Fade, Grid, Grow, IconButton, MobileStepper, Paper, Typography } from '@mui/material'
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import placeHolderImage from '../../assets/placeholder-image.jpg'

const Projects = () => {


    const [currentProject, setCurrentProject] = useState(1)

    const projects = [
        {
            id_project: 1,
            title_project: 'Api Rest Laravel',
            image_project: placeHolderImage,
            desc_project: 'Api Rest hecho con el Framework de Laravel utilizado para...',
            techs_project: [
                {
                    title_tech: 'PHP',
                    image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
                },
                {
                    title_tech: 'Laravel',
                    image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
                },
                {
                    title_tech: 'Javascript',
                    image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                },
                {
                    title_tech: 'MySql',
                    image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
                },
            ]
        },
        {
            id_project: 2,
            title_project: 'Auto Keys',
            image_project: placeHolderImage,
            desc_project: 'Script de Python utilizado para que las teclas "A" y "D" se presionen infinitamente',
            techs_project: [
                {
                    title_tech: 'Python',
                    image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
                },
            ]
        },
        {
            id_project: 3,
            title_project: 'Landing Page',
            image_project: placeHolderImage,
            desc_project: 'Landing Page de presentacion hecha para la empresa...',
            techs_project: [
                {
                    title_tech: 'React',
                    image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                },
                {
                    title_tech: 'Javascript',
                    image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                },
            ]
        },
        {
            id_project: 4,
            title_project: 'Page WeatherApi',
            image_project: placeHolderImage,
            desc_project: 'Pagina que consume la Api de WeatherApi',
            techs_project: [
                {
                    title_tech: 'React',
                    image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                },
                {
                    title_tech: 'Javascript',
                    image_tech: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                },
            ]
        },
    ]
    const changeOpacity = (id) => {
        return id === currentProject ? 'selected' : ''
    }
    return (
        <div className='project-main-container'>
            <div className='rectangle-title-container'>
                <h3>PROYECTOS</h3>
            </div>
            <div className='section-project-container'>
                <div className='project-container'>
                    <div className='left-section-container'>
                        {
                            projects.map((project) => (
                                <div className={`text-projects-container ${changeOpacity(project.id_project)}`} key={project.id_project} onClick={(e) => { setCurrentProject(project.id_project) }}>
                                    <div className='titles-projects-container'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pinned" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
                                            <path d="M12 16l0 5" />
                                            <path d="M8 4l8 0" />
                                        </svg>
                                        <h2>{project.title_project}</h2>
                                    </div>
                                    <div className='external-links-container'>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                            </svg>
                                        </a>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                                <path d="M11 13l9 -9" />
                                                <path d="M15 4h5v5" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='right-section-container'>
                        <div className='image-project-container'>
                            <img src={placeHolderImage} />
                        </div>
                        <div className='desc-project-container'>
                            {
                                <p> - {projects[currentProject - 1].desc_project}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className='techs-container'>
                    <h4>Techs</h4>
                    <div className='techs-images-container'>
                        {
                            projects[currentProject - 1].techs_project.map((tech) => (
                                <img src={tech.image_tech} alt={tech.title_tech} key={tech.title_tech} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects