import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
    root: {
        flexGrow: 1,
    },
};

function LinearIndeterminate(props) {
    const { classes } = props;
    return (
        <div className={classes.root} style={{
            marginTop: '32%'}}>
            <LinearProgress />
            <br />
        </div>
    );
}

LinearIndeterminate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearIndeterminate);