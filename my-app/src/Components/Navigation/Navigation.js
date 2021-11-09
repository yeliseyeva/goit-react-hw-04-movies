import { ButtonGroup, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
return (
    <ButtonGroup variant="text" aria-label="text button group">
        <NavLink to="/" style={{textDecoration: "none"}}><Button>Homepage</Button></NavLink>
        <NavLink to="/movies" style={{textDecoration: "none"}}><Button>Movies</Button></NavLink>
      </ButtonGroup>
)
}

export default Navigation;