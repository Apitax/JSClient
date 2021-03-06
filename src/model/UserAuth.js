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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApitaxJsClient) {
      root.ApitaxJsClient = {};
    }
    root.ApitaxJsClient.UserAuth = factory(root.ApitaxJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserAuth model module.
   * @module model/UserAuth
   * @version 2
   */

  /**
   * Constructs a new <code>UserAuth</code>.
   * @alias module:model/UserAuth
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UserAuth</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAuth} obj Optional instance to populate.
   * @return {module:model/UserAuth} The populated <code>UserAuth</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('api_token')) {
        obj['api_token'] = ApiClient.convertToType(data['api_token'], 'String');
      }
      if (data.hasOwnProperty('extra')) {
        obj['extra'] = ApiClient.convertToType(data['extra'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} api_token
   */
  exports.prototype['api_token'] = undefined;
  /**
   * @member {Object} extra
   */
  exports.prototype['extra'] = undefined;



  return exports;
}));


