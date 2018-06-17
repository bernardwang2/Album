import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	componentWillMount(){
		state = { albums: [] };

		fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => response.json())
		.then(data => this.setState({ albums: data }));
	}

	renderAlbums(){
		if(this.state){
			return this.state.albums.map(album => 
				<AlbumDetail key={album.title} album ={album}/> 
			);
		}
		else{
			return <View><Text>Is loading</Text></View>;
		}
	}

	render() {
		//console.log(this.state);

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;