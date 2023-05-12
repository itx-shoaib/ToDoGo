import React, { useState } from "react";
import { Menu, TextField, MenuItem, Checkbox, Box } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TuneIcon from '@mui/icons-material/Tune';

const CheckboxMenu = ({ selectedOptions, onOptionSelect, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleOptionSelect = (option) => (event) => {
    onOptionSelect(option, event.target.checked);
  };
  return (
    <>
      <Box sx={{cursor:"pointer",fontSize: 28,color: "#979797"}} onClick={handleMenuClick}>
        <TuneIcon/>
      </Box>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        { options && options.map((option) => (
          <MenuItem key={option}>
            <Checkbox
              checked={selectedOptions.includes(option)}
              onChange={handleOptionSelect(option)}
            />
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export function SearchField({
  searchTerm,
  setSearchTerm,
  options,
  selectedOptions,
  handleOptionSelect,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        border: "1px solid black",
        borderRadius: "5px",
        height: "35px",
        width:"40%",
        background:"white"
      }}
    >
      <ManageSearchIcon
        sx={{ fontSize: 28, paddingLeft: "5px", color: "#979797" }}
      />
      <Box sx={{ margin: "5px", marginTop: "8px" }}>
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <CheckboxMenu
                selectedOptions={selectedOptions}
                onOptionSelect={handleOptionSelect}
                options={options}
              />
            ),
          }}
        />
      </Box>
    </Box>
  );
}

export default SearchField;
