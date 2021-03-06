import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import validate from './validate';

const PickPage = (props) => {
  const { handleSubmit, previousPage } = props;

  return (
    <form onSubmit={handleSubmit}>
      PICK PAGE
      <div>
        <button type="button" className="btn btn-outline-primary" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="btn btn-outline-primary">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'stock-movement-wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(PickPage);

PickPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};
