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
    define(['ApiClient', 'model/Script'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Script'));
  } else {
    // Browser globals (root is window)
    if (!root.ApitaxJsClient) {
      root.ApitaxJsClient = {};
    }
    root.ApitaxJsClient.ScriptRename = factory(root.ApitaxJsClient.ApiClient, root.ApitaxJsClient.Script);
  }
}(this, function(ApiClient, Script) {
  'use strict';




  /**
   * The ScriptRename model module.
   * @module model/ScriptRename
   * @version 2
   */

  /**
   * Constructs a new <code>ScriptRename</code>.
   * @alias module:model/ScriptRename
   * @class
   * @param original {module:model/Script} 
   * @param _new {module:model/Script} 
   */
  var exports = function(original, _new) {
    var _this = this;

    _this['original'] = original;
    _this['new'] = _new;
  };

  /**
   * Constructs a <code>ScriptRename</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScriptRename} obj Optional instance to populate.
   * @return {module:model/ScriptRename} The populated <code>ScriptRename</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('original')) {
        obj['original'] = Script.constructFromObject(data['original']);
      }
      if (data.hasOwnProperty('new')) {
        obj['new'] = Script.constructFromObject(data['new']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Script} original
   */
  exports.prototype['original'] = undefined;
  /**
   * @member {module:model/Script} new
   */
  exports.prototype['new'] = undefined;



  return exports;
}));


