import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VendorItem extends React.Component {
  render() {
    return (
        <Card centered color='green'>
          <Grid columns={1}>
            <Grid.Row>
              <Image
                  size='medium'
                  src={this.props.vendor.photo}
                  width="200"
                  height="200"
                  // fluid
                  centered/>
            </Grid.Row>
            <Grid.Row>
              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column>
                    <Card.Content>
                      <Card.Header>
                        <b><Link className="card-link"
                                 to={`/vendor/${this.props.vendor._id}`}>{this.props.vendor.name}</Link></b>
                      </Card.Header>
                    </Card.Content>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Card.Meta>
                      <p>Rating: {this.props.vendor.rating}</p>
                      <p>Campus Location: {this.props.vendor.campusLocation}</p>
                    </Card.Meta>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Row>
            <Divider></Divider>
            <Grid.Row>
              <Grid.Column width={15}>
                <Grid.Row>
                  <Card.Content>
                    <Card.Description>
                      {this.props.vendor.description}
                    </Card.Description>
                  </Card.Content>
                </Grid.Row>
                <Divider></Divider>
                <Grid.Row>
                  <Card.Content extra>
                    {this.props.vendor.address}
                  </Card.Content>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Card.Content extra>
            <Link to={`/edit/${this.props.vendor._id}`}>Edit</Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
VendorItem.propTypes = {
  vendor: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorItem);
