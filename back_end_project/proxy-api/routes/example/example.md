## Example API Documentation
This documentation provides an overview of the `/example/` routes. These routes have been designed as an example of how future routes should be implemented. The example routes cover simple json data responses and error handling. 

This markdown file and its formatting is to be used as the basis of all other endpoint documentation. Copy into new endpoint directories and edit to reflect each route and associated subroutes.

<details>
<summary> <b><code>/hello-world</code></b> : <code>GET</code> </summary>

##### Description
>A simple example endpoint that responds with a string.

##### Parameters

> |`name`|`type`|`data-type`|`description`|
> |-|-|-|-|
> |none|n/a|none|no data required

##### Responses
> |`code`|`content-type`|`response`|
> |-|-|-|
> |200|application/json|`{"message":"Hello World!"}`

##### cURL
>```javascript
>curl localhost:3000/example/hello-world
>```
---
</details>


<details>
<summary> <b><code>/echo</code></b> : <code>POST</code> </summary>

##### Description
>A more complex endpoint example that responds by echoing back the received JSON object from the request. If the request body is empty, an error is returned.

##### Parameters

> |`name`|`type`|`data-type`|`description`|
> |-|-|-|-|
> |Any|required|application/json|Data to be echoed back in response
##### Responses
> |`code`|`content-type`|`response`|
> |-|-|-|
> |200|application/json|`{"message":`*data sent in request*`}`
> |400|application/json|`{"message":"Empty request body!"}`

##### cURL
> If using windows CMD, json data must use escape characters, ie; `"{\"key\":\"value\"}" `
>```javascript
>curl -X POST -H "Content-Type: application/json" -d '{"Hello":"World"}' localhost:3000/example/echo
>```
---
</details>