import React,{useState} from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants , Hotels & Attractionsaround you.
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={} onChange={}>
          <MenuItem value="restaurant">Restaurants</MenuItem>
          <MenuItem value="hotel">Hotels</MenuItem>
          <MenuItem value="attraction">Attractions</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default List;
