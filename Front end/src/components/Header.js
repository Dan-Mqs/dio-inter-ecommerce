import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core/";
import Cart from "./Cart";
import styled from "styled-components";

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
        <Button color="secondary">Home</Button>
      </Link>
      <Link to="/contato">
        <Button color="secondary">Writing Wall</Button>
      </Link>
      <Cart />
    </Grid>
  );
};

export default Header;
