import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { color: 'white', paddingTop: '15px', backgroundColor: '#24292E' };
    return (
        <div style={divStyle}>
          <Container center aligned inverted>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Grid.Item>About Us</Grid.Item>
                <Grid.Item>Terms of Service</Grid.Item>
                <Grid.Item>Contact Us</Grid.Item>
              </Grid.Column>
              <Grid.Column>
                <Grid.Item>Vendors</Grid.Item>
                <Grid.Item>Suggestions</Grid.Item>
                <Grid.Item>Community</Grid.Item>
              </Grid.Column>
              <Grid.Column>
                <Grid.Item>GrUHb(2020)©</Grid.Item>
                <Grid.Item href="https://github.com/gruhb-doc/gruhb-doc">Github API</Grid.Item>
              </Grid.Column>
            </Grid.Row>
          </Container>
        </div>
    );
  }
}

export default Footer;
