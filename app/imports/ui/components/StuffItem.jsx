import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  render() {
    return (
        // <Table.Row>
        //   <Table.Cell>{this.props.stuff.name}</Table.Cell>
        //   <Table.Cell>{this.props.stuff.quantity}</Table.Cell>
        //   <Table.Cell>{this.props.stuff.condition}</Table.Cell>
        //   <Table.Cell>
        //     <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
        //   </Table.Cell>
        // </Table.Row>
    <Card centered>
      <Card.Content>
        <Card.Header>{this.props.stuff.name} </Card.Header>
        <Card.Description>
          {this.props.stuff.condition}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
