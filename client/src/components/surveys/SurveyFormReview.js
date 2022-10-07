// SurveyReview shows users their form inputs for review

import React from "react";
import { connect } from 'react-redux';

const SurveyReview = (props) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <div>
          <label>Survey Title:</label>
          <div>{props.formValues.title}</div>
        </div>
        <div>
          <label>Subject Line:</label>
          <div>{props.formValues.subject}</div>
        </div>
        <div>
          <label>Email Body:</label>
          <div>{props.formValues.body}</div>
        </div>
        <div>
          <label>Recipient List:</label>
          <div>{props.formValues.emails}</div>
        </div>
      </div>
      <button className="yellow darken-3 btn-flat" onClick={props.onCancel}>
        Back
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  //console.log(state.form.surveyForm.values);
  return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps)(SurveyReview);