# Apitax.CommandtaxApi

All URIs are relative to *https://localhost/apitax/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**command**](CommandtaxApi.md#command) | **POST** /drivers/{driver}/commandtax/command | Execute a Command


<a name="command"></a>
# **command**
> Response command(driver, opts)

Execute a Command

Execute a command

### Example
```javascript
import Apitax from 'apitax';
let defaultClient = Apitax.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Apitax.CommandtaxApi();

let driver = "driver_example"; // String | The driver to use for the request. ie. github

let opts = { 
  'execute': new Apitax.Execute() // Execute | The data needed to execute this command
};

apiInstance.command(driver, opts, (error, data, response) => {
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
 **execute** | [**Execute**](Execute.md)| The data needed to execute this command | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

