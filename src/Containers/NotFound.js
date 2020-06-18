import React from "react";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Typography variant="subtitle1">Sorry, page not found!</Typography>
    </Container>
  );
}
