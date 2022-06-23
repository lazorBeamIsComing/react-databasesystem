import React, {Component} from 'react';
import './App.css';
import Product from './components/Product.js';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles} from '@material-ui/core/styles';

/*
LIFE CYCLE

1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount()
*/
/*

props or state => shouldcomponentUpdate()

*/


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  },
  profress: {
    margin: theme.spacing.unit * 2
  }
});




class App extends Component {

  state = {
    customers: "",
    completed: 0
  }
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }
  
  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  
  progress = () => {
    const { completed } = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 1});
  }

  render(){
    const{classes} = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>제품사진</TableCell>
              <TableCell>제품명</TableCell>
              <TableCell>매움</TableCell>
              <TableCell>주메뉴가능</TableCell>
              <TableCell>asdf</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.customers ? this.state.customers.map(c=>{ 
              return (<Product key={c.pid} pid={c.pid} image={c.image} pname={c.pname} spicy={c.spicy} mainable={c.mainable} price={c.price}/>)
            }) : 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
