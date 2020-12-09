import { Meteor } from 'meteor/meteor';
import { Vendors } from '../../api/vendor/Vendor.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
// function addData(data) {
//   console.log(`  Adding: ${data.name} (${data.owner})`);
//   Stuffs.collection.insert(data);
// }
//
// /** Initialize the collection if empty. */
// if (Stuffs.collection.find().count() === 0) {
//   if (Meteor.settings.defaultData) {
//     console.log('Creating default data.');
//     Meteor.settings.defaultData.map(data => addData(data));
//   }
// }

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
