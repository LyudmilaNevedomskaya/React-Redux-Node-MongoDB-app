import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
  {label: 'Survey Title', name: 'title'},
  {label: 'Subject Line', name: 'subject'},
  {label: 'Email Body', name: 'body'},
  {label: 'Recipient Lis', name: 'emails'}
]

class SurveyForm extends Component {
  renderFields() {
   return _.map(FIELDS, field => {
    return <Field key={field.name} component={SurveyField} type="text" label={field.label} name={field.name} />
   })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className='red btn-flat white-text'>Cancel</Link>
          <button
           className='teal btn-flat right white-text' type="submit">
            Next
            <i className='material-icons right'>done</i>
            </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must provide a title';
  }
  

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm'
})(SurveyForm);