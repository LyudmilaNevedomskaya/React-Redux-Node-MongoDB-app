import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, field => {
      return <Field key={field.name} component={SurveyField} type="text" label={field.label} name={field.name} />
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  })


  // if (!values.title) {
  //   errors.title = 'You must provide a title';
  // }
  // if (!values.subject) {
  //   errors.subject = 'You must provide a subject';
  // }
  // if (!values.body) {
  //   errors.body = 'You must provide a body';
  // }
  // if (!values.emails) {
  //   errors.title = 'You must provide a title';
  // }


  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);