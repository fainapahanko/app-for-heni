import React from 'react';
import {Container} from 'reactstrap';
import MusicList from './MusicList';
let artistNames =  ['Eminem', 'Radiohead']; //can also be in line 14

class HomePage extends React.Component {
    state = {
        artists:  []
    }
        //state = {artist: [{title: "Eminem", artistData: "all the info about the artist, song, album, etc"}, {title: "Radiohed", artistData: "all the info about the artist, song, album, etc"}]}
     
    render() {
        return (
            <Container>
                {this.state.artists.map((m,i) => <MusicList music={m.artistsData} artistName={m.title} key={i} />)}
            </Container>
        );
    }

    componentDidMount = async () => {
        artistNames.forEach(async(artist) => {
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist + "&limit=6",{
                method: "GET",
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "26481b32f0mshd0632c6bc822ba0p1beb06jsne1e5167c63bf"    
                }
            })  
            let artistInfo = await response.json()
            console.log("Info",artistInfo)
            this.setState({
                artists: [...this.state.artists,{
                    artistsData: artistInfo.data,
                    title: artist
                }]
            })
        })
    }
}

export default HomePage;