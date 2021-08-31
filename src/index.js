/**
 * Node.JS module for interacting with Playcap's API.
 * @example
 * ```js
 * const Playcap = require('playcap.app');
 * const playcap = new Playcap('apiKey');
 * ```
 */
class Api {
/**
*
* @param {string} apiToken the token which the client will use to interact with the api
*/
  constructor(apiToken) {
    this.apiToken = apiToken;

    if (!apiToken) throw new Error('[PLAYCAP.APP] No apiToken was specified.');
  }
}

module.exports = Api;
