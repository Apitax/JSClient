/**
 * Apitax
 * The API for the frontend of Apitax
 *
 * OpenAPI spec version: 2
 * Contact: shawn.clake@nopatience.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The Response model module.
* @module model/Response
* @version 2
*/
export default class Response {
    /**
    * Constructs a new <code>Response</code>.
    * @alias module:model/Response
    * @class
    * @param status {Number} 
    * @param body {Object} 
    */

    constructor(status, body) {
        

        
        

        this['status'] = status;this['body'] = body;

        
    }

    /**
    * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Response} obj Optional instance to populate.
    * @return {module:model/Response} The populated <code>Response</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Response();

            
            
            

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], Object);
            }
            if (data.hasOwnProperty('log')) {
                obj['log'] = ApiClient.convertToType(data['log'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} status
    */
    status = undefined;
    /**
    * @member {String} message
    */
    message = undefined;
    /**
    * @member {Object} body
    */
    body = undefined;
    /**
    * @member {String} log
    */
    log = undefined;








}


