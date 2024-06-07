import React, { useState, useEffect, useMemo } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
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
import axios from 'axios';
import { getAllSubCategoriesAPI } from '../Constants';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [subCategories, setSubCategories] = useState<{ [key: string]: string[] }>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAdmin } = useSelector((state: RootState) => state.User);

  useEffect(() => {
    setMobileView(isMobile);
  }, [isMobile]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(getAllSubCategoriesAPI);
        const subCategoriesData: { [key: string]: string[] } = {};
        response.data.forEach((category: any) => {
          subCategoriesData[category._id] = category.subCategories;
        });
        setSubCategories(subCategoriesData);
      } catch (error) {
        console.error('Failed to fetch subcategories', error);
      }
    };

    fetchSubCategories();
  }, []);

  const memoizedSubCategories = useMemo(() => subCategories, [subCategories]);

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

  const handleSubCategoryClick = (subCategory: string) => {
    navigate(`/subcategory/${subCategory}`);
    handleMenuClose();
  };

  const getButtonStyles = (menuName: string) => ({
    backgroundColor: openMenu === menuName ? theme.palette.secondary.main : 'inherit',
    color: openMenu === menuName ? theme.palette.custom.tertiary : theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.custom.tertiary,
    },
  });

  const renderMenuItems = (items: string[], onClickHandler: (item: string) => void) => (
    items.map((item) => (
      <MenuItem key={item} onClick={() => onClickHandler(item)}>{item}</MenuItem>
    ))
  );

  const renderMobileMenuItems = (items: string[]) => (
    items.map((item, index) => (
      <ListItem button key={`${item}-${index}`} onClick={() => handleSubCategoryClick(item)}>
        <ListItemText primary={item} sx={{ color: theme.palette.primary.main }} />
      </ListItem>
    ))
  );

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
          {Object.keys(memoizedSubCategories).map(category => (
            <React.Fragment key={category}>
              <ListItem button onClick={() => handleMenuClick(category)}>
                <ListItemText primary={category} sx={{ color: theme.palette.secondary.main }} />
                <ListItemIcon>
                  {openMenu === category ? <ExpandLess sx={{ color: theme.palette.secondary.main }} /> : <ExpandMore sx={{ color: theme.palette.secondary.main }} />}
                </ListItemIcon>
              </ListItem>
              <Collapse in={openMenu === category} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {renderMobileMenuItems(memoizedSubCategories[category])}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
          <ListItem button component={Link} to="/portfolio" onClick={handleDrawerToggle}>
            <ListItemText primary="Portfolio" sx={{ color: theme.palette.secondary.main }} />
          </ListItem>
          {isAdmin && (
            <ListItem button component={Link} to="/admin" onClick={handleDrawerToggle}>
              <Button color="inherit" onClick={handleLogout} sx={{ backgroundColor: theme.palette.error.main, color: theme.palette.custom.tertiary }}>
                Logout
              </Button>
            </ListItem>
          )}
        </List>
      </Box>
    </Drawer>
  );

  const renderDesktopMenu = (
    <>
      {Object.keys(memoizedSubCategories).map(category => (
        <Menu
          anchorEl={anchorEl}
          open={openMenu === category && !mobileView}
          onClose={handleMenuClose}
          MenuListProps={{ onMouseLeave: handleMenuClose }}
          key={category}
        >
          {renderMenuItems(memoizedSubCategories[category], handleSubCategoryClick)}
        </Menu>
      ))}
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
              {Object.keys(memoizedSubCategories).map(category => (
                <Button
                  key={category}
                  color="inherit"
                  onClick={(event) => handleMenuOpen(event, category)}
                  sx={getButtonStyles(category)}
                  endIcon={<ArrowDropDownIcon />}
                >
                  {category}
                </Button>
              ))}
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
