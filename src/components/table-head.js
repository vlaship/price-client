import React from 'react'

class TableHead extends React.Component {

    render = () =>
        <thead>
            <tr>
                <th>Артикул</th>
                <th>Продукт</th>
                <th>Цена</th>
                <th>-23%</th>
                <th>Расчетная</th>
            </tr>
        </thead>;
}
export default TableHead;