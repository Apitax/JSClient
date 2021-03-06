# ApitaxJsClient.ScriptaxApi

All URIs are relative to *https://localhost/apitax/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDriverScript**](ScriptaxApi.md#createDriverScript) | **POST** /drivers/{driver}/scriptax/scripts | Create a new script
[**deleteDriverScript**](ScriptaxApi.md#deleteDriverScript) | **DELETE** /drivers/{driver}/scriptax/scripts | Delete a script
[**getDriverScript**](ScriptaxApi.md#getDriverScript) | **GET** /drivers/{driver}/scriptax/scripts | Retrieve the contents of a script
[**getDriverScriptCatalog**](ScriptaxApi.md#getDriverScriptCatalog) | **GET** /drivers/{driver}/scriptax/catalog | Retrieve the script catalog
[**renameDriverScript**](ScriptaxApi.md#renameDriverScript) | **PATCH** /drivers/{driver}/scriptax/scripts | Rename a script
[**saveDriverScript**](ScriptaxApi.md#saveDriverScript) | **PUT** /drivers/{driver}/scriptax/scripts | Save a script


<a name="createDriverScript"></a>
# **createDriverScript**
> Response createDriverScript(driver, opts)

Create a new script

Create a new script

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ScriptaxApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github

var opts = { 
  'scriptCreate': new ApitaxJsClient.ScriptCreate() // ScriptCreate | The data needed to create this script
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDriverScript(driver, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driver** | **String**| The driver to use for the request. ie. github | 
 **scriptCreate** | [**ScriptCreate**](ScriptCreate.md)| The data needed to create this script | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDriverScript"></a>
# **deleteDriverScript**
> Response deleteDriverScript(driver, opts)

Delete a script

Delete a script

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ScriptaxApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github

var opts = { 
  'scriptDelete': new ApitaxJsClient.ScriptDelete() // ScriptDelete | The data needed to delete this script
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDriverScript(driver, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driver** | **String**| The driver to use for the request. ie. github | 
 **scriptDelete** | [**ScriptDelete**](ScriptDelete.md)| The data needed to delete this script | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDriverScript"></a>
# **getDriverScript**
> Response getDriverScript(driver, opts)

Retrieve the contents of a script

Retrieve the contents of a script

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ScriptaxApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github

var opts = { 
  'script': "script_example" // String | The script name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDriverScript(driver, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driver** | **String**| The driver to use for the request. ie. github | 
 **script** | **String**| The script name. | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDriverScriptCatalog"></a>
# **getDriverScriptCatalog**
> Response getDriverScriptCatalog(driver)

Retrieve the script catalog

Retrieve the script catalog

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ScriptaxApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDriverScriptCatalog(driver, callback);
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

<a name="renameDriverScript"></a>
# **renameDriverScript**
> Response renameDriverScript(driver, opts)

Rename a script

Rename a script

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ScriptaxApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github

var opts = { 
  'scriptRename': new ApitaxJsClient.ScriptRename() // ScriptRename | The data needed to rename this script
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.renameDriverScript(driver, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driver** | **String**| The driver to use for the request. ie. github | 
 **scriptRename** | [**ScriptRename**](ScriptRename.md)| The data needed to rename this script | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveDriverScript"></a>
# **saveDriverScript**
> Response saveDriverScript(driver, opts)

Save a script

Save a script

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ScriptaxApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github

var opts = { 
  'scriptSave': new ApitaxJsClient.ScriptSave() // ScriptSave | The data needed to save this script
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveDriverScript(driver, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driver** | **String**| The driver to use for the request. ie. github | 
 **scriptSave** | [**ScriptSave**](ScriptSave.md)| The data needed to save this script | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

