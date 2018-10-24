# ApitaxJsClient.ApitaxApi

All URIs are relative to *https://localhost/apitax/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticate**](ApitaxApi.md#authenticate) | **POST** /apitax/auth | Authenticate
[**createUser**](ApitaxApi.md#createUser) | **POST** /drivers/{driver}/apitax/users/{user} | Create a new user
[**deleteUser**](ApitaxApi.md#deleteUser) | **DELETE** /drivers/{driver}/apitax/users/{user} | Delete a user
[**getConfig**](ApitaxApi.md#getConfig) | **GET** /apitax/config | Retrieve the system config
[**getLog**](ApitaxApi.md#getLog) | **GET** /apitax/logs/{log} | Retrieve the logs
[**getUser**](ApitaxApi.md#getUser) | **GET** /drivers/{driver}/apitax/users/{user} | Retrieve a user
[**getUserList**](ApitaxApi.md#getUserList) | **GET** /drivers/{driver}/apitax/users | Retrieve a list of users
[**refreshToken**](ApitaxApi.md#refreshToken) | **POST** /apitax/auth/refresh | Refreshes login token using refresh token
[**saveUser**](ApitaxApi.md#saveUser) | **PUT** /drivers/{driver}/apitax/users/{user} | Save a user
[**systemStatus**](ApitaxApi.md#systemStatus) | **GET** /apitax/status | Retrieve the system status


<a name="authenticate"></a>
# **authenticate**
> AuthResponse authenticate(opts)

Authenticate

Authenticate with the API

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');

var apiInstance = new ApitaxJsClient.ApitaxApi();

var opts = { 
  'user': new ApitaxJsClient.UserAuth() // UserAuth | The user authentication object.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authenticate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**UserAuth**](UserAuth.md)| The user authentication object. | [optional] 

### Return type

[**AuthResponse**](AuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> Response createUser(user, driver, opts)

Create a new user

Create a new user

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApitaxApi();

var user = "user_example"; // String | Create user with this name

var driver = "driver_example"; // String | The driver to use for the request. ie. github

var opts = { 
  'userCreate': new ApitaxJsClient.UserCreate() // UserCreate | The data needed to create this user
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUser(user, driver, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| Create user with this name | 
 **driver** | **String**| The driver to use for the request. ie. github | 
 **userCreate** | [**UserCreate**](UserCreate.md)| The data needed to create this user | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> Response deleteUser(user, driver, opts)

Delete a user

Delete a user

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApitaxApi();

var user = "user_example"; // String | Delete user with this name

var driver = "driver_example"; // String | The driver to use for the request. ie. github

var opts = { 
  'userDelete': new ApitaxJsClient.UserDelete() // UserDelete | The data needed to delete this user
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUser(user, driver, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| Delete user with this name | 
 **driver** | **String**| The driver to use for the request. ie. github | 
 **userDelete** | [**UserDelete**](UserDelete.md)| The data needed to delete this user | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConfig"></a>
# **getConfig**
> Response getConfig()

Retrieve the system config

Retrieve the system config

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApitaxApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConfig(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLog"></a>
# **getLog**
> Response getLog(log)

Retrieve the logs

Retrieve the logs

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApitaxApi();

var log = "log_example"; // String | Get this log


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLog(log, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **log** | **String**| Get this log | 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> Response getUser(user, driver)

Retrieve a user

Retrieve a user

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApitaxApi();

var user = "user_example"; // String | Get user with this name

var driver = "driver_example"; // String | The driver to use for the request. ie. github


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(user, driver, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| Get user with this name | 
 **driver** | **String**| The driver to use for the request. ie. github | 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserList"></a>
# **getUserList**
> Response getUserList(driver)

Retrieve a list of users

Retrieve a list of users

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApitaxApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserList(driver, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driver** | **String**| The driver to use for the request. ie. github | 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refreshToken"></a>
# **refreshToken**
> UserAuth refreshToken()

Refreshes login token using refresh token

Refreshes login token using refresh token

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApitaxApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refreshToken(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserAuth**](UserAuth.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="saveUser"></a>
# **saveUser**
> Response saveUser(user, driver, opts)

Save a user

Save a user

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApitaxApi();

var user = "user_example"; // String | Save user with this name

var driver = "driver_example"; // String | The driver to use for the request. ie. github

var opts = { 
  'userSave': new ApitaxJsClient.UserSave() // UserSave | The data needed to save this user
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveUser(user, driver, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| Save user with this name | 
 **driver** | **String**| The driver to use for the request. ie. github | 
 **userSave** | [**UserSave**](UserSave.md)| The data needed to save this user | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="systemStatus"></a>
# **systemStatus**
> Response systemStatus()

Retrieve the system status

Retrieve the system status

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApitaxApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.systemStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

