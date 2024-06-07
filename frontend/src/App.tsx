import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Admin from "./pages/AdminAuth";
import AdminHome from "./pages/AdminHome";
import AdminAllStock from "./pages/AdminAllStock/AdminAllStock";
import AddStock from "./pages/AddStock/AddStock";
import EditStock from "./pages/EditStock/EditStock";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from './pages/Search';
import SubCategoryPage from './pages/SubCategoryPage';

const App: React.FC = () => {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-login" element={<Login />} />
            <Route path="/admin-signup" element={<Signup />} />
            <Route path="/admin-home-page" element={<AdminHome />} />
            <Route path="/admin-all-stock" element={<AdminAllStock />} />
            <Route path="/admin-add-stock" element={<AddStock />} />
            <Route path="/admin-edit-stock/:id" element={<EditStock />} />
            <Route path="/search" element={<Search />} />
            <Route path="/subcategory/:subCategory" element={<SubCategoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
