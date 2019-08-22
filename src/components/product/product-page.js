import React from 'react';
import {Container, LinearProgress} from "@material-ui/core";
import Find from "../find/find";
import ProductTable from "../table/product-table";
import Header from "../header/header";
import withService from "../service/with-service";

class ProductPage extends React.Component {

    state = {
        currentPercent: 15,
        products: [],
        fetching: false
    };

    onProductListFetched = (list) => {
        this.setState({products: list, fetching: false})
    };

    handleSearch = search => {
        this.setState({products: [], fetching: true});
        this.props.service.findAllByProductName(search)
            .then(this.onProductListFetched);
    };

    renderProductTable = () => {
        if (this.state.products.length > 0) {
            return (
                <ProductTable
                    currentPercent={this.state.currentPercent}
                    products={this.state.products}
                />
            )
        }
        return <h1>Ничего</h1>
    };

    onCurrentPercentChanged = currentPercent => this.setState({currentPercent: currentPercent});

    render = () =>
        <React.Fragment>
            <Header/>
            <Container maxWidth='xl'>
                <Find
                    search={this.handleSearch}
                    currentPercent={this.state.currentPercent}
                    onCurrentPercentChanged={this.onCurrentPercentChanged}
                />
                {this.state.fetching ? <LinearProgress/> : this.renderProductTable()}
            </Container>
        </React.Fragment>;
}

export default withService(ProductPage);
