import React from 'react';
import { Container, Card } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class AboutUs extends React.Component {
  render() {
    return (
        <div>
          <div className="aboutus-bg-img"></div>
          <div className="aboutus-sizedbox"></div>
          <div className="aboutus-div">
              <Container className="aboutus-container">
                <Card.Group itemsPerRow={3}>
                  <Card fluid>
                    <Card.Content>
                      <Card.Header>Jackie Wong</Card.Header>
                      <Card.Description>
                        I am currently enrolled in his third year at the University of Hawaii at Manoa and pursuing a Bachelor of Science in
                        Computer Science.
                        I plan to get into software development or engineering, and full-stack web development.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a href="https://jackiewong99.github.io/"> You can learn more about me here!</a>
                    </Card.Content>
                  </Card>
                  <Card fluid>
                    <Card.Content>
                      <Card.Header>Samuel Han</Card.Header>
                      <Card.Description>
                        I am currently in my senior year at the University of Hawaii at Manoa and am double majoring in Biology and Computer
                         Science.
                        I am planning on getting into mobile development. You can learn more about me here!
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a href="https://samuelcy.github.io/"> You can learn more about me here!</a>
                    </Card.Content>
                  </Card>
                  <Card fluid>
                    <Card.Content>
                      <Card.Header>Adrian Tam</Card.Header>
                      <Card.Description>
                        I am currently enrolled at the University of Hawaii at Manoa and am majoring in Computer Science. You can learn more about me here!
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a href="https://adrianwtam.github.io/"> You can learn more about me here!</a>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Container>
          </div>
       </div>
    );
  }
}

export default AboutUs;
