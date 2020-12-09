import React from 'react';
import { Container, Divider, Grid, Header, Image, List, Loader, Segment } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendor/Vendor';

/** Renders the Page for editing a single document. */
class Vendor extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Preparing the vendor!</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <div className="vendor-container">
          {/* VENDOR IMAGE BANNER */}
          <Image src={this.props.doc.photo} fluid />

          {/* VENDOR PAGE CONTENT */}
          <Container textAlign='justified'>
            <b className="vendor-header">{this.props.doc.name}</b>
            <p>{this.props.doc.cuisine}</p>
            <div className="vendor-address">
              <b>
                {this.props.doc.address}
              </b>
            </div>
            <div className="vendor-address">
              <b>
                {this.props.doc.campusLocation}
              </b>
            </div>
            <Divider />
            <p className="vendor-desc">
              {this.props.doc.description}
            </p>
            <p className="vendor-stat"><b>Rating: </b><span className="vendor-stat-val">{this.props.doc.rating} / 5</span></p>
            <p className="vendor-stat"><b>Cost: </b><span className="vendor-stat-val">{this.props.doc.cost}</span></p>
            <Divider />

            {/* VENDOR HOURS */}
            <div>
              <Header as='h2'>Hours</Header>
              <Grid stackable columns={2}>
                <Grid.Column>
                  <Segment>
                    <List>
                      <List.Item className="vendor-hours">
                        <List.Header as='h4'>Monday to Friday</List.Header>
                        <p>{this.props.doc.hours.monToFri}</p>
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <List>
                      <List.Item className="vendor-hours">
                        <List.Header as='h4'>Saturday to Sunday</List.Header>
                        <p>{this.props.doc.hours.satToSun}</p>
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
              </Grid>
            </div>
            <Divider />

            {/* VENDOR AMENITIES */}
            <div className="vendor-amenities-header">
              <Header as='h2'>Amenities</Header>
            </div>
            <Grid stackable columns={2}>
              <Grid.Column>
                <Segment>
                  <p className="vendor-amenities"><b>Takeout: </b><span>{this.props.doc.takeout}</span></p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <p className="vendor-amenities"><b>Dine In: </b><span>{this.props.doc.dineIn}</span></p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <p className="vendor-amenities"><b>Delivery: </b><span>{this.props.doc.delivery}</span></p>
                </Segment>
              </Grid.Column>
            </Grid>
            <Divider />

            {/* VENDOR MENU */}
            <div className="vendor-menu-header">
              <Header as='h2'>Menu</Header>
            </div>
            <Grid stackable columns={2}>
              {this.props.doc.menu.map((section, index) => <Grid.Column key={index}>
                <Segment>
                  <List>
                    <List.Content>
                      <List.Header as='h3'>{section.type}</List.Header>
                      <Divider />
                      <List.List>
                        <List.Item>
                          <List.Content>
                            {section.items.map((item, itemIndex) => <List.Header key={itemIndex}>
                              <List.Icon name='triangle right' />{item}
                            </List.Header>)}
                          </List.Content>
                        </List.Item>
                      </List.List>
                    </List.Content>
                  </List>
                </Segment>
              </Grid.Column>)}
            </Grid>
          </Container>
        </div>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
Vendor.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Vendor documents.
  const subscription = Meteor.subscribe(Vendors.userPublicationName);
  return {
    // doc: Stuffs.collection.findOne(documentId),
    doc: Vendors.collection.findOne(documentId),
    ready: subscription.ready(),
  };
})(Vendor);
