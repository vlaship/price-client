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
        search: '',
        fetching: false,
        pageNumber: 0,
        pageSize: 20,
        count: 0
    };

    onProductListFetched = (resp) => {
        this.setState({
            fetching: false,
            products: resp.content,
            size: resp.size,
            count: resp.totalElements,
            page: resp.number
        });
    };

    newSearch = search => {
        this.setState({products: [], fetching: true, search: search, page: 0});
        this.searchPage(search, 0);
    };

    onChangePage = (e, page) => {
        this.setState({products: [], fetching: true, page: page});
        this.searchPage(this.state.search, page);
    };

    searchPage = (search, page) => {
        this.props.service.findPageByProductName(search, page)
            .then(this.onProductListFetched);
    };

    renderProductTable = () => {
        if (this.state.products && this.state.products.length > 0) {
            return (
                <ProductTable
                    currentPercent={this.state.currentPercent}
                    products={this.state.products}
                    onChangePage={this.onChangePage}
                    page={this.state.page}
                    count={this.state.count}
                    size={this.state.size}
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
                    search={this.newSearch}
                    currentPercent={this.state.currentPercent}
                    onCurrentPercentChanged={this.onCurrentPercentChanged}
                />
                {this.state.fetching ? <LinearProgress/> : this.renderProductTable()}
            </Container>
        </React.Fragment>;
}

export default withService(ProductPage);
