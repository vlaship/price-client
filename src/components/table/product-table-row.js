import React, {Fragment} from 'react'
import {TableCell, TableRow} from "@material-ui/core";

class ProductTableRow extends React.Component {

    state = {
        ourPercent: 23,
        currentPercent: this.props.currentPercent,
        ndsPercent: 18
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentPercent !== this.props.currentPercent) {
            this.setState({currentPercent: this.props.currentPercent});
        }
    }

    ourPrice = (recommendedPrice) => {
        return this.number(recommendedPrice * (100 - this.state.ourPercent) / 100);
    };

    calcPrice = (ourPrice) => {
        return this.number(ourPrice + ourPrice * this.state.currentPercent / 100);
    };

    calcNDS = (calcPrice) => {
        return this.number(calcPrice * this.state.ndsPercent / 100);
    };

    number = number => {
        const num = Number(number);
        const round = num.toFixed(2);
        return Number(round);
    };

    render() {

        const {urlSearch = 'http://pila.by/', vendorCode, productName, price} = this.props;

        const recommendedPrice = this.number(price);
        const ourPrice = this.ourPrice(price);
        const calcPrice = this.calcPrice(ourPrice);
        const nds = this.calcNDS(calcPrice);
        const url = urlSearch + vendorCode;

        return (
            <Fragment>
                <TableRow hover={true}>
                    <TableCell align='center'>
                        <a href={url} target="_blank">
                            {vendorCode}
                        </a>
                    </TableCell>
                    <TableCell align='left'>
                        {productName}
                    </TableCell>
                    <TableCell align='right'>
                        {recommendedPrice}
                    </TableCell>
                    <TableCell align='right'>
                        {ourPrice}
                    </TableCell>
                    <TableCell align='right'>
                        {calcPrice}/
                        <small>
                            {nds}
                        </small>
                    </TableCell>
                </TableRow>
            </Fragment>
        )
    };
}

export default ProductTableRow