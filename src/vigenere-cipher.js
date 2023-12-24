const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = !reverse;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  shiftChar(char, shift, encrypt = true) {
    if (this.alphabet.includes(char.toUpperCase())) {
        let index = this.alphabet.indexOf(char.toUpperCase());
        shift = encrypt ? shift : -shift;
        return this.alphabet[(26 + index + shift) % 26];
    }
    return char;
  }

  cipherText(text, key, encrypt = true) {
    if (!text || !key) {
        throw new Error('Incorrect arguments!');
    }
    
    key = key.toUpperCase();
    let cipheredText = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        if (this.alphabet.includes(text[i].toUpperCase())) {
            let shift = this.alphabet.indexOf(key[keyIndex % key.length]);
            cipheredText += this.shiftChar(text[i], shift, encrypt);
            keyIndex++;
        } else {
            cipheredText += text[i];
        }
    }
    return (this.reverse ? cipheredText.split('').reverse().join('') : cipheredText).toUpperCase();
  }

  encrypt(text, key) {
    return this.cipherText(text, key, true);
  }

  decrypt(text, key) {
    return this.cipherText(text, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
