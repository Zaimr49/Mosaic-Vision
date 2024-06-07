import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Box, Menu, MenuItem, Container, Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import logo from '../Mosaic-Logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { clearUserData } from '../redux/slices/User_Slice';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAdmin } = useSelector((state: RootState) => state.User);

  useEffect(() => {
    setMobileView(isMobile);
  }, [isMobile]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchAction = () => {
    if (searchQuery.trim()) {
      navigate(`/search?search=${searchQuery}`);
    }
  };

  const handleSearchKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchAction();
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menuName: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menuName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const handleLogout = () => {
    dispatch(clearUserData());
    navigate('/admin');
  };

  const getButtonStyles = (menuName: string) => ({
    backgroundColor: openMenu === menuName ? theme.palette.secondary.main : 'inherit',
    color: openMenu === menuName ? theme.palette.custom.tertiary : theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.custom.tertiary,
    },
  });

  const renderMobileMenu = (
    <Drawer
      anchor="left"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Box
        sx={{
          width: 250,
          height: '100%',
          backgroundColor: theme.palette.custom.tertiary,
        }}
        role="presentation"
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon sx={{ color: theme.palette.secondary.main }} />
          </IconButton>
        </Box>
        <List>
          <ListItem button component={Link} to="/admin" onClick={handleDrawerToggle}>
            <ListItemText primary="Admin" sx={{ color: theme.palette.secondary.main }} />
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('industry')}>
            <ListItemText primary="Boxes by Industry" sx={{ color: theme.palette.secondary.main }} />
            <ListItemIcon>
              {openMenu === 'industry' ? <ExpandLess sx={{ color: theme.palette.secondary.main }} /> : <ExpandMore sx={{ color: theme.palette.secondary.main }} />}
            </ListItemIcon>
          </ListItem>
          <Collapse in={openMenu === 'industry'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Apparel Boxes" sx={{ color: theme.palette.primary.main }} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Bakery Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Candle Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="CBD Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
              {/* Add more items as needed */}
            </List>
          </Collapse>
          <ListItem button onClick={() => handleMenuClick('material')}>
            <ListItemText primary="Boxes by Material" sx={{ color: theme.palette.secondary.main }} />
            <ListItemIcon>
              {openMenu === 'material' ? <ExpandLess sx={{ color: theme.palette.secondary.main }} /> : <ExpandMore sx={{ color: theme.palette.secondary.main }} />}
            </ListItemIcon>
          </ListItem>
          <Collapse in={openMenu === 'material'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Corrugated Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Rigid Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Cardboard Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Kraft Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleMenuClick('style')}>
            <ListItemText primary="Boxes by Style" sx={{ color: theme.palette.secondary.main }} />
            <ListItemIcon>
              {openMenu === 'style' ? <ExpandLess sx={{ color: theme.palette.secondary.main }} /> : <ExpandMore sx={{ color: theme.palette.secondary.main }} />}
            </ListItemIcon>
          </ListItem>
          <Collapse in={openMenu === 'style'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Drawer Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Sleeve Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Foldable Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Telescope Boxes" sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button component={Link} to="/portfolio" onClick={handleDrawerToggle}>
            <ListItemText primary="Portfolio" sx={{ color: theme.palette.secondary.main }} />
          </ListItem>
          {/* {!mobileView && isAdmin && (
              <Box sx={{ marginLeft: '2em' }}>
                <Button color="inherit" onClick={handleLogout} sx={{ backgroundColor: theme.palette.error.main, color: theme.palette.custom.tertiary }}>
                  Logout
                </Button>
              </Box>
            )} */}
          <ListItem button component={Link} to="/admin" onClick={handleDrawerToggle}>
          {isAdmin &&
          (<Button color="inherit" onClick={handleLogout} sx={{ backgroundColor: theme.palette.error.main, color: theme.palette.custom.tertiary }}>
                  Logout
                </Button>)}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  const renderDesktopMenu = (
    <>
      <Menu
        anchorEl={anchorEl}
        open={openMenu === 'industry' && !mobileView}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
      >
        <MenuItem onClick={handleMenuClose}>Apparel Boxes</MenuItem>
        <MenuItem onClick={handleMenuClose}>Bakery Boxes</MenuItem>
        <MenuItem onClick={handleMenuClose}>Candle Boxes</MenuItem>
        <MenuItem onClick={handleMenuClose}>CBD Boxes</MenuItem>
        {/* Add more items as needed */}
      </Menu>

      <Menu
        anchorEl={anchorEl}
        open={openMenu === 'material' && !mobileView}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
      >
        <MenuItem onClick={handleMenuClose}>Corrugated Boxes</MenuItem>
        <MenuItem onClick={handleMenuClose}>Rigid Boxes</MenuItem>
        <MenuItem onClick={handleMenuClose}>Cardboard Boxes</MenuItem>
        <MenuItem onClick={handleMenuClose}>Kraft Boxes</MenuItem>
        {/* Add more items as needed */}
      </Menu>

      <Menu
        anchorEl={anchorEl}
        open={openMenu === 'style' && !mobileView}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
      >
        <MenuItem onClick={handleMenuClose}>Drawer Boxes</MenuItem>
        <MenuItem onClick={handleMenuClose}>Sleeve Boxes</MenuItem>
        <MenuItem onClick={handleMenuClose}>Foldable Boxes</MenuItem>
        <MenuItem onClick={handleMenuClose}>Telescope Boxes</MenuItem>
        {/* Add more items as needed */}
      </Menu>
    </>
  );

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: theme.palette.custom.tertiary }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box component={Link} to="/" sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              <img src={logo} alt="Mosaic Vision" style={{ height: '40px' }} />
            </Box>
            
            <Box component={Link} to="/" sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
              <img src={logo} alt="Mosaic Vision" style={{ height: '40px' }} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Button color="inherit" component={Link} to="/admin" sx={{ color: theme.palette.primary.main, '&:hover': { color: theme.palette.secondary.main } }}>
                Admin
              </Button>
              <Button
                color="inherit"
                onClick={(event) => handleMenuOpen(event, 'industry')}
                sx={getButtonStyles('industry')}
                endIcon={<ArrowDropDownIcon />}
              >
                Boxes by Industry
              </Button>
              <Button
                color="inherit"
                onClick={(event) => handleMenuOpen(event, 'material')}
                sx={getButtonStyles('material')}
                endIcon={<ArrowDropDownIcon />}
              >
                Boxes by Material
              </Button>
              <Button
                color="inherit"
                onClick={(event) => handleMenuOpen(event, 'style')}
                sx={getButtonStyles('style')}
                endIcon={<ArrowDropDownIcon />}
              >
                Boxes by Style
              </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '2em' }}>
              <TextField
                variant="outlined"
                size="small"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleSearchKeyPress}
                placeholder="Search..."
                sx={{
                  marginRight: '10px',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.secondary.main,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.secondary.main,
                    },
                  },
                }}
              />
              <IconButton color="inherit" onClick={handleSearchAction} sx={{ color: theme.palette.primary.main, '&:hover': { color: theme.palette.secondary.main } }}>
                <SearchIcon />
              </IconButton>
              {!mobileView && (
                <Button color="inherit" sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.custom.tertiary }} component={Link} to="/portfolio">
                  Portfolio
                </Button>
              )}
            </Box>
            {!mobileView && isAdmin && (
              <Box sx={{ marginLeft: '2em' }}>
                <Button color="inherit" onClick={handleLogout} sx={{ backgroundColor: theme.palette.error.main, color: theme.palette.custom.tertiary }}>
                  Logout
                </Button>
              </Box>
            )}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ color: theme.palette.secondary.main }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderDesktopMenu}
    </>
  );
};

export default Navbar;
