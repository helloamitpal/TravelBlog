import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({ title, description, type, children }) => (
  <div className={`message-container ${type}`}>
    <h1 className="title">{title}</h1>
    <div className="description">{description}</div>
    <div className="children-section">{children}</div>
  </div>
);

Message.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'default'])
};

Message.defaultProps = {
  description: '',
  type: 'default',
  children: null
};

export default memo(Message);
