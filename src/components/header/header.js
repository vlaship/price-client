import React from 'react';
import {AppBar, Link, Toolbar, Typography, Grid} from "@material-ui/core";
import Update from "../update-db/update-db";

export default function Header() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Typography variant="h4" color="inherit" noWrap>
                            <Link href="http://pila.by" color="inherit" target="_blank">
                                pila.by
                            </Link>
                        </Typography></Grid>
                    <Grid item xs={7}/>
                    <Grid item xs={3}>
                        <Update/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
