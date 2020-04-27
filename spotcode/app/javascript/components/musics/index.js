import React, { Fragment, useState, useEffect} from 'react';
import styled from 'styled-components';
import Music from './music';
import { Columns, Button } from 'react-bulma-components';


const PlayerSequenceButton = styled(Button)`
    margin-bottom: 30px;
`

const Musics = (props) => {
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState([]);

  useEffect(() => {
    setSongs(props.songs.map((song, key) =>
      <Music
        song={song}
        playing={playing.id == song.id}
        setPlaying={setPlaying}
        key={key}
    />
  ));

}, [props.songs, playing]);

  return (
    <Fragment>
      <Columns className='is-mobile is-centered'>
        <Columns.Column desktop={{ size: 3 }} mobile={{ size: 12 }} 
          className='has-text-centered'>
            <PlayerSequenceButton 
              className='is-medium'
              color='primary' 
              outlined
            >
              Tocar aleatoriamente
            </PlayerSequenceButton>
        </Columns.Column>
      </Columns>
      {songs}
    </Fragment>
  );
}

export default Musics;