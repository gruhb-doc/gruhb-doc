import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Encapsulates state and variable values for this collection. */
class VendorsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'VendorsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      owner: String,
      name: String,
      address: String,
      campusLocation: String,
      description: String,
      rating: String,
      photo: String,
      hours: Object,
      'hours.monToFri': String,
      'hours.satToSun': String,
      menu: Array,
      'menu.$': Object,
      'menu.$.type': String,
      'menu.$.items': Array,
      'menu.$.items.$': String,
      cost: String,
      takeout: String,
      dineIn: String,
      delivery: String,
      cuisine: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Vendors = new VendorsCollection();
