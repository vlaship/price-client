import React from 'react';
import {AppBar, Link, Toolbar, Typography, Container, Button} from "@material-ui/core";

export default function Header({onClickUpdate, lastUpdate = 'НИКОГДА'}) {


    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h4" color="inherit" noWrap>
                    <Link href="http://pila.by" color="inherit" target="_blank">
                        pila.by
                    </Link>
                </Typography>
                <Container maxWidth="sm"/>
                <Button
                    variant="contained" color="secondary"
                    // onClick={onClickUpdate.bind(this)}
                >
                    Обновить ({lastUpdate})
                </Button>
            </Toolbar>
        </AppBar>
    )
}
