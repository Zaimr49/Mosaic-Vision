// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Card, CardContent, CardMedia, Typography, Button, Modal, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// interface StockItemProps {
//   stock: any;
//   onDelete: (id: string) => void;
// }

// const StockItem: React.FC<StockItemProps> = ({ stock, onDelete }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const handleEdit = () => {
//     navigate(`/admin-edit-stock/${stock._id}`);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={stock.images[0]}
//         alt={stock.name}
//         sx={{ objectFit: 'cover', cursor: 'pointer' }}
//         onClick={handleOpen}
//       />
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h5" gutterBottom>
//           {stock.name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           <strong>Category:</strong> {stock.category}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           <strong>Sub-Category:</strong> {stock.subCategory}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
//           <strong>Description:</strong>
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {stock.description}
//         </Typography>
//       </CardContent>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
//         <Button variant="contained" color="primary" onClick={handleEdit}>
//           Edit
//         </Button>
//         <Button variant="contained" color="error" onClick={() => onDelete(stock._id)}>
//           Delete
//         </Button>
//       </Box>
//       <Modal open={open} onClose={handleClose}>
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: '80vw', maxHeight: '80vh', overflow: 'auto' }}>
//           <IconButton sx={{ position: 'absolute', top: 0, right: 0 }} onClick={handleClose}>
//             <CloseIcon />
//           </IconButton>
//           <img src={stock.images[0]} alt={stock.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
//         </Box>
//       </Modal>
//     </Card>
//   );
// };

// export default StockItem;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface StockItemProps {
  stock: any;
  onDelete: (id: string) => void;
}

const StockItem: React.FC<StockItemProps> = ({ stock, onDelete }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleEdit = () => {
    navigate(`/admin-edit-stock/${stock._id}`);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    const description = showFullDescription
      ? stock.description
      : `${stock.description.slice(0, 50)}...`;
    return (
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        <strong>Description:</strong> {description}{" "}
        {!showFullDescription && (
          <Button variant="text" onClick={toggleDescription} color="primary">
            Read more
          </Button>
        )}
      </Typography>
    );
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={stock.images[0]}
        alt={stock.name}
        sx={{ objectFit: "cover", cursor: "pointer" }}
        onClick={handleOpen}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        {/* <Typography variant="h5" gutterBottom>
          {stock.name}
        </Typography> */}
        <Typography
          variant="h5"
          color="#333333"
          sx={{
            mt: 0.5,
            mb: 3,
            textAlign: "center",
            fontWeight: "600",
            letterSpacing: "0px",
            fontSize: { xs: "1.25rem", sm: "1.25rem", md: "1.5rem" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {stock.name}{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Category:</strong> {stock.category}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Sub-Category:</strong> {stock.subCategory}
        </Typography>
        {renderDescription()}
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => onDelete(stock._id)}
        >
          Delete
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxWidth: "80vw",
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={stock.images[0]}
            alt={stock.name}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Box>
      </Modal>
    </Card>
  );
};

export default StockItem;
