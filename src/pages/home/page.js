import React from "react";
import { connect } from 'react-redux';
import styles from "./style.css";

//components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ContactCards from 'common/components/ContactCards';

//actions
import {getRepsByZip} from 'actions/reps';
import {updateZip} from 'actions/uiActions';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const spreadSheet = 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview';

const pageStyles = {
  root: {
    justifyContent: 'space-around',
    minHeight: '100%',
    position: 'relative'
  },
  header: {
    height: '4em'
  },
  gridList: {
    width: 500,
    paddingTop: '5em',
    paddingBottom: '2em',
    margin: '0 auto'
  },
  h2: {
    color: '#566573',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  divFoot:{
    position: 'absolute',
    bottom: '1em',
    width: '100%',
  },
  footer: {
    color: '#566573',
    height: '1em',
    textAlign: 'center'
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

    _renderContactCards() {
        const {contactInfo} = this.props;
        return <ContactCards contacts={contactInfo} />
      }

	render() {
		return (
            <div style={pageStyles.root}>
                <div style={pageStyles.header}>
                    <AppBar
                        title="Be Heard"
                        showMenuIconButton={false}
                    >
                    </AppBar>
                </div>
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
                                onChange={::this._handleZipChange}
                                fullWidth={true}
                            />
                        </GridTile>
                        <GridTile
                          cols={2}
                          rows={1}
                        >
                            <RaisedButton
                                onClick={::this._handleZipSubmit}
                                label="Find Your Reps"
                                primary={true}
                                fullWidth={true}
                                 />
                        </GridTile>
                        {this._renderContactCards()}
                    </GridList>

                <div style={pageStyles.divFoot}>
                    <footer style={pageStyles.footer}>
                        Inspired by the <a href={spreadSheet}>"&#147;We&#146;re His Problem Now&#148; Call Sheet"</a>
                    </footer>
                </div>
            </div>
		);
	}
};

function mapStateToProps(state) {
	return {
        zip: state.uiState.zip,
        contactInfo: state.reps.contactInfo
	}
}

export default connect(
    mapStateToProps,
    { getRepsByZip, updateZip }
)(HomePage);
