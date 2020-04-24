import React, { Fragment } from 'react';
import { Navbar, Container, Columns } from 'react-bulma-components'

const NavbarFooter = () => {
  return(
    <Fragment>
      <Navbar fixed='bottom' color='dark'>
        <Container>
          <ColumnsCustom className='is-mobile is-vcentered'>
              <Columns.Column className='has-text-centered'>

              </Columns.Column>
              <Columns.Column className='has-text-centered'>
                        
              </Columns.Column>
              <Columns.Column className='has-text-centered'>
                        
              </Columns.Column>
          </ColumnsCustom>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavbarFooter;