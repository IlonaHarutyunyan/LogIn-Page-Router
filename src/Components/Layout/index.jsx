import { NavLink, Outlet } from 'react-router-dom';
//style
import './style.css';
//icons
import { BiHomeAlt } from 'react-icons/bi';
import { RiDashboardLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';


export const Layout = () => {
    return(
        <div className='main'>
        <div className='container'>
            <div className="wrapper">
                <header className = 'nav-wrapper'>
                    <NavLink to = '/'>Sectoral</NavLink>
                    <div>  
                        <BiHomeAlt/>
                        <NavLink to='/home'>Home</NavLink>
                    </div>
                    <div>
                        <RiDashboardLine/>
                        <NavLink to='/dashboard'>DashBoard</NavLink>  
                    </div>
                    <div>
                        <FiUsers/>
                        <NavLink to = '/users'>Users</NavLink> 
                    </div> 
                </header>
            </div>
            <div>
                <Outlet className = 'outlet'/>
            </div>
        </div>
       </div>
    )
}