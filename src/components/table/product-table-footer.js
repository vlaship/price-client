import React from "react";
import {TableFooter} from "@material-ui/core";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";

export default function ProductTableFooter(props) {
    return (
        <TableFooter>
            <TablePaginationActions count={props.count}
                                    onChangePage={props.onChangePage}
                                    page={props.page}
                                    rowsPerPage={props.size}/>
        </TableFooter>);
}