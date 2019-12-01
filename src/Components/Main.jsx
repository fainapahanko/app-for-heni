import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import TopNav from './TopNav';
import HomePage from './HomePage';
import ArtistPage from './ArtistPage';
import AlbumPage from './AlbumPage';
import Footer from './Footer';



class Main extends React.Component {
    // state = {
    //     searchString: '',
    //     artists: [],
    //     albums: []
    // }
    
    // searchString = ev => {
    //     this.setState({
    //       searchString: ev.target.value.toLowerCase()
    //     });
    //   };

    //   searchArtists = async () => {
    //     let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.state.searchString);
    //     let artistResult = await response.json();
    //     this.setState({artists: artistResult.Search}, () => console.log(this.state))
    //   }

    //   searchAlbums = async () => {
    //     let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.state.searchString);
    //     let albumResult = await response.json();
    //     this.setState({albums: albumResult.Search}, () => console.log(this.state))
    //   }
    render() {
        return (
            <Router>
                <TopNav />
                <Container>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/artist-page:artistId" component={ArtistPage} />
                    <Route path="/album-page:albumId" component={AlbumPage} />
                </Container>
                <Footer />
            </Router>
        );
    }
}
                // searchArtists={this.searchArtists}
                // searchAlbums={this.searchAlbums}
                // saveSearchString={this.searchString}
                // searchValue={this.state.searchString}}

export default Main;