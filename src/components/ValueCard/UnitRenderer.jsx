import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { CARD_LAYOUTS } from '../../constants/LayoutConstants';

const propTypes = {
  value: PropTypes.any, // eslint-disable-line
};

const defaultProps = {
  unit: '',
};

const AttributeUnit = styled.span`
  padding-left: 0.25rem;
  padding-bottom: 0.25rem;
  ${props =>
    props.layout === CARD_LAYOUTS.HORIZONTAL
      ? `
    font-size: 1.25rem;  
  `
      : `font-size: 1.5rem`};
  font-weight: lighter;
  white-space: nowrap;
`;

/** This components job is determining how to render different kinds units */
const UnitRenderer = ({ value, unit, layout }) => {
  if (typeof value === 'number') {
    return (
      <AttributeUnit layout={layout}>
        {value > 1000000000000
          ? `T${unit}`
          : value > 1000000000
          ? `B${unit}`
          : value > 1000000
          ? `M${unit}`
          : value > 1000
          ? `K${unit}`
          : unit}
      </AttributeUnit>
    );
  }
  return unit;
};

UnitRenderer.propTypes = propTypes;
UnitRenderer.defaultProps = defaultProps;

export default UnitRenderer;
