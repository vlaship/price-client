import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Paper} from "@material-ui/core";
import Find from "../find/find";
import ProductTable from "../table/product-table";
import Header from "../header/header";
import {ServiceProvider} from "../service/service-context";

const emptyProducts = [];
const products = [
    {
        vendorCode: '1000.1000.1000',
        productName: 'asda sdfasdf asfas dfas dfas fas  fdsf asfdsad fadf asdf',
        price: 100.11
    }, {
        vendorCode: '2000.2000.2000',
        productName: 'asda sdfasdf asfas dfas dfas fas  fdsf asfdsad fadf asdf',
        price: 200.11
    }, {
        vendorCode: '3000.3000.3000',
        productName: 'asda sdfasdf asfas dfas dfas fas  fdsf asfdsad fadf asdf',
        price: 300.11
    }
];

export default class ProductPage extends React.Component {

    state = {
        currentPercent: 15
    };

    onCurrentPercentChanged = currentPercent => this.setState({currentPercent: currentPercent});

    render = () =>
        <Fragment>
            <Header/>
            <Container maxWidth='xl'>
                <Find
                    currentPercent={this.state.currentPercent}
                    onCurrentPercentChanged={this.onCurrentPercentChanged}
                />
                <ProductTable
                    currentPercent={this.state.currentPercent}
                    products={emptyProducts}
                />
            </Container>
        </Fragment>;
}
//export default withRouter(ProductPage);
