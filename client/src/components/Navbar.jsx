import {AppBar,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';
 const Header = styled(AppBar)`
background:#111111
`;
const Tabs =styled(NavLink)`
font-size:20px;
margin-right:10px;
color:inherit;
text-decoration:none;   
`
const Navbar =()=>{
    return(
    <Header position ="static">
        <Toolbar>
       <Tabs to='/'>NYX Wolves</Tabs>
       <Tabs to='/all'>All users </Tabs>
       <Tabs to='/add'>Add users</Tabs>
        </Toolbar>
    </Header>
    )
}
export default Navbar;