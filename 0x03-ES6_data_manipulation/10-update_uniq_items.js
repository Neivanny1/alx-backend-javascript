export default function updateUniqueItems(updatedMap) {
  if (!(updatedMap instanceof Map)) throw Error('Cannot process');
  updatedMap.forEach((quantity, addedquantity) => {
    if (quantity === 1) updatedMap.set(addedquantity, 100);
  });
  return updatedMap;
}
