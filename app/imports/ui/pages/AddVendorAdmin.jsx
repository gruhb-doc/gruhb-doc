import React from 'react';
import { Grid, Segment, Header, Form } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
// Meteor might be used after Vendor Collection is added [DON'T DELETE]
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  address: String,
  campusLocation: String,
  description: String,
  rating: String,
  photos: String,
  hoursMonToFri: String,
  hoursSatTSun: String,
  menuType: Array,
  menuItems: Array,
  cost: {
    type: String,
    allowedValues: ['$', '$$', '$$$'],
    defaultValue: '$',
  },
  takeout: {
    type: String,
    allowedValues: ['Yes', 'No'],
    defaultValue: 'No',
  },
  dineIn: {
    type: String,
    allowedValues: ['Yes', 'No'],
    defaultValue: 'No',
  },
  delivery: {
    type: String,
    allowedValues: ['Yes', 'No'],
    defaultValue: 'No',
  },
  cuisine: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddVendorAdmin extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, address, campusLocation, description, rating, photos, hours, menu, cost, takeout, dineIn, delivery, cuisine } = data;
    Vendors.collection.insert({ name, address, campusLocation, description, rating, photos, hours, menu, cost, takeout, dineIn, delivery, cuisine },
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
            <Header as="h2" textAlign="center">Add Stuff</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='name'/>
                <TextField name='address'/>
                <TextField name='campusLocation'/>
                <TextField name='description'/>
                <TextField name='rating'/>
                <TextField name='photos'/>
                <TextField name='hours'/>
                <Header as="h3" textAlign="center">Opening Hours</Header>
                <Form.Group widths='equal'>
                  <Form.Field
                      name='hoursMonToFri'
                      label='Hours(Monday-Friday)'
                      control='input'
                      placeholder='Add Opening Times Here'
                  />
                  <Form.Field
                      name='hoursSatToSun'
                      label='Hours(Saturday-Sunday)'
                      control='input'
                      placeholder='Add Opening Times Here'
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field
                      name='type'
                      label='Menu Item(Type)'
                      control='input'
                      placeholder='First name'
                  />
                  <Form.Field
                      name='items'
                      label='Items'
                      control='input'
                      placeholder='Add item here'
                  />
                </Form.Group>
                <SelectField name='cost'/>
                <SelectField name='takeout'/>
                <SelectField name='dineIn'/>
                <SelectField name='delivery'/>
                <TextField name='cuisine'/>
                <NumField name='quantity' decimal={false}/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddVendorAdmin;
