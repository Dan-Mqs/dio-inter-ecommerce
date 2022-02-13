import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core/";
import Cart from "./Cart";
import styled from "styled-components";

const Title = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-family: "Fjalla One", sans-serif;
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
        Dio Shopping
      </Title>
      <Link to="/">
        <Button color="primary">Home</Button>
      </Link>
      <Link to="/contato">
        <Button color="primary">Contato</Button>
      </Link>
      <Cart />
    </Grid>
  );
};

export default Header;
