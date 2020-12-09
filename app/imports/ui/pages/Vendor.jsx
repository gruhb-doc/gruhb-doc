import React from 'react';
import { Container, Divider, Grid, Header, Image, List, Loader, Segment } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
// import { Stuffs } from '../../api/stuff/Stuff';
import { Vendors } from '../../api/vendor/Vendor';

/** Renders the Page for editing a single document. */
class Vendor extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Preparing the vendor!</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    const vendor = {
      name: 'Da Spot',
      address: '2424 Maile Way, Honolulu, HI 96822',
      campusLocation: 'Saunders Hall',
      // eslint-disable-next-line max-len
      description: 'Da Spot Health Foods & Juices offers diverse, healthy and affordable cuisine with a unique take on tasty dishes from around the world. Da Spot specializes in Mediterranean and North African food with vegan and specialty meat options that can be certified halal or kosher. Offering imaginative cuisine in exotic styles of Egyptian, Greek, French, Italian, Indian, Thai, Malaysian, Ethiopian, American, Hawaiian, Japanese, Chinese, Korean, Pacific Rim and fusion cooking.',
      rating: '3.5',
      photo: 'https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2020/05/daspot_big.jpg',
      hours: {
        monToFri: 'Currently Unavailable',
        satToSun: 'CLOSED',
      },
      menu: [
        {
          type: 'Main',
          items: [
            'Sweet Dream',
            'DaKine',
            'StarBerry',
          ],
        },
        {
          type: 'Ala Carte',
          items: [
            'Halava',
            'Mung Bean Soup',
            'Brown Rice',
            'Salad',
            'Daily Special Entrée',
            'Khichri',
          ],
        },
        {
          type: 'Plates',
          items: [
            'Cheese Pizza',
            'Pepperoni Pizza',
            'Supreme Pizza',
            'Chicken Alfredo Pasta',
            'Meaty Marinara Pasta',
            'Italian Sausage Pizza',
          ],
        },
        {
          type: 'Plates',
          items: [
            'Cheese Pizza',
            'Pepperoni Pizza',
            'Supreme Pizza',
            'Chicken Alfredo Pasta',
            'Meaty Marinara Pasta',
            'Italian Sausage Pizza',
          ],
        },
        {
          type: 'Plates',
          items: [
            'Cheese Pizza',
            'Pepperoni Pizza',
            'Supreme Pizza',
            'Chicken Alfredo Pasta',
            'Meaty Marinara Pasta',
            'Italian Sausage Pizza',
          ],
        },
        {
          type: 'Plates',
          items: [
            'Cheese Pizza',
            'Pepperoni Pizza',
            'Supreme Pizza',
            'Chicken Alfredo Pasta',
            'Meaty Marinara Pasta',
            'Italian Sausage Pizza',
          ],
        },
      ],
      cost: '$',
      takeout: 'Yes',
      dineIn: 'No',
      delivery: 'No',
      cuisine: 'Juice Bars & Smoothies',
    };

    return (
        <div className="vendor-container">
          {/* VENDOR IMAGE BANNER */}
          <Image src={vendor.photo} fluid />

          {/* VENDOR PAGE CONTENT */}
          <Container textAlign='justified'>
            <b className="vendor-header">{vendor.name}</b>
            <p>{vendor.cuisine}</p>
            <div className="vendor-address">
              <b>
                {vendor.address}
              </b>
            </div>
            <div className="vendor-address">
              <b>
                {vendor.campusLocation}
              </b>
            </div>
            <Divider />
            <p className="vendor-desc">
              {vendor.description}
            </p>
            <p className="vendor-stat"><b>Rating: </b><span className="vendor-stat-val">{vendor.rating} / 5</span></p>
            <p className="vendor-stat"><b>Cost: </b><span className="vendor-stat-val">{vendor.cost}</span></p>
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
                        <p>{vendor.hours.monToFri}</p>
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <List>
                      <List.Item className="vendor-hours">
                        <List.Header as='h4'>Saturday to Sunday</List.Header>
                        <p>{vendor.hours.satToSun}</p>
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
                  <p className="vendor-amenities"><b>Takeout: </b><span>{vendor.takeout}</span></p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <p className="vendor-amenities"><b>Dine In: </b><span>{vendor.dineIn}</span></p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <p className="vendor-amenities"><b>Delivery: </b><span>{vendor.delivery}</span></p>
                </Segment>
              </Grid.Column>
            </Grid>
            <Divider />

            {/* VENDOR MENU */}
            <div className="vendor-menu-header">
              <Header as='h2'>Menu</Header>
            </div>
            <Grid stackable columns={2}>
              {vendor.menu.map((section, index) => <Grid.Column key={index}>
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
  // Get access to Stuff documents.
  // const subscription = Meteor.subscribe(Stuffs.userPublicationName);
  const subscription = Meteor.subscribe(Vendors.userPublicationName);
  return {
    // doc: Stuffs.collection.findOne(documentId),
    doc: Vendors.collection.findOne(documentId),
    ready: subscription.ready(),
  };
})(Vendor);
