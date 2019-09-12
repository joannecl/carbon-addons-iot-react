import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, object } from '@storybook/addon-knobs';
import omit from 'lodash/omit';

import { CARD_SIZES } from '../../constants/LayoutConstants';
import { getCardMinSize } from '../../utils/componentUtilityFunctions';

import ImageCard from './ImageCard';
import imageFile from './landscape.jpg';

const content = {
  src: imageFile,
  alt: 'Sample image',
  zoomMax: 10,
};

const values = {
  hotspots: [
    {
      x: 35,
      y: 65,
      icon: 'icon--arrow--down',
      content: <span style={{ padding: '10px' }}>Elevators</span>,
    },
    {
      x: 45,
      y: 25,
      icon: 'icon--arrow--left',
      content: <span style={{ padding: '10px' }}>Stairs</span>,
    },
    {
      x: 45,
      y: 50,
      icon: 'icon--arrow--right',
      content: <span style={{ padding: '10px' }}>Vent Fan</span>,
    },
    {
      x: 45,
      y: 75,
      icon: 'icon--arrow--up',
      content: <span style={{ padding: '10px' }}>Humidity Sensor</span>,
    },
  ],
};

storiesOf('ImageCard (Experimental)', module)
  .add('basic', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.XLARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <ImageCard
          title={text('title', 'Image')}
          id="image-hotspots"
          content={object('content', content)}
          values={object('values', values)}
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('isEditable', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.XLARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <ImageCard
          title={text('title', 'Image')}
          isEditable
          id="image-hotspots"
          content={object('content', omit(content, ['src']))}
          values={object('values', values)}
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('hotspots are loading', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.XLARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <ImageCard
          title={text('title', 'Image')}
          isHotspotDataLoading
          id="image-hotspots"
          content={object('content', content)}
          values={object('values', values)}
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  });