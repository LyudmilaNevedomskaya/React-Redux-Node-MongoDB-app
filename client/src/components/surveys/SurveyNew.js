// SurveyNew shows SurveyForm and SurveyFormReview
import React, {Component} from 'react';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = {showFormReview: false};

  renderContent() {
    if (this.state.showFormReview === true) {
      return <SurveyReview />
    }
    return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})}/>
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default SurveyNew;