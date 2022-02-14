import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "./store/actions/cart";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ddd",
    background: "#202020"
  },
  button: {
    color: "#ddd",
    background: "#303030",
    marginTop: ".75rem"
  },
  image: {
    borderRadius: "5px",
    marginBottom: ".75rem"
  }
}));

const Card = ({ product, children }) => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper} elevation={2}>
        <Grid container direction="column">
          <Grid item>
            <img width="140px" src={product.image} alt={product.name_product} className={classes.image}/>
            <Typography variant="h6">{children}</Typography>
            <Typography variant="subtitle1">{product.artist}</Typography>
          </Grid>

          <Button
            className={classes.button}
            variant="contained"
            onClick={() => dispatch(cartActions.Add(cart, product))}
          >
            Add to Cart +
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
