const fetch = require('node-fetch');
const pkg = require('../package.json');

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

  /**
   * @private
   * @param {string} path the path that request will be sent to
   * @param {string} apiToken the token which the client will use to interact with the api
   * @param {string} method the method in which the request will be sent
   * @param {object} body the request body
   */
  async _request(path, apiToken, method, body) {
    const baseUrl = 'https://api.playcap.app/api/v1/';
    return await fetch(`${baseUrl}${path}`, {
      method: method,
      body: body ? '' : JSON.stringify(body),
      headers: {'Content-Type': 'application/json', 'User-Agent': `playcap.app-js v${pkg.version}`},
    }).then((body) => {
      if (!body) throw Error('[PLAYCAP.APP] Response did not return a body.');
      return body;
    });
  }
  /**
   *
   * @param {string} userId the id of the user to fetch
   * @return {object} body
   */
  getUser(userId) {
    return this._request(`users/${userId}`, this.apiToken, 'GET');
  }
}

module.exports = Api;
