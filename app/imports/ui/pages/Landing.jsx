import React from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div id='landing-page'>
          <div className="landing-bg-img"></div>
          <Container className="landing-container">
            <Header as='h2' className="landing-header">GR<span className="landing-header-mid">UH</span>B</Header>
            <div>
              <p className="landing-text">Finding a place to eat on campus made easier than ever.</p>
            </div>
            <div>
              <p className="landing-text">Login or sign up to view the vendors.</p>
            </div>
          </Container>
        </div>
    );
  }
}

export default Landing;
