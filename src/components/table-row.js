import React from 'react'

class TableRow extends React.Component {

    ourPrice = (recomendedPrice) => {
        return recomendedPrice * 0.77;
    }

    calcPrice = (ourPrice) => {
        return ourPrice * this.props.percent;
    }

    calcNDS = (calcPrice) => {
        return calcPrice * 0.18;
    }

    render() {

        const { urlSearch, vendorCode, productName, recomendedPrice } = this.props;
        const ourPrice = this.ourPrice(recomendedPrice);
        const calcPrice = this.calcPrice(ourPrice);
        const nds = this.calcNDS(calcPrice);

        return (
            <tr>
                <td>
                    <a href={urlSearch + vendorCode} target="_blank">
                        {vendorCode}
                    </a>
                </td>
                <td>
                    {productName}
                </td>
                <td>
                        {recomendedPrice}
                </td>
                <td>
                    {ourPrice}
                </td>
                <td>
                    {calcPrice}
                    <small>
                        {nds}
                    </small>
                </td>
            </tr>
        )
    };

}
export default TableRow