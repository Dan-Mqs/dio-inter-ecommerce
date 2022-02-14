import { Button, Grid } from "@material-ui/core/";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";

const Title = styled.div`
  margin-top: 1rem;
  font-size: 3rem;
  font-family: 'New Rocker', "Fjalla One", sans-serif;
  color: #ddd;
`;

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      xs={12}
    >
      <Title>
        The Album Store
      </Title>
      <Link to="/">
        <Button variant="outlined" size="large" color="secondary">Store</Button>
      </Link>
      <Link to="/wall">
        <Button size="large" color="secondary">Writing Wall</Button>
      </Link>
      <Cart />
    </Grid>
  );
};

export default Header;
