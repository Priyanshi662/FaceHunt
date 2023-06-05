import React from "react";
import { Box, Button, colors } from "@mui/material";

const ImageLinkForm = ({ ImageURL, onImageSubmit, onInputChange }) => {
  const handleSubmit = () => {
    onImageSubmit();
  };

  return (
    <div className="center">
      <Box
        sx={{
          width: 300,
          padding: 2,
          backgroundColor: 'primary.dark',
        }}
      >
        <div className="center">
          <input
            type="text"
            value={ImageURL}
            onChange={onInputChange}
            sx={{
              border: "none",
              borderBottom: "2px solid",
              borderColor: colors.grey[400],
              borderRadius: "0px",
              m: "10px",
              p: "20px",
              width: "100%",
              "&::placeholder": {
                color: colors.grey[500],
              },
              "&:focus": {
                outline: "none",
                borderBottom: `1px solid ${colors.blue[500]}`,
              },
            }}
            placeholder="Enter Image URL"
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: colors.blue[500],
              color: colors.common.white,
              marginLeft: "5px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: colors.blue[600],
              },
            }}
          >
            Detect
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default ImageLinkForm;
