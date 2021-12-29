import * as React from 'react';
import { Typography, Link } from "@mui/material";

export default function Copyright(props: any) {
  return (
    <React.Fragment>
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </React.Fragment>
  );
}