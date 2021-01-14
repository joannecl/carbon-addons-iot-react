export const comboEmptyData = [];

export const comboEmptyOptions = {
  experimental: true,
  title: 'Combo Chart (empty)',
  axes: {
    left: {
      mapsTo: 'value',
      title: 'Attendance',
    },
    bottom: {
      scaleType: 'labels',
      mapsTo: 'key',
    },
    right: {
      title: 'Temperature (°C)',
      mapsTo: 'temp',
      scaleType: 'linear',
      correspondingDatasets: ['Temperature'],
    },
  },
  comboChartTypes: [
    {
      type: 'simple-bar',
      correspondingDatasets: ['Attendance'],
    },
    {
      type: 'line',
      correspondingDatasets: ['Temperature'],
    },
  ],
};

export const comboLoadingData = [
  { group: 'Paris', key: 'Monday', temp: 25 },
  { group: 'Paris', key: 'Tuesday', temp: 33 },
  { group: 'Paris', key: 'Wednesday', temp: 27 },
  { group: 'Paris', key: 'Thursday', temp: 25 },
  { group: 'Paris', key: 'Friday', temp: 32 },
  { group: 'Marseille', key: 'Monday', temp: 16 },
  { group: 'Marseille', key: 'Tuesday', temp: 22 },
  { group: 'Marseille', key: 'Wednesday', temp: 20 },
  { group: 'Marseille', key: 'Thursday', temp: 22 },
  { group: 'Marseille', key: 'Friday', temp: 25 },
  { group: 'Avg Temperature', key: 'Monday', temp: 20.5 },
  { group: 'Avg Temperature', key: 'Tuesday', temp: 27.5 },
  { group: 'Avg Temperature', key: 'Wednesday', temp: 23.5 },
  { group: 'Avg Temperature', key: 'Thursday', temp: 23.5 },
  { group: 'Avg Temperature', key: 'Friday', temp: 28.5 },
  { group: 'Attendance', key: 'Monday', value: 2650 },
  { group: 'Attendance', key: 'Tuesday', value: 2553 },
  { group: 'Attendance', key: 'Wednesday', value: 3433 },
  { group: 'Attendance', key: 'Thursday', value: 3754 },
  { group: 'Attendance', key: 'Friday', value: 3744 },
];

export const comboLoadingOptions = {
  experimental: true,
  title: 'Combo Chart (loading)',
  axes: {
    left: {
      mapsTo: 'value',
      title: 'Attendance',
    },
    bottom: {
      scaleType: 'labels',
      mapsTo: 'key',
    },
    right: {
      title: 'Temperature (°C)',
      mapsTo: 'temp',
      scaleType: 'linear',
      correspondingDatasets: ['Temperature'],
    },
  },
  data: {
    loading: true,
  },
  comboChartTypes: [
    {
      type: 'simple-bar',
      correspondingDatasets: ['Attendance'],
    },
    {
      type: 'line',
      correspondingDatasets: ['Temperature'],
    },
  ],
};

export const comboData = [
  {
    group: 'Dataset 1',
    date: '2019-01-01T06:00:00.000Z',
    value: 82,
  },
  {
    group: 'Dataset 1',
    date: '2019-01-07T06:00:00.000Z',
    value: 82,
  },
  {
    group: 'Dataset 1',
    date: '2019-01-14T06:00:00.000Z',
    value: 84,
  },
  {
    group: 'Dataset 1',
    date: '2019-01-21T06:00:00.000Z',
    value: 82,
  },
  {
    group: 'Dataset 1',
    date: '2019-02-01T06:00:00.000Z',
    value: 82,
  },
  {
    group: 'Dataset 1',
    date: '2019-02-07T06:00:00.000Z',
    value: 79,
  },
  {
    group: 'Dataset 1',
    date: '2019-02-14T06:00:00.000Z',
    value: 79,
  },
  {
    group: 'Dataset 1',
    date: '2019-02-21T06:00:00.000Z',
    value: 77,
  },
  {
    group: 'Dataset 1',
    date: '2019-03-01T06:00:00.000Z',
    value: 77,
  },
  {
    group: 'Dataset 1',
    date: '2019-03-07T06:00:00.000Z',
    value: 76.5,
  },
  {
    group: 'Dataset 1',
    date: '2019-03-14T06:00:00.000Z',
    value: 76,
  },
  {
    group: 'Dataset 1',
    date: '2019-03-21T06:00:00.000Z',
    value: 76,
  },
  {
    group: 'Dataset 1',
    date: '2019-04-01T06:00:00.000Z',
    value: 65,
  },
  {
    group: 'Dataset 1',
    date: '2019-04-07T06:00:00.000Z',
    value: 75,
  },
  {
    group: 'Dataset 1',
    date: '2019-04-14T06:00:00.000Z',
    value: 78,
  },
  {
    group: 'Dataset 1',
    date: '2019-04-21T06:00:00.000Z',
    value: 73,
  },
  {
    group: 'Dataset 1',
    date: '2019-05-01T06:00:00.000Z',
    value: 78,
  },
  {
    group: 'Dataset 1',
    date: '2019-05-07T06:00:00.000Z',
    value: 77,
  },
  {
    group: 'Dataset 1',
    date: '2019-05-14T06:00:00.000Z',
    value: 76.5,
  },
  {
    group: 'Dataset 1',
    date: '2019-05-21T06:00:00.000Z',
    value: 76,
  },
  {
    group: 'Dataset 1',
    date: '2019-06-01T06:00:00.000Z',
    value: 75.5,
  },
  {
    group: 'Dataset 1',
    date: '2019-06-07T06:00:00.000Z',
    value: 73,
  },
  {
    group: 'Dataset 1',
    date: '2019-06-14T06:00:00.000Z',
    value: 75,
  },
  {
    group: 'Dataset 1',
    date: '2019-06-21T06:00:00.000Z',
    value: 76,
  },
  {
    group: 'Dataset 1',
    date: '2019-07-01T06:00:00.000Z',
    value: 55,
  },
  {
    group: 'Dataset 1',
    date: '2019-07-07T06:00:00.000Z',
    value: 45,
  },
  {
    group: 'Dataset 1',
    date: '2019-07-14T06:00:00.000Z',
    value: 77,
  },
  {
    group: 'Dataset 1',
    date: '2019-07-21T06:00:00.000Z',
    value: 72,
  },
  {
    group: 'Dataset 1',
    date: '2019-08-01T06:00:00.000Z',
    value: 65,
  },
  {
    group: 'Dataset 1',
    date: '2019-08-07T06:00:00.000Z',
    value: 63,
  },
  {
    group: 'Dataset 1',
    date: '2019-08-14T06:00:00.000Z',
    value: 63,
  },
  {
    group: 'Dataset 1',
    date: '2019-08-21T06:00:00.000Z',
    value: 65,
  },
  {
    group: 'Dataset 1',
    date: '2019-09-01T06:00:00.000Z',
    value: 67,
  },
  {
    group: 'Dataset 1',
    date: '2019-09-07T06:00:00.000Z',
    value: 60,
  },
  {
    group: 'Dataset 1',
    date: '2019-09-14T06:00:00.000Z',
    value: 68,
  },
  {
    group: 'Dataset 1',
    date: '2019-09-21T06:00:00.000Z',
    value: 68.5,
  },
  {
    group: 'Dataset 1',
    date: '2019-10-01T06:00:00.000Z',
    value: 69.5,
  },
  {
    group: 'Dataset 1',
    date: '2019-10-07T06:00:00.000Z',
    value: 60,
  },
  {
    group: 'Dataset 1',
    date: '2019-10-14T06:00:00.000Z',
    value: 70,
  },
  {
    group: 'Dataset 1',
    date: '2019-10-21T06:00:00.000Z',
    value: 70,
  },
  {
    group: 'Dataset 1',
    date: '2019-11-01T06:00:00.000Z',
    value: 71,
  },
  {
    group: 'Dataset 1',
    date: '2019-11-07T06:00:00.000Z',
    value: 71.5,
  },
  {
    group: 'Dataset 1',
    date: '2019-11-14T06:00:00.000Z',
    value: 72,
  },
  {
    group: 'Dataset 1',
    date: '2019-11-21T06:00:00.000Z',
    value: 70,
  },
  {
    group: 'Dataset 1',
    date: '2019-12-01T06:00:00.000Z',
    value: 68,
  },
  {
    group: 'Dataset 1',
    date: '2019-12-07T06:00:00.000Z',
    value: 65,
  },
  {
    group: 'Dataset 1',
    date: '2019-12-14T06:00:00.000Z',
    value: 35,
  },
  {
    group: 'Dataset 1',
    date: '2019-12-21T06:00:00.000Z',
    value: 42,
  },
  {
    group: 'Dataset 1',
    date: '2020-01-01T06:00:00.000Z',
    value: 65,
  },
  {
    group: 'Dataset 1',
    date: '2020-01-07T06:00:00.000Z',
    value: 67,
  },
  {
    group: 'Dataset 1',
    date: '2020-01-14T06:00:00.000Z',
    value: 70,
  },
  {
    group: 'Dataset 1',
    date: '2020-01-21T06:00:00.000Z',
    value: 70,
  },
  {
    group: 'Dataset 2',
    date: '2019-01-01T06:00:00.000Z',
    value: 92,
  },
  {
    group: 'Dataset 2',
    date: '2019-01-07T06:00:00.000Z',
    value: 92,
  },
  {
    group: 'Dataset 2',
    date: '2019-01-14T06:00:00.000Z',
    value: 94,
  },
  {
    group: 'Dataset 2',
    date: '2019-01-21T06:00:00.000Z',
    value: 91,
  },
  {
    group: 'Dataset 2',
    date: '2019-02-01T06:00:00.000Z',
    value: 91,
  },
  {
    group: 'Dataset 2',
    date: '2019-02-07T06:00:00.000Z',
    value: 88,
  },
  {
    group: 'Dataset 2',
    date: '2019-02-14T06:00:00.000Z',
    value: 89,
  },
  {
    group: 'Dataset 2',
    date: '2019-02-21T06:00:00.000Z',
    value: 87,
  },
  {
    group: 'Dataset 2',
    date: '2019-03-01T06:00:00.000Z',
    value: 87,
  },
  {
    group: 'Dataset 2',
    date: '2019-03-07T06:00:00.000Z',
    value: 86.5,
  },
  {
    group: 'Dataset 2',
    date: '2019-03-14T06:00:00.000Z',
    value: 86,
  },
  {
    group: 'Dataset 2',
    date: '2019-03-21T06:00:00.000Z',
    value: 86,
  },
  {
    group: 'Dataset 2',
    date: '2019-04-01T06:00:00.000Z',
    value: 76,
  },
  {
    group: 'Dataset 2',
    date: '2019-04-07T06:00:00.000Z',
    value: 86,
  },
  {
    group: 'Dataset 2',
    date: '2019-04-14T06:00:00.000Z',
    value: 88,
  },
  {
    group: 'Dataset 2',
    date: '2019-04-21T06:00:00.000Z',
    value: 83,
  },
  {
    group: 'Dataset 2',
    date: '2019-05-01T06:00:00.000Z',
    value: 88,
  },
  {
    group: 'Dataset 2',
    date: '2019-05-07T06:00:00.000Z',
    value: 87,
  },
  {
    group: 'Dataset 2',
    date: '2019-05-14T06:00:00.000Z',
    value: 86.5,
  },
  {
    group: 'Dataset 2',
    date: '2019-05-21T06:00:00.000Z',
    value: 86,
  },
  {
    group: 'Dataset 2',
    date: '2019-06-01T06:00:00.000Z',
    value: 85.5,
  },
  {
    group: 'Dataset 2',
    date: '2019-06-07T06:00:00.000Z',
    value: 83,
  },
  {
    group: 'Dataset 2',
    date: '2019-06-14T06:00:00.000Z',
    value: 85,
  },
  {
    group: 'Dataset 2',
    date: '2019-06-21T06:00:00.000Z',
    value: 85,
  },
  {
    group: 'Dataset 2',
    date: '2019-07-01T06:00:00.000Z',
    value: 67,
  },
  {
    group: 'Dataset 2',
    date: '2019-07-07T06:00:00.000Z',
    value: 65.6,
  },
  {
    group: 'Dataset 2',
    date: '2019-07-14T06:00:00.000Z',
    value: 87,
  },
  {
    group: 'Dataset 2',
    date: '2019-07-21T06:00:00.000Z',
    value: 80,
  },
  {
    group: 'Dataset 2',
    date: '2019-08-01T06:00:00.000Z',
    value: 85,
  },
  {
    group: 'Dataset 2',
    date: '2019-08-07T06:00:00.000Z',
    value: 73,
  },
  {
    group: 'Dataset 2',
    date: '2019-08-14T06:00:00.000Z',
    value: 73,
  },
  {
    group: 'Dataset 2',
    date: '2019-08-21T06:00:00.000Z',
    value: 75,
  },
  {
    group: 'Dataset 2',
    date: '2019-09-01T06:00:00.000Z',
    value: 77,
  },
  {
    group: 'Dataset 2',
    date: '2019-09-07T06:00:00.000Z',
    value: 70,
  },
  {
    group: 'Dataset 2',
    date: '2019-09-14T06:00:00.000Z',
    value: 78,
  },
  {
    group: 'Dataset 2',
    date: '2019-09-21T06:00:00.000Z',
    value: 78.5,
  },
  {
    group: 'Dataset 2',
    date: '2019-10-01T06:00:00.000Z',
    value: 79.5,
  },
  {
    group: 'Dataset 2',
    date: '2019-10-07T06:00:00.000Z',
    value: 70,
  },
  {
    group: 'Dataset 2',
    date: '2019-10-14T06:00:00.000Z',
    value: 80,
  },
  {
    group: 'Dataset 2',
    date: '2019-10-21T06:00:00.000Z',
    value: 80,
  },
  {
    group: 'Dataset 2',
    date: '2019-11-01T06:00:00.000Z',
    value: 81,
  },
  {
    group: 'Dataset 2',
    date: '2019-11-07T06:00:00.000Z',
    value: 81.5,
  },
  {
    group: 'Dataset 2',
    date: '2019-11-14T06:00:00.000Z',
    value: 82,
  },
  {
    group: 'Dataset 2',
    date: '2019-11-21T06:00:00.000Z',
    value: 80,
  },
  {
    group: 'Dataset 2',
    date: '2019-12-01T06:00:00.000Z',
    value: 78,
  },
  {
    group: 'Dataset 2',
    date: '2019-12-07T06:00:00.000Z',
    value: 75,
  },
  {
    group: 'Dataset 2',
    date: '2019-12-14T06:00:00.000Z',
    value: 22,
  },
  {
    group: 'Dataset 2',
    date: '2019-12-21T06:00:00.000Z',
    value: 53,
  },
  {
    group: 'Dataset 2',
    date: '2020-01-01T06:00:00.000Z',
    value: 75,
  },
  {
    group: 'Dataset 2',
    date: '2020-01-07T06:00:00.000Z',
    value: 77,
  },
  {
    group: 'Dataset 2',
    date: '2020-01-14T06:00:00.000Z',
    value: 80,
  },
  {
    group: 'Dataset 2',
    date: '2020-01-21T06:00:00.000Z',
    value: 80,
  },
];

export const comboDataOptions = {
  experimental: true,
  legend: {
    position: 'top',
  },

  title: 'Area + Line',
  axes: {
    bottom: {
      title: 'Date',
      mapsTo: 'date',
      scaleType: 'time',
      correspondingDatasets: ['Dataset 1', 'Dataset 2'],
    },
    left: {
      mapsTo: 'value',
      title: 'Score',
      scaleType: 'linear',
      correspondingDatasets: ['Dataset 1', 'Dataset 2'],
      thresholds: [
        {
          value: 100,
          label: 'Custom label',
          fillColor: 'green',
        },
        {
          value: 70,
          fillColor: 'yellow',
        },
        {
          value: 33,
          fillColor: 'red',
        },
      ],
    },
  },

  comboChartTypes: [
    {
      type: 'area',
      options: {
        points: {
          enabled: false,
        },
      },
      correspondingDatasets: ['Dataset 1'],
    },
    {
      type: 'line',
      options: {
        points: {
          enabled: false,
        },
      },
      correspondingDatasets: ['Dataset 2'],
    },
  ],
};