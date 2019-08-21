import React, {Fragment} from 'react';
import {Container} from "@material-ui/core";
import Find from "../find/find";
import ProductTable from "../table/product-table";
import Header from "../header/header";
import withService from "../service/with-service";

class ProductPage extends React.Component {

    state = {
        currentPercent: 15,
        products: []
    };

    handleSearch = search => {
        // const list = this.props.service.findAll(search);
        this.props.service.findAllByProductName(search)
            .then((list) => this.setState({products: list}));
    };

    onCurrentPercentChanged = currentPercent => this.setState({currentPercent: currentPercent});

    render = () =>
        <Fragment>
            <Header/>
            <Container maxWidth='xl'>
                <Find
                    search={this.handleSearch}
                    currentPercent={this.state.currentPercent}
                    onCurrentPercentChanged={this.onCurrentPercentChanged}
                />
                <ProductTable
                    currentPercent={this.state.currentPercent}
                    products={this.state.products}
                />
            </Container>
        </Fragment>;
}

export default withService(ProductPage);
