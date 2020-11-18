import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', backgroundColor: "#24292E" };
    return (
        <footer color:'white' style:{divStyle}>
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
                <a>Made by [change this in imports/ui/components/Footer.jsx]</a>
                <a href="https://github.com/gruhb-doc/gruhb-doc"> Github API</a>
              </Grid.Column>
            </Grid.Row>
          </Container>
        </footer>
    );
  }
}

export default Footer;
