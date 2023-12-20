const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resultDNS = {};
  for (const domain of domains) {
    const parts = domain.split('.').reverse();
    let correctDNS = '';
    for (const part of parts) {
      correctDNS += '.' + part;
      if (resultDNS[correctDNS]) {
        resultDNS[correctDNS] += 1;
      } else {
        resultDNS[correctDNS] = 1;
      }
    }
  }
  return resultDNS;
}

module.exports = {
  getDNSStats
};
