import { Meteor } from 'meteor/meteor';
import { Vendors } from '../../api/vendor/Vendor.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addVendor(data) {
  console.log(`  Adding: ${data.name} `);
  Vendors.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Vendors.collection.find().count() === 0) {
  if (Meteor.settings.vendors) {
    console.log('Creating vendors data.');
    Meteor.settings.vendors.map(data => addVendor(data));
  }
}
