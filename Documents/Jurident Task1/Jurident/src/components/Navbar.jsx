import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currNav, setCurrNav] = React.useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHomeNav = () =>{
    setCurrNav('home');
    setAnchorElNav(null);
  }

  const handleServicesNav = () =>{
    setCurrNav('services');
    setAnchorElNav(null);
  }

  const handleContactNav = () =>{
    setCurrNav('contact');
    setAnchorElNav(null);
  }

  const handleProjectsNav = () =>{
    setCurrNav('projects');
    setAnchorElNav(null);
  }

  return (
    <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" className="Logo">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  ml: 6,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "black",
                  alignItems: "center",
                  ":hover": {
                    color: "black",
                  },
                }}
                component={Link}
                to={"/"}
              >
                {/* <img src={Logo} alt='logo' className='logo'/> */}
                <h3 className="logo-text dark:text-white">Construction.co</h3>
              </Typography>
            </Link>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 2,
                fontFamily: "monospace",
                fontWeight: 1000,
                color: "inherit",
                textDecoration: "none",
              }}
              className="dark:text-white"
            >
              Construction.co
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent:'flex-end' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{margin: '5px'}} className="dark:text-white"/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  flexDirection: "column",
                }}
                className="nav-menu"
              >
                <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                  <Link to="/" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Home
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                  <Link to="/services" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Services
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                  <Link to="/contact" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Contact Us
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                  <Link to="/projects" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Projects
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                my: 3,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Link to="/" className="navlink">
                <Button
                  key="About"
                  onClick={handleHomeNav}
                  sx={{
                    my: 2,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 20px 0 20px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "14pt",
                  }}
                  className={`navbar-menu-text ${currNav === 'home' ? 'dark:text-white' : 'dark:text-grey'}`}
                >
                  Home
                </Button>
              </Link>
              <Link to="/services" className="navlink">
                <Button
                  key="About"
                  onClick={handleServicesNav}
                  sx={{
                    my: 2,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 20px 0 20px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "14pt",
                  }}
                  className={`navbar-menu-text ${currNav === 'services' ? 'dark:text-white' : 'dark:text-grey'}`}
                >
                  Services
                </Button>
              </Link>
              <Link to="/contact" className="navlink">
                <Button
                  key="About"
                  onClick={handleContactNav}
                  sx={{
                    my: 2,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 20px 0 20px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "14pt",
                  }}
                  className={`navbar-menu-text ${currNav === 'contact' ? 'dark:text-white' : 'dark:text-grey'}`}
                >
                  Contact Us
                </Button>
              </Link>
              <Link to="/projects" className="navlink">
                <Button
                  key="About"
                  onClick={handleProjectsNav}
                  sx={{
                    my: 2,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 20px 0 20px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "14pt",
                  }}
                  className={`navbar-menu-text ${currNav === 'projects' ? 'dark:text-white' : 'dark:text-grey'}`}
                >
                  Projects
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
    </AppBar>
  );
}
export default Navbar;
