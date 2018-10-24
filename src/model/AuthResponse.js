/**
 * Apitax
 * The API for the frontend of Apitax
 *
 * OpenAPI spec version: 2
 * Contact: shawn.clake@nopatience.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserAuth'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAuth'));
  } else {
    // Browser globals (root is window)
    if (!root.ApitaxJsClient) {
      root.ApitaxJsClient = {};
    }
    root.ApitaxJsClient.AuthResponse = factory(root.ApitaxJsClient.ApiClient, root.ApitaxJsClient.UserAuth);
  }
}(this, function(ApiClient, UserAuth) {
  'use strict';




  /**
   * The AuthResponse model module.
   * @module model/AuthResponse
   * @version 2
   */

  /**
   * Constructs a new <code>AuthResponse</code>.
   * @alias module:model/AuthResponse
   * @class
   * @param status {Number} 
   * @param message {String} 
   */
  var exports = function(status, message) {
    var _this = this;

    _this['status'] = status;
    _this['message'] = message;



  };

  /**
   * Constructs a <code>AuthResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthResponse} obj Optional instance to populate.
   * @return {module:model/AuthResponse} The populated <code>AuthResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
      }
      if (data.hasOwnProperty('auth')) {
        obj['auth'] = UserAuth.constructFromObject(data['auth']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * @member {String} refresh_token
   */
  exports.prototype['refresh_token'] = undefined;
  /**
   * @member {module:model/UserAuth} auth
   */
  exports.prototype['auth'] = undefined;



  return exports;
}));

