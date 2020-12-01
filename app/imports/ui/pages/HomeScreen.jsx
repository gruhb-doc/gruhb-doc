import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Grid, Header, Image, Loader, } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';
import StuffItem from '../components/StuffItem';


/** A simple static component to render some text for the landing page. */
class HomeScreen extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div>
          <div className="landing-bg-img">
          {/*<Container className="landing-container">*/}
          {/*  <Header as='h2' className="landing-header">GR<span className="landing-header-mid">UH</span>B</Header>*/}
          {/*  <div>*/}
          {/*    <p className="landing-text">It is time to find your Gruhb.</p>*/}
          {/*  </div>*/}
          {/*</Container>*/}
          <Container className="landing-card-container">
            <Header as="h2" textAlign="center" inverted>Vendor</Header>
            <Card.Group itemsPerRow={3}>
              {this.props.stuffs.map((stuff) => <StuffItem key={stuff._id} stuff={stuff} />)}
            </Card.Group>
          </Container>
        </div>

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

// export default HomeScreen;

/** Require an array of Stuff documents in the props. */
HomeScreen.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.userPublicationName);
  return {
    stuffs: Stuffs.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(HomeScreen);
