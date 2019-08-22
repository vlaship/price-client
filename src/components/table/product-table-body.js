import React from 'react'
import ProductTableRow from './product-table-row'
import {TableBody} from "@material-ui/core";

class ProductTableBody extends React.Component {

    renderRow({id, vendorCode, nameProduct: productName, price}) {
        return (
            <ProductTableRow
                key={id}
                currentPercent={this.props.currentPercent}
                vendorCode={vendorCode}
                productName={productName}
                price={price}
            />
        )
    };

    render() {
        return (
            <TableBody>
                {this.props.products.map((item) => (this.renderRow(item)))}
            </TableBody>
        )
    };
}

export default ProductTableBody;