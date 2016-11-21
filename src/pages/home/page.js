import React from "react";
import { connect } from 'react-redux';
import styles from "./style.css";

//components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
    justifyContent: 'space-around',
    height:'100%'
  },
  gridList: {
    width: 500,
    height: '100%'
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
                            className='header'
                        >
                            Find your Congress representative and let yourself be heard
                        </h2>
                    </GridTile>
                    <GridTile
                      cols={2}
                      rows={1}
                    >
                        <TextField
                            floatingLabelText="ZIP Code"
                            floatingLabelStyle='zip'
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
