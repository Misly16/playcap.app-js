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
    const response = await fetch(`${baseUrl}${path}`, {
      method: method,
      body: body ? '' : JSON.stringify(body),
      headers: {'Content-Type': 'application/json', 'User-Agent': `playcap.app-js v${pkg.version}`},
    });
    if (!response.ok) throw Error(`[PLAYCAP.APP] API returned status code ${response.status}`);
    return response.json();
  }
  /**
   *
   * @param {string} userId the id of the user to fetch
   * @return {object} body
   */
  async getUser(userId) {
    return await this._request(`users/${userId}`, this.apiToken, 'GET');
  }
  
  async getPost(postId) {
    return await this._request(`posts/${postId}`, this.apiToken, 'GET');
  }
  
  async getUserPosts(userId) {
    return await this._request(`users/${userId}/posts`, this.apiToken, 'GET');
  }
  async getUserAvatar(userId) {
    const request = await this._request(`users/${userId}`, this.apiToken, 'GET');
    return request.avatar ? `https://cdn.playcap.app/profiles/${avatar}` : `https://playcap.app/profile.png`;
  }
}

module.exports = Api;
