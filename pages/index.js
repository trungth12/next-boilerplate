/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Layout from '../components/layout'
import { withI18next } from '../hocs/withI18next'


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  static async getInitialProps({req}) {
    if (req) {
      // Runs only in the server
      const faker = require('faker')
      const name = faker.name.findName()
      return { name }
    }
  
    // Runs only in the client
    return { name: 'Arunoda' }
  }

  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes, name, t } = this.props;
    const { open } = this.state;

    return (
      <Layout>
        <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>{t('test')}</DialogTitle>
          <p>Welcome, {name}</p>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subheading" gutterBottom>
          example project
        </Typography>
        <Typography gutterBottom>
          <Link href="/about" prefetch>
            <a>Go to the about page</a>
          </Link>
        </Typography>
        <Button variant="contained" color="secondary" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
      </Layout>
    );
  }
}


export default withI18next(['common'])(withStyles(styles)(Index));