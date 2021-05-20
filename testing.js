const data = {
  environments: [
    {
      key: 'Upper Threshold',
      description: 'The value above which data would be considered as anomaly',
      value: '',
      default: 1000,
      type: 'integer',
    },
    {
      key: 'Lower Threshold',
      description: 'The value below which data would be considered as anomaly',
      value: '',
      default: -10,
      type: 'integer',
    },
    {
      key: 'Upper Threshold',
      description: 'The value above which data would be considered as anomaly',
      value: '',
      default: 1000,
      type: 'integer',
    },
    {
      key: 'Anomaly (+ve) rate of change',
      description: 'Anomaly +ve rate of change  (per second)',
      value: '',
      default: 20,
      type: 'float',
    },
    {
      key: 'Anomaly (-ve) rate of change',
      description: 'Anomaly -ve rate of change  (per second)',
      value: '',
      default: 20,
      type: 'float',
    },
    {
      key: 'Out-of-bound Data',
      description: 'What to do with out of bound data',
      value: '',
      default: 'Keep Data',
      type: 'enum',
      options: ['Keep Data', 'Remove Data', 'Smooth Data'],
    },
  ],
}

console.log(
  data.environments.map(d => ({
    [d.key.toUpperCase().replace(/\s/g, '_')]: d.default,
  }))
)
