import React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/main'
import LanguageSwitch from '../../components/languageSwitch'
import { withI18next } from '../../hocs/withI18next'
import { connect } from 'react-redux'

const Component = ({classes, t, footers}) =>
  <footer className={classNames(classes.footer, classes.layout)}>
    <Grid container spacing={32} justify="space-evenly">
      <Grid item xs key={`choose_language`}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {t('choose_language')}
      </Typography>      
      <LanguageSwitch />
      </Grid>
      {footers.map(footer => (
        <Grid item xs key={footer.title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {footer.title}
          </Typography>
          {footer.description.map(item => (
            <Typography key={item} variant="subtitle1" color="textSecondary">
              {item}
            </Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  </footer>

const mapStateToProps = (state) => {
  return {
    footers: state.footers,
  }
}  

export default connect(mapStateToProps, null)(
  withI18next(['common'])(withStyles(styles)(Component))
)