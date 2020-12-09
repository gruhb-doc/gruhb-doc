import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendor/Vendor';
import VendorItem from '../components/VendorItem';

/** A simple static component to render some text for the landing page. */
class HomeScreen extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div>
          <div className="homescreen-bg-img">
          <div className="homescreen-card-container">
            <Card.Group itemsPerRow={3}>
              {this.props.vendors.map((vendor) => <VendorItem key={vendor._id} vendor={vendor} />)}
            </Card.Group>
          </div>
        </div>

        </div>
    );
  }
}

// export default HomeScreen;

/** Require an array of Stuff documents in the props. */
HomeScreen.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe(Vendors.userPublicationName);
  return {
    vendors: Vendors.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(HomeScreen);
