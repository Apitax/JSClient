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
* The ErrorResponse model module.
* @module model/ErrorResponse
* @version 2
*/
export default class ErrorResponse {
    /**
    * Constructs a new <code>ErrorResponse</code>.
    * @alias module:model/ErrorResponse
    * @class
    * @param status {Number} 
    * @param message {String} 
    */

    constructor(status, message) {
        

        
        

        this['status'] = status;this['message'] = message;

        
    }

    /**
    * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ErrorResponse} obj Optional instance to populate.
    * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponse();

            
            
            

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
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
    * @member {String} state
    */
    state = undefined;








}

