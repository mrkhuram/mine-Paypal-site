import React, { Component } from 'react'
import './wallet.css'
import HeaderOf from '../Header'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};


class Wallet extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <HeaderOf />
                <div className="walletOuter">
                    <div className="row">
                        <div className=" balanceDetail">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5" size={10} gutterBottom>
                                        Paypal Balance
                                    </Typography>
                                    
                                    <Typography className={classes.pos} color="textSecondary">
                                    No balance needed to shop or send money
                                    </Typography>
                                    <Typography component="h5">
                                        <Link to="#" color='primary'>
                                        Add Money
                                        </Link>
                                    </Typography>
                                    <Typography component="h5">
                                        <Link to="#" color='primary'>
                                        Transfer to your Bank.
                                        </Link>
                                    </Typography>
                                </CardContent>
                                
                            </Card>

                        </div>
                        <div className="bankBtn">

                        <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5" size={10} gutterBottom>
                                        Add Bank
                                    </Typography>
                                    <br/>
                                    <Typography component="h5">
                                        <Link to="#" color='primary'>
                                        Click To Add
                                        </Link>
                                    </Typography>
                                    <br/>


                                </CardContent>
                                
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Wallet.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Wallet);