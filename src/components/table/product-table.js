import React from 'react'
import ProductTableHead from './product-table-head'
import ProductTableBody from './product-table-body'
import {Paper, Table} from "@material-ui/core";
import ProductTableFooter from "./product-table-footer";

export default function ProductTable({count, onChangePage, page, size, currentPercent, products}) {
    return (
        <Paper style={{'margin': '.5em'}}>
            <Table size="small">
                <ProductTableHead/>
                <ProductTableBody
                    currentPercent={currentPercent}
                    products={products}
                />
                <ProductTableFooter
                    count={count}
                    onChangePage={onChangePage}
                    page={page}
                    size={size}
                />
            </Table>
        </Paper>)
};