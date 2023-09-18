## Example API Documentation
This documentation provides an overview of the `/mailgun/` routes. These routes allow users to subscribe, unsubscribe or remove an address from the mailing list. The mailing list is defined within `mailgun.js` as `mailing_list_domain`. 

The API key for mailgun is stored as an environment variable named *`MAILGUN_API_KEY`* 
The Mailing list used is stored as an environment variable named *`MAILGUN_MAILING_LIST_DOMAIN`* 

<details>
<summary> <b><code>/subscribe</code></b> : <code>POST</code> </summary>

##### Description
>Subscribe a given address and name to the mailing list.

##### Parameters

> |`name`|`Required`|`data-type`|`description`|
> |-|-|-|-|
> |address|Yes|string|email address to subscribe
> |name|No|string|name of the user subscribing

##### Responses
> |`code`|`content-type`|`response`|
> |-|-|-|
> |200|application/json|`{"message":"Successfully subscribed address to list"}`
> |400|application/json|`{"message":"Address already exists"}`
> |400|application/json|`{"message": "The 'address' parameter should be a valid email address"}`

##### cURL
>```javascript
>curl -X POST -H "Content-Type: application/json" -d '{"address":"example@mail.com", "name", "example"}' localhost:3000/mailgun/subscribe
>```
---
</details>


<details>
<summary> <b><code>/unsubscribe</code></b> : <code>POST</code> </summary>

##### Description
>Unsubscribe a given address from the mailing list.

##### Parameters

> |`name`|`required`|`data-type`|`description`|
> |-|-|-|-|
> |address|yes|string|email address to unsubscribe
##### Responses
> |`code`|`content-type`|`response`|
> |-|-|-|
> |200|application/json|`{"message":"Successfully unsubscribed address from list"}`
> |400|application/json|`{"message":"member not found"}`
> |400|application/json|`{"message":"Failed to unsubscribe address from list"}`

##### cURL
>```javascript
>curl -X POST -H "Content-Type: application/json" -d '{"address":"example@mail.com"}' localhost:3000/mailgun/unsubscribe
>```
---
</details>


<details>
<summary> <b><code>/remove</code></b> : <code>POST</code> </summary>

##### Description
>Remove a given address from the mailing list

##### Parameters

> |`name`|`required`|`data-type`|`description`|
> |-|-|-|-|
> |address|yes|string|email address to remove
##### Responses
> |`code`|`content-type`|`response`|
> |-|-|-|
> |200|application/json|`{"message":"Successfully deleted address from list"}`
> |400|application/json|`{"message":"member not found"}`
> |400|application/json|`{"message":"Failed to delete address from list"}`

##### cURL
>```javascript
>curl -X POST -H "Content-Type: application/json" -d '{"address":"example@mail.com"}' localhost:3000/mailgun/remove
>```
---
</details>