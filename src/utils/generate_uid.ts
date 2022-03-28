/**
 * Generate UID for item
 * @param {string} itemName: name of item
 * @param {number} index: index of item
 */

export const generateUID = (itemName: string, index: number) => {
  if (!itemName) {
    throw new Error('You have to provide item name to generate uid');
  } else if (typeof index !== 'number') {
    throw new Error('You have to provide index of item to generate uid');
  }

  const time = new Date().getTime();

  return `${itemName}_${index}_${time}`;
};
