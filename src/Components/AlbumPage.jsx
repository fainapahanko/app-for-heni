import React from 'react';

class AlbumPage extends React.Component {
    state={
        album: ''
    }
    render() {
        return (
            <>
            <h1>Lol</h1>
            <p>{this.state.artistName}</p>
            <span>{this.state.artistTitle}</span>
            <img src={this.state.cover} alt=""/>
            </>
        );
    }
    componentDidMount = async() => {
        let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + this.props.match.params.albumId,{
            method: "GET",
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "26481b32f0mshd0632c6bc822ba0p1beb06jsne1e5167c63bf"    
            }
        })
        let newAlbum = await response.json()
        console.log(newAlbum)
        this.setState({
            cover: newAlbum.cover_medium,
            artistName: newAlbum.artist.name,
            artistTitle: newAlbum.title
        })
    }
}

export default AlbumPage;