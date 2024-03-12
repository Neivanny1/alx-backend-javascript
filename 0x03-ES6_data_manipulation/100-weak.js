export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let endpoints = weakMap.get(endpoint) || 0;

  endpoints += 1;

  weakMap.set(endpoint, endpoints);

  if (endpoints >= 5) throw Error('Endpoint load is high');

  return endpoints;
}