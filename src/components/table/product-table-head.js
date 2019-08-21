import React from 'react'
import {TableCell, TableHead, TableRow} from "@material-ui/core";

class ProductTableHead extends React.Component {

    render = () =>
        <TableHead>
            <TableRow>
                <TableCell align='center'>Артикул</TableCell>
                <TableCell align='left'>Продукт</TableCell>
                <TableCell align='right'>Цена</TableCell>
                <TableCell align='right'>-23%</TableCell>
                <TableCell align='right'>Расчетная</TableCell>
            </TableRow>
        </TableHead>;
}

export default ProductTableHead;