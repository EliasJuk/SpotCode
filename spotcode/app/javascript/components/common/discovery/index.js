import React, { Fragment } from 'react';
import Album from '../album';
import styled from 'styled-components';
import { Columns, Heading } from 'react-bulma-components';

const DivVSpaced = styled.div`
  margin-top: 50px;
`

const Discovery = () => {
  const albums_mock = [
    { id: 1, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdZXheIjpudWxsLCJwdXIioiJibG9iX21kIn19--2f248b465e87a8800d0362b55a3b16g9d7173888/gubernator.jpg'},
    { id: 2, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdZXheIjpudWxsLCJwdXIioiJibG9iX21kIn19--2f248b465e87a8800d0362b55a3b16g9d7173888/gubernator.jpg'},
    { id: 3, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdZXheIjpudWxsLCJwdXIioiJibG9iX21kIn19--2f248b465e87a8800d0362b55a3b16g9d7173888/gubernator.jpg'},
    { id: 4, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdZXheIjpudWxsLCJwdXIioiJibG9iX21kIn19--2f248b465e87a8800d0362b55a3b16g9d7173888/gubernator.jpg'},
  ]

  const albums = albums_mock.map((album, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id} />
    </Columns.Column>
  );

  return (
    <Fragment>
      <div>
        <Heading className='has-text-white' size={4}>
          Tocadas recentemente
        </Heading>
        <Columns className='is-mobile'>
          {albums}
        </Columns>
      </div>

      <DivVSpaced>
        <Heading className='has-text-white' size={4}>
          Recomemdadas
        </Heading>
        <Columns className='is-mobile'>
          {albums}
        </Columns>
      </DivVSpaced>
    </Fragment>
  );
}

export default Discovery;