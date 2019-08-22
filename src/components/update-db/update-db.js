import React from "react";
import {Button, LinearProgress} from "@material-ui/core";
import withService from "../service/with-service";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const questionMessage = 'Обновить базу цен?';
const updatingMessage = 'Обновление ...';
const updatedMessage = 'Обновление завершено';
const progressLine = <LinearProgress/>;

class Update extends React.Component {

    state = {
        lastUpdate: 'НИКОГДА',
        isOpenDialog: false,
        isQuestion: true,
        isUpdating: false,
        isUpdated: false,
        errorStatus: null,
        errorStatusText: null
    };

    handleGetLastUpdate = () => this.props.service.getLastUpdate().then(value => this.setState({lastUpdate: value}));

    componentDidMount() {
        this.handleGetLastUpdate();
    }

    onClickUpdate = () => {
        this.setState({
            isOpenDialog: true,
            isQuestion: true,
            isUpdating: false,
            isUpdated: false
        })
    };

    onClickYesOnDialog = () => {
        this.setState({
            isQuestion: false,
            isUpdating: true
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isUpdating !== this.state.isUpdating && this.state.isUpdating) {
            this.handleUpdate();
        }
    }

    handleUpdate = () => {
        this.setState({lastUpdate: '-'});
        this.props.service.update()
            .then(() => {
                    this.handleGetLastUpdate();
                    this.setState({
                        isUpdating: false,
                        isUpdated: true
                    });
                }
            )
    };

    renderYesNoButtons = () =>
        <React.Fragment>
            <Button onClick={this.onClickYesOnDialog} color="primary" disabled={this.state.isUpdating}>
                Yes
            </Button>
            <Button onClick={this.handleCloseDialog} color="primary" disabled={this.state.isUpdating}>
                No
            </Button>
        </React.Fragment>;

    renderOkButton = () =>
        <Button onClick={this.handleCloseDialog} color="primary" disabled={this.state.isUpdating}>
            Ok
        </Button>;

    handleCloseDialog = () => this.setState({isOpenDialog: false});

    renderDialog = () =>
        <Dialog
            open={this.state.isOpenDialog}
        >
            <DialogTitle id="responsive-dialog-title">
                {this.state.isUpdating ? updatingMessage : null}
                {this.state.isUpdated ? updatedMessage : null}
                {this.state.isQuestion ? questionMessage : null}
            </DialogTitle>
            <DialogContent>
                {this.state.isUpdating ? progressLine : null}
            </DialogContent>
            <DialogActions>
                {this.state.isUpdated ? this.renderOkButton() : null}
                {this.state.isQuestion ? this.renderYesNoButtons() : null}
            </DialogActions>
        </Dialog>;

    render() {
        return (
            <React.Fragment>
                {this.renderDialog()}
                <Button
                    variant="contained" color="secondary"
                    onClick={this.onClickUpdate}
                >
                    Обновить ({this.state.lastUpdate})
                </Button>
            </React.Fragment>
        )
    };
}

export default withService(Update)