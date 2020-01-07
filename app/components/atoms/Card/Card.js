import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './card.scss';

const Card = ({ title, image, onSelect, className }) => {
  const onClickCard = (evt) => {
    evt.stopPropagation();
    onSelect && onSelect();
  };

  return (
    <div className={`card-container ${className}`} key={title}>
      <div className="card" onClick={onClickCard}>
        <div className="card-image">
          <LazyLoadImage alt={title} src={image} />
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string
};

Card.defaultProps = {
  className: '',
  onSelect: null
};

export default Card;
