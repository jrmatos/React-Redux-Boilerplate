import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions';

class UserList extends Component {

	createListItens() {
		return this.props.users.map(user => {
			return (
				<li 
					key={user.id}
					onClick={() => this.props.selectUser(user)}>
					{user.first} {user.last}
				</li>
			);
		});
	}

	render() {
		return (
			<ul>
				{this.createListItens()}
			</ul>
		);
	}

}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

function natchDispatchToProps (dispatch) {
	return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, natchDispatchToProps)(UserList);