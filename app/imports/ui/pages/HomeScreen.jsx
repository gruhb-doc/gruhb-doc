import React from 'react';
import { Container, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class HomeScreen extends React.Component {
  render() {
    return (
        <div>
          <div className="landing-bg-img"></div>
          <Container className="landing-container">
            <Header as='h2' className="landing-header">GR<span className="landing-header-mid">UH</span>B</Header>
            <div>
              <p className="landing-text">HomeScreen.</p>
            </div>
            <div>
              <p className="landing-text">Login or sign up to view the vendors.</p>
            </div>
          </Container>
        </div>
    );
  }
}

export default HomeScreen;
