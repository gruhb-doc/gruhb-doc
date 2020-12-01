import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class HomeScreen extends React.Component {
  render() {
    return (
        <div>
          <div className="landing-bg-img"></div>
          <Container className="landing-container">
            <Header as='h2' className="landing-header">GR<span className="landing-header-mid">UH</span>B</Header>
            <div>
              <p className="landing-text">It is time to find your Gruhb.</p>
            </div>
            <div>
              <p className="landing-text">Login or sign up to view the vendors.</p>
            </div>
          </Container>

          <Grid className="landing-grid" columns={3} >
            <Grid.Row>
              <Grid.Column >
                <Image className="landing-bottom-image" src='https://www.frolichawaii.com/sites/default/files/field/image/sistah%20truck.JPG'fluid/>
              </Grid.Column>
              <Grid.Column className="landing-grid-background">
                <Header className="landing-grid-text" as='h1' inverted>About us.</Header>
              </Grid.Column>
              <Grid.Column >
                <Image className="landing-bottom-image" src='https://s3.amazonaws.com/spoonuniversi-wpengine/spoonuniversi/wp-content/uploads/sites/229/2016/03/ChickenKatsu_TOKOExpress-1024x681.jpg'fluid/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column className="landing-grid-background">
                <Header className="landing-grid-text" as='h1' inverted>Placeholder</Header>
              </Grid.Column>
              <Grid.Column >
                <Image className="landing-bottom-image" src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fchristopherelliott%2Ffiles%2F2019%2F01%2Fgrabandgo-1200x900.jpg'fluid/>
              </Grid.Column>
              <Grid.Column className="landing-grid-background">
                <Header className="landing-grid-text" as='h1' inverted>Placeholder</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default HomeScreen;
