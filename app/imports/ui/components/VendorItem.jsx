import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VendorItem extends React.Component {
  render() {
    return (
        <Card centered color='green'>
       <Grid>
             <Grid.Row>
               <Image
                   size ='medium'
                   src={this.props.vendor.photo}
                   width="200"
                   height="200"
                   // fluid
                   centered/>
               </Grid.Row>
         <Grid.Row>
           <Grid.Column width={5}>
             <Grid.Row>
               <Card.Content>
                 <Card.Header>
                   <Link to={`/vendor/${this.props.vendor._id}`}>{this.props.vendor.name}</Link>
                 </Card.Header>
               </Card.Content>
             </Grid.Row>
           </Grid.Column >
           <Grid.Column width={11}>
             <Card.Meta>
               <Grid.Row>
                 <span>Rating: {this.props.vendor.rating} </span>
               </Grid.Row>
               <Grid.Row>
              <br/>
               </Grid.Row>
               <Grid.Row>
                 <span>Campus Location: </span> {this.props.vendor.campusLocation}
               </Grid.Row>
             </Card.Meta>
           </Grid.Column>
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
