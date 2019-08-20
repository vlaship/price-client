import React from 'react'
import TableHead from './table-head'
import TableBody from './table-body'

class Table extends React.Component {

    render = () =>
            <table>
                <TableHead />
                <TableBody />
            </table>;

}
export default Table;