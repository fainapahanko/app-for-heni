import React from 'react';
import {Row} from 'reactstrap'
import SinglePoster from './SinglePoster'

const MusicList = props => {
  return (
    <>
    <h2>{props.artistName}</h2>
    <Row>
      {props.music.map((m,i) => <SinglePoster music={m} key={i} />)}
    </Row>
    </>
  );
}

//props.music i have an array of object with all the info about the artist, song, etc and I'm going through it one more time to show te specifc one

export default MusicList;