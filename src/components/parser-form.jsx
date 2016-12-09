import React from 'react';
import Form from 'react-jsonschema-form';
import $RefParser from 'json-schema-ref-parser';
import { debounce } from 'lodash';


export default class ParserForm extends React.Component {
  static defaultProps = {
    onPost: () => {
    },
    // uiSchema: {},
    submitButton: <button className="btn btn-primary" type="submit">Save</button>,
    defaultFormData: {},
  }
  loadSchemas = ({ schema, schemaUrl, }) => {
  }

  handleSubmit = (e) => {
  }

  handleChange = (e) => {
  }

  readyToRenderForm = () => this.state.schema && true;

  render() {
    return(){<div> hi parser</div>}
  }
}
