import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField, LongTextField, NumField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Vendors } from '../../api/vendor/Vendor';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  address: String,
  campusLocation: String,
  description: String,
  rating: Number,
  photo: String,
  monToFri: String,
  satToSun: String,
  cost: String,
  takeout: String,
  dineIn: String,
  delivery: String,
  cuisine: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddVendor extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, address, campusLocation, description, rating, photo,
      monToFri,
      satToSun,
      cost,
      takeout,
      dineIn,
      delivery,
      cuisine } = data;
    const owner = Meteor.user().username;
    Vendors.collection.insert({ name, address, campusLocation, description, rating, photo,
          hours: {
            monToFri,
            satToSun,
          },
          menu: [],
          cost,
          takeout,
          dineIn,
          delivery,
          cuisine, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Vendors</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='name'/>
                <TextField name='address'/>
                <TextField name='campusLocation'/>
                <LongTextField name='description'/>
                <NumField name='rating'/>
                <TextField name='photo'/>
                <NumField name='cost'/>
                <TextField name='takeout'/>
                <TextField name='dineIn'/>
                <TextField name='delivery'/>
                <TextField name='cuisine'/>
                <TextField name='monToFri'/>
                <TextField name='satToSun'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddVendor;
