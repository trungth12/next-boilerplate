import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/main'
import Link from 'next/link'
import { withI18next } from '../../hocs/withI18next'

const Component = ({classes, t}) => 
  <AppBar position="static" color="default" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap className={classes.toolbarTitle}>
        <Link href={`/`}>
          <a style={{
            textDecoration: 'none',
            color: 'black'
          }}>
            TF
          </a>
        </Link>
      </Typography>
      <Button>
        <Link href={`/dashboard`}>
          <a className={classes.appBarLink}>
            {t('dashboard_menu')}
          </a>
        </Link>
      </Button>
      <Button>
        <Link href={`/about`}>
          <a className={classes.appBarLink}>
            {t('about_menu')}
          </a>
        </Link>
      </Button>
      <Button>
        <Link href={`/pricing`}>
          <a className={classes.appBarLink}>
            {t('pricing_menu')}
          </a>
        </Link>
      </Button>
      <Button color="primary" variant="outlined">
        Login
      </Button>
    </Toolbar>
  </AppBar>

export default withI18next(['common'])(withStyles(styles)(Component));