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
* The UserAuth model module.
* @module model/UserAuth
* @version 2
*/
export default class UserAuth {
    /**
    * Constructs a new <code>UserAuth</code>.
    * @alias module:model/UserAuth
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>UserAuth</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserAuth} obj Optional instance to populate.
    * @return {module:model/UserAuth} The populated <code>UserAuth</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAuth();

            
            
            

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
    username = undefined;
    /**
    * @member {String} password
    */
    password = undefined;
    /**
    * @member {String} api_token
    */
    api_token = undefined;
    /**
    * @member {Object} extra
    */
    extra = undefined;








}

