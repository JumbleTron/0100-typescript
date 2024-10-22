type MetricLabels<T extends string[]> = Partial<Record<T[number], string>>;
type MetricConfiguration<T extends string[]> = {
  labels?: T;
};

function incrementCounter<T extends string[]>(config: MetricConfiguration<T>, labels: MetricLabels<T> = {}): void {
  console.log(config, labels)
}

const preEventsCounter: MetricConfiguration<['provider', 'test']> = {
  labels: ['provider', 'test'],
};
incrementCounter(preEventsCounter, {'provider' : 'jt'})