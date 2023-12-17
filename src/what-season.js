const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length != 0) {
    throw new Error('Invalid date!');
  }
  const monthSeason = date.getMonth();
  if (monthSeason === 1 || monthSeason === 0 || monthSeason === 11) return 'winter';
  if (monthSeason >= 2 && monthSeason <= 4) return 'spring';
  if (monthSeason >= 5 && monthSeason <= 7) return 'summer';
  if (monthSeason >= 8 && monthSeason <= 10) return 'autumn' || 'fall';
}

module.exports = {
  getSeason
};
