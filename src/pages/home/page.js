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

class HomePage extends React.Component {
    _handleZipSubmit(e) {
        const {zip, getRepsByZip} = this.props;
        zip && getRepsByZip(zip);
    }

    _handleZipChange(e) {
        this.props.updateZip(e.target.value);
    }

    _renderContactCards() {
        return <ContactCards contacts={repsContactInfos} />
    }

	render() {
		return (
            <div>
                <h2>Find your Congress representative and let yourself be heard</h2>
                <TextField
                    floatingLabelText="ZIP Code"
                    value={this.props.zip}
                    onChange={this._handleZipChange}
                />
                <RaisedButton
                    onChange={this._handleZipSubmit}
                    label="Find Your Reps"
                    primary={true} />
                {this._renderContactCards()}
            </div>
		);
	}
};

function mapStateToProps(state) {
	return {
        zip: state.uiState.zip,
        repsContactInfos: state.reps.contactInfos
	}
}

export default connect(
    mapStateToProps,
    { getRepsByZip, updateZip }
)(HomePage);
