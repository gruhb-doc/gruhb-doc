import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { color:'white', paddingTop: '15px', backgroundColor: "#24292E" };
    return (
        <footer style:{divStyle}>
          <Container center aligned>
            <Grid.Row columns={3}>
              <Grid.Column>
                <a>About Us</a>
                <a>Terms & Service</a>
                <a>Contact Us</a>
              </Grid.Column>
              <Grid.Column>
                <a>Vendors</a>
                <a>Suggestions</a>
                <a>Community</a>
              </Grid.Column>
              <Grid.Column>
                <a>GrUHb(2020)©</a>
                <a href="https://github.com/gruhb-doc/gruhb-doc"> Github API</a>
              </Grid.Column>
            </Grid.Row>
          </Container>
        </footer>
    );
  }
}

export default Footer;
