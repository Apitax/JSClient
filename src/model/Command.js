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
    root.ApitaxJsClient.Command = factory(root.ApitaxJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Command model module.
   * @module model/Command
   * @version 2
   */

  /**
   * Constructs a new <code>Command</code>.
   * @alias module:model/Command
   * @class
   * @param options {Object} 
   * @param command {String} 
   */
  var exports = function(options, command) {
    var _this = this;


    _this['options'] = options;
    _this['command'] = command;
  };

  /**
   * Constructs a <code>Command</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Command} obj Optional instance to populate.
   * @return {module:model/Command} The populated <code>Command</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], Object);
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], Object);
      }
      if (data.hasOwnProperty('command')) {
        obj['command'] = ApiClient.convertToType(data['command'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Object} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * @member {Object} options
   */
  exports.prototype['options'] = undefined;
  /**
   * @member {String} command
   */
  exports.prototype['command'] = undefined;



  return exports;
}));


