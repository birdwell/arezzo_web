import React, { Component } from 'react';
import Modal from 'react-modal';

import CreateTile from './CreateTile';

class Home extends Component {
	state = {
		modalIsOpen: false,
	}

	openModal = () => {
		this.setState({ modalIsOpen: true });
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	}

	render() {
		const { modalIsOpen } = this.state;
		return (
			<div>
				Home
				<button className="open-modal" onClick={this.openModal}>Create Content</button>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={this.closeModal}
					contentLabel="create-item"
				>
					<button className="close-modal-button" onClick={this.closeModal}>close</button>
					<CreateTile label="Events" path="/events/create" />
					<CreateTile label="Food" path="/food/create" />
					<CreateTile label="Outdoors" path="/outdoors/create" />
					<CreateTile label="Shopping" path="/shopping/create" />
					<CreateTile label="Sights" path="/sights/create" />
				</Modal>
			</div>
		);
	}
}

export default Home;
