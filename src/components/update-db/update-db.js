import React from "react";
import {Button} from "@material-ui/core";
import withService from "../service/with-service";

class Update extends React.Component {

    state = {
        lastUpdate: 'НИКОГДА'
    };

    componentDidMount() {
        this.props.service.getLastUpdate()
            .then((value => this.setState({lastUpdate: value.lastUpdate})));
    }

    onClickUpdate = () => {
        this.props.service.update()
            .then()
    };

    render = () =>
        <Button
            variant="contained" color="secondary"
            onClick={this.onClickUpdate}
        >
            Обновить ({this.state.lastUpdate})
        </Button>;
}

export default withService(Update)