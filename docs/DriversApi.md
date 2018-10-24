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
import ApitaxJsClient from 'apitax-js-client';
let defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApitaxJsClient.DriversApi();

let driver = "driver_example"; // String | The driver to use for the request. ie. github


apiInstance.getDriverBlacklist(driver, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDriverConfig"></a>
# **getDriverConfig**
> Response getDriverConfig(driver)

Retrieve the config of a loaded driver

Retrieve the config of a loaded driver

### Example
```javascript
import ApitaxJsClient from 'apitax-js-client';
let defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApitaxJsClient.DriversApi();

let driver = "driver_example"; // String | The driver to use for the request. ie. github


apiInstance.getDriverConfig(driver, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDriverList"></a>
# **getDriverList**
> Response getDriverList()

Retrieve the catalog of drivers

Retrieve the catalog of drivers

### Example
```javascript
import ApitaxJsClient from 'apitax-js-client';
let defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApitaxJsClient.DriversApi();

apiInstance.getDriverList((error, data, response) => {
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

<a name="getDriverStatus"></a>
# **getDriverStatus**
> Response getDriverStatus(driver)

Retrieve the status of a loaded driver

Retrieve the status of a loaded driver

### Example
```javascript
import ApitaxJsClient from 'apitax-js-client';
let defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApitaxJsClient.DriversApi();

let driver = "driver_example"; // String | The driver to use for the request. ie. github


apiInstance.getDriverStatus(driver, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDriverWhitelist"></a>
# **getDriverWhitelist**
> Response getDriverWhitelist(driver)

Retrieve the whitelist in the driver

Retrieve the whitelist in the driver

### Example
```javascript
import ApitaxJsClient from 'apitax-js-client';
let defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApitaxJsClient.DriversApi();

let driver = "driver_example"; // String | The driver to use for the request. ie. github


apiInstance.getDriverWhitelist(driver, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

