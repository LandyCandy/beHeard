import React from "react";
import { connect } from 'react-redux';
import styles from "./style.css";

//components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

//actions
import { getRepsByZip } from 'actions/reps';
import { updateZip } from 'actions/uiActions';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const pageStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    paddingTop: '2em' 
  },
  h2: {
    color: '#566573',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  footer: {
    color: '#566573',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    marginLeft: '25%'
  }
};

class HomePage extends React.Component {
    _handleZipSubmit(e) {
        const {zip, getRepsByZip} = this.props;
        zip && getRepsByZip(zip);
    }

    _handleZipChange(e) {
        this.props.updateZip(e.target.value);
    }

	render() {
		return (
            <div style={pageStyles.root}>
                <AppBar
                    title="Be Heard"
                    showMenuIconButton={false}
                >
                </AppBar>  
                <GridList
                    cols={2}
                    cellHeight={'auto'}
                    padding={1}
                    style={pageStyles.gridList}
                >
                    <GridTile
                        cols={2}
                        rows={1}
                    >
                        <h2
                            style={pageStyles.h2}
                        >
                            FIND YOUR CONGRESSIONAL REPRESENTATIVES AND LET YOURSELF BE HEARD
                        </h2>
                    </GridTile>
                    <GridTile
                      cols={2}
                      rows={1}
                    >
                        <TextField
                            floatingLabelText="ZIP Code"
                            value={this.props.zip}
                            onChange={this._handleZipChange}
                            fullWidth={true}
                        />
                    </GridTile>
                    <GridTile
                      cols={2}
                      rows={1}
                    >
                        <RaisedButton
                            onChange={this._handleZipSubmit}
                            label="Find Your Reps"
                            primary={true}                            
                            fullWidth={true}
                             />
                    </GridTile>
                </GridList>
                <footer style={pageStyles.footer}>Inspired By: ></footer>
            </div>
		);
	}
};

function mapStateToProps(state) {
	return {
        zip: state.uiState.zip
	}
}

export default connect(
    mapStateToProps,
    { getRepsByZip, updateZip }
)(HomePage);
