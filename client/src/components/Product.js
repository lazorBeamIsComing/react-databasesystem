import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Product extends React.Component {
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.pid}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.pname}</TableCell>
                <TableCell>{this.props.spicy}</TableCell>
                <TableCell>{this.props.mainable}</TableCell>
                <TableCell>{this.props.price}</TableCell>
            </TableRow>
        
        )
    }
}


export default Product;