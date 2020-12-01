import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
        <div className="signin-bg-img">
             <Header id="signout-page" as="h2" textAlign="center" inverted>
            <p>You are signed out.</p>
            </Header>
        </div>
    );
  }
}
