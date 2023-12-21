const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let resultEmail = '';
  for (let i = 0; i < email.length; i +=1) {
    if (email[i] === '@') {
      resultEmail = email.slice(i + 1);
    }
  }
  return resultEmail;
}

module.exports = {
  getEmailDomain
};
