import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartPage from "../Cart/CartPage";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../Cart/store/cartSlice";
import "./css/nav.css";
import logo from "../../images/logo-no-background.png";
import { logout } from "../Auth/store/authSlice";

import { checkUser } from "../../helpers/Func";

import SearchInp from "./SearchInp";

const pages = [
  {
    title: "Products",
    link: "/",
  },
  // { title: "Pricing", link: "/price" },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Add Product",
    link: "/add",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user.isAdmin;
  React.useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const calcTotalItems = () => {
    const cartItemCount = cart.products.products.reduce(
      (count, product) => count + product.count,
      0
    );
    return cartItemCount;
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogOut = () => {
    dispatch(logout());
    handleCloseNavMenu();
    navigate("/signin");
  };

  return (
    <AppBar
      className='nav'
      position='static'
      sx={{
        marginBottom: "50px",
        maxWidth: "xxl",
        boxShadow: "none",
        borderBottom: "1px solid grey",
      }}
    >
      <Container maxWidth='xxl' className='nav'>
        <Toolbar className='toolbar' disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            className='nav'
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#21272d",
              textDecoration: "none",
            }}
          >
            <img src={logo} width='50px' height='50px' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  className='nav'
                  key={index}
                  onClick={handleCloseNavMenu}
                >
                  <NavLink className='nav' to={page.link}>
                    <Typography
                      sx={{
                        color: "#21272d",
                        textDecoration: "none",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      {page.title}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}

              {isAdmin && (
                <MenuItem className='nav' onClick={handleCloseNavMenu}>
                  <NavLink className='nav' to='/add'>
                    <Typography
                      sx={{
                        color: "#21272d",
                        textDecoration: "none",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      Add Product
                    </Typography>
                  </NavLink>
                </MenuItem>
              )}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <NavLink className='nav' to={page.link} key={index}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#21272d",
                    display: "block",
                    fontWeight: "600",
                  }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>

          <SearchInp />
          <NavLink className='nav' to='/cart'>
            <Badge
              sx={{ my: 2, color: "#21272D", display: "block" }}
              badgeContent={cart?.products?.products.length}
              color='error'
            >
              <ShoppingCartIcon style={{ color: "#21272d" }} />
            </Badge>
          </NavLink>

          {checkUser() ? (
            <Box sx={{ flexGrow: 0, marginLeft: "20px" }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ backgroundColor: "#21272D" }}
                    alt='Remy Sharp'
                    src='/static/images/avatar/2.jpg'
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                  <Typography textAlign='center'>Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <NavLink className='nav' to='/signup'>
                <Button sx={{ my: 2, color: "#21272d", display: "block" }}>
                  Sign Up
                </Button>
              </NavLink>
              <NavLink className='nav' to='/signin'>
                <Button sx={{ my: 2, color: "#21272d", display: "block" }}>
                  Sign In
                </Button>
              </NavLink>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
