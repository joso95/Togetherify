import React, { Component } from "react";
import { Button, TextField, Grid, Typography } from "@material-ui/core/";
import { Link } from 'react-router-dom';


export default class RoomJoinPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Grid container spacing={1} alignItems='center'>
                <Grid>
                    <Typography variant='h4' component='h4'>
                        Join a Room
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}
