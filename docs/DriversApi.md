# ApitaxJsClient.DriversApi

All URIs are relative to *https://localhost/apitax/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDriverBlacklist**](DriversApi.md#getDriverBlacklist) | **GET** /drivers/{driver}/blacklist | Retrieve the blacklist in the driver
[**getDriverConfig**](DriversApi.md#getDriverConfig) | **GET** /drivers/{driver}/config | Retrieve the config of a loaded driver
[**getDriverList**](DriversApi.md#getDriverList) | **GET** /drivers | Retrieve the catalog of drivers
[**getDriverStatus**](DriversApi.md#getDriverStatus) | **GET** /drivers/{driver}/status | Retrieve the status of a loaded driver
[**getDriverWhitelist**](DriversApi.md#getDriverWhitelist) | **GET** /drivers/{driver}/whitelist | Retrieve the whitelist in the driver


<a name="getDriverBlacklist"></a>
# **getDriverBlacklist**
> Response getDriverBlacklist(driver)

Retrieve the blacklist in the driver

Retrieve the blacklist in the driver

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.DriversApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDriverBlacklist(driver, callback);
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDriverConfig"></a>
# **getDriverConfig**
> Response getDriverConfig(driver)

Retrieve the config of a loaded driver

Retrieve the config of a loaded driver

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.DriversApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDriverConfig(driver, callback);
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDriverList"></a>
# **getDriverList**
> Response getDriverList()

Retrieve the catalog of drivers

Retrieve the catalog of drivers

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.DriversApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDriverList(callback);
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

<a name="getDriverStatus"></a>
# **getDriverStatus**
> Response getDriverStatus(driver)

Retrieve the status of a loaded driver

Retrieve the status of a loaded driver

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.DriversApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDriverStatus(driver, callback);
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDriverWhitelist"></a>
# **getDriverWhitelist**
> Response getDriverWhitelist(driver)

Retrieve the whitelist in the driver

Retrieve the whitelist in the driver

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.DriversApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDriverWhitelist(driver, callback);
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

