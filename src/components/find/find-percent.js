import React from "react";
import {Button, ButtonGroup, Grid, TextField} from "@material-ui/core";

export default class FindPercent extends React.Component {

    state = {
        percent: this.props.currentPercent
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.percent !== this.state.percent) {
            this.props.onCurrentPercentChanged(this.state.percent);
        }
    }

    onPercentChange = event => this.handleUpdatePercent(event.target.value === '' ? 0 : Number(event.target.value));

    handleUpdatePercent = percent => {
        if (1000 > percent && percent >= 0) {
            this.setState({percent: percent});
        }
    };

    onClickPlus = () => this.setState(({percent}) => {
        this.handleUpdatePercent(percent + 1);
    });

    onClickMinus = () => this.setState(({percent}) => {
        if (percent > 0) this.setState({percent: percent - 1})
    });

    render = () =>
        <Grid container spacing={2}>
            <Grid item xs>
                <TextField
                    type='number'
                    margin='dense'
                    placeholder='процент'
                    label='Процент'
                    variant='outlined'
                    onChange={this.onPercentChange}
                    value={this.state.percent}
                />
            </Grid>
            <Grid item xs>
                <ButtonGroup size="small"
                             style={{"marginTop": "0.7em"}}
                             variant="contained"
                >
                    <Button onClick={this.onClickPlus}>+</Button>
                    <Button onClick={this.onClickMinus}>-</Button>
                </ButtonGroup>
            </Grid>
        </Grid>;

}