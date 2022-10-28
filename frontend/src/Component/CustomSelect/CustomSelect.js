import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

export default function CustomSelect({
  label,
  error,
  name,
  helperText,
  value,
  handleChanges,
  options,
  variant,
}) {
  return (
    <>
      <FormControl
        fullWidth
        error={error ? true : false}
        variant={variant ? variant : "outlined"}
      >
        <InputLabel id="custom-select">{label}</InputLabel>
        <Select
          labelId="custom-select"
          id="custom-select-input"
          value={value}
          name={name}
          onChange={handleChanges}
          label={label}
        >
          {options.map((option, index) => {
            return (
              <MenuItem key={index} value={option._id}>
                {`${option.firstName + " " + option.lastName}`}
              </MenuItem>
            );
          })}
        </Select>

        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
}
