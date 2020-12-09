import React from 'react';
import { Container, Grid, Menu } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { color: 'white', paddingTop: '15px', backgroundColor: '#1B1C1D'};
    return (
          <div style={divStyle}>
            <Container>
              <Grid centered>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Menu.Item>About Us</Menu.Item>
                    <Menu.Item>Terms of Service</Menu.Item>
                    <Menu.Item>Contact Us</Menu.Item>
                  </Grid.Column>
                  <Grid.Column>
                    <Menu.Item>Feeling Lucky?</Menu.Item>
                    <Menu.Item>Suggestions</Menu.Item>
                    <Menu.Item>Community</Menu.Item>
                  </Grid.Column>
                  <Grid.Column>
                    <Menu.Item>GRUHB (2020)©</Menu.Item>
                    <Menu.Item href="https://github.com/gruhb-doc/gruhb-doc">Github API</Menu.Item>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
    );
  }
}

export default Footer;
