import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CinemaCard from './../Components/CinemaCard/CinemaCard';

class CinemaList extends Component {
  render() {
    return   <div>
      <Grid container spacing={3}>
          <Grid
            item
            key={Math.random(10)}
            lg={4}
            md={6}
            xs={12}>
            <CinemaCard/>
          </Grid>
      </Grid>
  </div>;
  }
}

export default CinemaList;
