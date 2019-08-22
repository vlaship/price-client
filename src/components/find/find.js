import React from "react";
import {FormControl, TextField, Button, Grid, Container} from "@material-ui/core";
import FindPercent from "./find-percent";

export default class Find extends React.Component {

    state = {
        search: ""
    };

    onSearchChange = event => this.setState({search: event.target.value});

    onKeyPress = event => {
        if (event.key === 'Enter') {
            this.handleSearch()
        }
    };

    handleSearch = () => {
        if (!this.state.search) return;
        this.props.search(this.state.search);
    };

    render = () =>
        <Container style={{'margin': '1em'}}>
            <FormControl fullWidth={true}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <TextField
                            id="outlined-search"
                            label="Поле поиска"
                            type="search"
                            fullWidth={true}
                            margin="dense"
                            variant="outlined"
                            value={this.state.search}
                            onChange={this.onSearchChange}
                            onKeyPress={this.onKeyPress}
                        /></Grid>
                    <Grid item xs={2}>
                        <Button
                            style={{"margin": "0.4em"}}
                            variant="contained"
                            color="primary"
                            size='large'
                            onClick={this.handleSearch}
                            onKeyPress={this.onKeyPress}
                        >
                            Найти
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <FindPercent
                            currentPercent={this.props.currentPercent}
                            onCurrentPercentChanged={this.props.onCurrentPercentChanged}
                        />
                    </Grid>
                </Grid>
            </FormControl>
        </Container>;
}