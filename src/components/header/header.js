import React from 'react';
import {AppBar, Link, Toolbar, Typography, Container, Button} from "@material-ui/core";
import Update from "../update-db/update-db";

export default function Header() {

    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h4" color="inherit" noWrap>
                    <Link href="http://pila.by" color="inherit" target="_blank">
                        pila.by
                    </Link>
                </Typography>
                <Container maxWidth="sm"/>
                <Update/>
            </Toolbar>
        </AppBar>
    )
}
