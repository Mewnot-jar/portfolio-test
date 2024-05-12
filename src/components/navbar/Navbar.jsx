import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import InfoIcon from '@mui/icons-material/Info';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
const Navbar = () => {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div className='navbar'>
            <div className='logo-menu'>
                <button className='button-menu' onClick={toggleDrawer(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </button>
                <img src={logo} alt="" className='logo' />
            </div>
            <nav className='li-container'>
                <ul>
                    <li>Proyectos</li>
                    <li>Sobre Mi</li>
                    <li>Contactame</li>
                </ul>
            </nav>
            <Drawer color='#1E1E1E' open={open} onClose={toggleDrawer(false)}>
                <List sx={{backgroundColor: '#1E1E1E'}}>
                    <ListItem sx={{margin: 0}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <FolderCopyIcon sx={{color: 'white'}}/>
                            </ListItemIcon>
                            Proyectos
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{margin: 0}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <InfoIcon sx={{color: 'white'}}/>
                            </ListItemIcon>
                            Sobre Mi
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{margin: 0}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <MarkEmailUnreadIcon sx={{color: 'white'}}/>
                            </ListItemIcon>
                            Contactame
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>

    )
}

export default Navbar