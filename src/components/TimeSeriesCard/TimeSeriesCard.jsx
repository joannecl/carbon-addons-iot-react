import React from 'react';
import moment from 'moment';
import withSize from 'react-sizeme';
import { LineChart } from '@carbon/charts-react';
import '@carbon/charts/style.css';
import isEmpty from 'lodash/isEmpty';
import 'c3/c3.css';
import styled from 'styled-components';
import isNil from 'lodash/isNil';

import { TimeSeriesCardPropTypes, CardPropTypes } from '../../constants/PropTypes';
import { CARD_SIZES } from '../../constants/LayoutConstants';
import Card from '../Card/Card';

const LineChartWrapper = styled.div`
  padding-left: 16px;
  padding-top: ${props => (props.isLegendHidden ? '16px' : '0px')};
  padding-bottom: 16px;
  width: 100%;
  height: 100%;

  &&& {
    .chart-wrapper g.tick text {
      transform: initial !important;
      text-anchor: initial !important;
    }
    .legend-wrapper {
      display: ${props => (props.isLegendHidden ? 'none' : 'block')};
    }
    .chart-holder {
      width: 100%;
      height: 100%;
    }
  }
`;

const determinePrecision = (size, value, precision) => {
  // If it's an integer don't return extra values
  if (Number.isInteger(value)) {
    return 0;
  }
  // If the card is xsmall we don't have room for decimals!
  switch (size) {
    case CARD_SIZES.XSMALL:
      return Math.abs(value) > 9 ? 0 : precision;
    default:
  }
  return precision;
};

const TimeSeriesCard = ({
  title,
  content: { series, timeDataSourceId, xLabel, yLabel, unit },
  size,
  interval,
  values,
  ...others
}) => {
  const valueSort = values.sort((left, right) =>
    moment.utc(left.timestamp).diff(moment.utc(right.timestamp))
  );

  const sameYear =
    !isEmpty(values) &&
    moment(moment.unix(valueSort[0].timestamp / 1000)).isSame(moment(), 'year') &&
    moment(moment.unix(valueSort[valueSort.length - 1].timestamp / 1000)).isSame(moment(), 'year');

  const formatInterval = (timestamp, index, ticksInterval) => {
    const m = moment.unix(timestamp / 1000);

    return interval === 'hour' && index === 0
      ? m.format('DD MMM YYYY')
      : interval === 'hour' &&
        index !== 0 &&
        !moment(moment.unix(valueSort[index - ticksInterval].timestamp / 1000)).isSame(
          moment.unix(valueSort[index].timestamp / 1000),
          'day'
        )
      ? m.format('DD MMM')
      : interval === 'hour'
      ? m.format('HH:mm')
      : interval === 'day' && index === 0
      ? m.format('DD MMM YYYY')
      : interval === 'month' && !sameYear
      ? m.format('MMM YYYY')
      : interval === 'month' && sameYear && index === 0
      ? m.format('MMM YYYY')
      : interval === 'month' && sameYear
      ? m.format('MMM')
      : interval === 'minute'
      ? m.format('HH:mm')
      : m.format('DD MMM YYYY');

    // return interval === 'day'
    //   ? m.format('MM DD')
    //   : interval === 'hour'
    //   ? m.format('MM-DD HH:00')
    //   : interval === 'minute'
    //   ? m.format('HH:mm')
    //   : m.format('YYYY-MM-DD');
  };

  const maxTicksPerSize = () => {
    switch (size) {
      case CARD_SIZES.MEDIUM:
        return 6;
      case CARD_SIZES.LARGE:
        return 6;
      case CARD_SIZES.XLARGE:
        return 14;
      default:
        return 10;
    }
  };

  return (
    <withSize.SizeMe monitorHeight>
      {({ size: measuredSize }) => {
        const ticksInterval = Math.round(valueSort.length / maxTicksPerSize(size));
        const labels = valueSort.map((i, idx) =>
          idx % ticksInterval === 0
            ? formatInterval(i[timeDataSourceId], idx, ticksInterval)
            : ' '.repeat(idx)
        );
        return (
          <Card title={title} size={size} {...others} isEmpty={isEmpty(values)}>
            {!others.isLoading && !isEmpty(values) ? (
              <LineChartWrapper size={size} isLegendHidden={series.length === 1}>
                <LineChart
                  data={{
                    labels,
                    datasets: series.map(({ dataSourceId, label, color }) => ({
                      label,
                      backgroundColors: color ? [color] : null,
                      data: values.map(i => i[dataSourceId]),
                    })),
                  }}
                  options={{
                    animations: false,
                    accessibility: false,
                    scales: {
                      x: {
                        title: xLabel,
                      },
                      y: {
                        title: yLabel,
                        formatter: axisValue => {
                          const precision = determinePrecision(size, axisValue, 1);
                          let renderValue = axisValue;
                          if (typeof axisValue === 'number') {
                            renderValue =
                              axisValue > 1000000000000
                                ? `${(axisValue / 1000000000000).toFixed(precision)}T`
                                : axisValue > 1000000000
                                ? `${(axisValue / 1000000000).toFixed(precision)}B`
                                : axisValue > 1000000
                                ? `${(axisValue / 1000000).toFixed(precision)}M`
                                : axisValue > 1000
                                ? `${(axisValue / 1000).toFixed(precision)}K`
                                : axisValue.toFixed(precision);
                          } else if (isNil(axisValue)) {
                            renderValue = '--';
                          }
                          return `${renderValue} ${unit || ''}`;
                        },
                        // numberOfTicks: 8,
                      },
                    },
                    legendClickable: true,
                    containerResizable: true,
                  }}
                  height={measuredSize.height}
                />
              </LineChartWrapper>
            ) : null}
          </Card>
        );
      }}
    </withSize.SizeMe>
  );
};

TimeSeriesCard.propTypes = { ...CardPropTypes, ...TimeSeriesCardPropTypes };

TimeSeriesCard.defaultProps = {
  size: CARD_SIZES.MEDIUM,
};

export default TimeSeriesCard;
