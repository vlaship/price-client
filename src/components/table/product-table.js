import React from 'react'
import ProductTableHead from './product-table-head'
import ProductTableBody from './product-table-body'
import {Paper, Table} from "@material-ui/core";

class ProductTable extends React.Component {

    render() {
        if (this.props.products && this.props.products.length > 0) {
            return (
                <Paper style={{'margin': '.5em'}}>
                    <Table>
                        <ProductTableHead/>
                        <ProductTableBody
                            currentPercent={this.props.currentPercent}
                            products={this.props.products}
                        />
                    </Table>
                </Paper>)
        }
        return (<h1>Пусто</h1>);
    }
}

export default ProductTable;