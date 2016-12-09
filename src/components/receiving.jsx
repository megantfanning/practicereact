/**
 * Created by megan on 12/6/16.
 */
import React, {Component} from "react";
import Form from "react-jsonschema-form";

const schema = {
  title: 'Receiving',
  type: 'object',
  required: ['title'],
  properties: {
    accessionNumber: {type:"string", title:"accession number"},
    title: {type: "string", title: "Title", default: "A new item received"},
    done: {type: "boolean", title: "Done?", default: false},
  },
};

const log = (type) => console.log.bind(console, type);
const Receiving = () => (
  <Form
    schema={schema}
    onChange={log("changed")}
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
          .then(function (response) {
            console.log('Success ', response);
          })
          .catch(function (err) {
            console.log('error occurred ', err);
          });
      }
    }
  />
);
export default Receiving;
