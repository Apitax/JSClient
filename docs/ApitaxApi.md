# Apitax.ApitaxApi

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
import Apitax from 'apitax';

let apiInstance = new Apitax.ApitaxApi();

let opts = { 
  'user': new Apitax.UserAuth() // UserAuth | The user authentication object.
};

apiInstance.authenticate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Apitax from 'apitax';
let defaultClient = Apitax.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Apitax.ApitaxApi();

let user = "user_example"; // String | Create user with this name

let driver = "driver_example"; // String | The driver to use for the request. ie. github

let opts = { 
  'userCreate': new Apitax.UserCreate() // UserCreate | The data needed to create this user
};

apiInstance.createUser(user, driver, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Apitax from 'apitax';
let defaultClient = Apitax.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Apitax.ApitaxApi();

let user = "user_example"; // String | Delete user with this name

let driver = "driver_example"; // String | The driver to use for the request. ie. github

let opts = { 
  'userDelete': new Apitax.UserDelete() // UserDelete | The data needed to delete this user
};

apiInstance.deleteUser(user, driver, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Apitax from 'apitax';
let defaultClient = Apitax.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Apitax.ApitaxApi();

apiInstance.getConfig((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Apitax from 'apitax';
let defaultClient = Apitax.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Apitax.ApitaxApi();

let log = "log_example"; // String | Get this log


apiInstance.getLog(log, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Apitax from 'apitax';
let defaultClient = Apitax.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Apitax.ApitaxApi();

let user = "user_example"; // String | Get user with this name

let driver = "driver_example"; // String | The driver to use for the request. ie. github


apiInstance.getUser(user, driver, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Apitax from 'apitax';
let defaultClient = Apitax.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Apitax.ApitaxApi();

let driver = "driver_example"; // String | The driver to use for the request. ie. github


apiInstance.getUserList(driver, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Apitax from 'apitax';
let defaultClient = Apitax.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Apitax.ApitaxApi();

apiInstance.refreshToken((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Apitax from 'apitax';
let defaultClient = Apitax.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Apitax.ApitaxApi();

let user = "user_example"; // String | Save user with this name

let driver = "driver_example"; // String | The driver to use for the request. ie. github

let opts = { 
  'userSave': new Apitax.UserSave() // UserSave | The data needed to save this user
};

apiInstance.saveUser(user, driver, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Apitax from 'apitax';
let defaultClient = Apitax.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Apitax.ApitaxApi();

apiInstance.systemStatus((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

