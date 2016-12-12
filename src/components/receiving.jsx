/**
 * Created by megan on 12/6/16.
 */
import React, { Component } from 'react';
import Form from 'react-jsonschema-form';

const schema = {
  title: 'Receiving',
  type: 'object',
  required: [
    'containerCount',
    'lineOfService',
  ],
  properties: {
    lineOfService: {
      title: 'Line of Service',
      type: 'string',
      enum: [
        'WHH',
        'GIP',
        'URO',
        'DRM',
      ],
    },
    label: {
      title: 'Patient',
      type: 'object',
      required: [
        'lastName',
        'firstName',
        'DOB',
      ],
      properties: {
        lastName: {
          title: 'Last Name',
          type: 'string',
        },
        firstName: {
          title: 'First Name',
          type: 'string',
        },
        DOB: {
          title: 'DOB',
          type: 'string',
          format: 'date',
        },
      },
    },
    containerCount: {
      title: 'Number of Containers',
      type: 'integer',
    },
    receivedDate: {
      title: 'Date/Time Received',
      type: 'string',
      format: 'date-time',
    },
    station: {
      title: 'Station',
      type: 'string',
      default: 'receiving',
    },
  } };


const log = type => console.log.bind(console, type);
const Receiving = () => (
  <Form
    schema={schema}
    onChange={log('changed')}
    onSubmit={
      (e) => {
        fetch(`/api/cases/${e.formData.accessionNumber}`, {
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(e.formData),
        })
          .then((response) => {
            console.log('Success ', response);
          })
          .catch((err) => {
            console.log('error occurred ', err);
          });
      }
    }
  />
);
export default Receiving;
