import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';

const DivVSpaced = styled.div`
  marging-top: 20px;
  margin-bottom: 20px;
`

const Albums = () => {
  return(
    <Fragment>
      <Columns>
        <Columns.Column>
          <Image src='' />
          <DivVSpaced>
            <Heading>Título</Heading>
            <Heading>SubTitulo</Heading>
          </DivVSpaced>
        </Columns.Column>
      </Columns>   
    </Fragment>
  );
}

export default Albums;