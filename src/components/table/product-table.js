import React from 'react'
import ProductTableHead from './product-table-head'
import ProductTableBody from './product-table-body'
import {Paper, Table} from "@material-ui/core";

export default function ProductTable(props) {
    return (
        <Paper style={{'margin': '.5em'}}>
            <Table size="small">
                <ProductTableHead/>
                <ProductTableBody {...props}/>
            </Table>
        </Paper>)
};