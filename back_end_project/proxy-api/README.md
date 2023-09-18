## Getting Started
To install the neccesary dependencies for this project and generate a .env file, execute the following command from within the project directory
> `npm run setup-env`

To start a local server, execute the following command from within the project directory
> `npm start`

## Development Guidelines
<!-- DOCUMENT INTRODUCTION -->
This document outlines the requirements and conventions for maintaining a clean and organized API codebase. Adhering to the provided structure and guidelines will ensure consistency and ease of collaboration. Failure to follow these guidelines **will** result in the rejection of your changes.

>*Please note that this document is subject to change and all contributors are expected to follow the latest version of this document.*

<!-- TABLE OF CONTENTS -->
## Table of Contents
- [Folder Structure](#folder-structure)
- [Variable Naming Guidelines](#variable-naming-guidelines)
- [File Naming Guidelines](#file-naming-guidelines)
- [Endpoint Naming Guidelines](#endpoint-naming-guidelines)
- [Documentation Standards](#documentation-standards)
- [Contribution Guidelines](#contribution-guidelines)
- [API key Guidelines](#api-key-guidelines)
- [Docker Guidelines](#docker-guidelines)
- [Deployment Guidelines](#deployment-guidelines)

<!-- FOLDER STRUCTURE -->
## Folder Structure

The codebase directory structure should adhere to the following guidelines:

|Directory|Description|
|-|-|
| `/`| Root directory|
| `/routes`| Directory containing all routes|
| `/routes/*routename*`| Directory for each route, containing all subroutes|
|


In this context, ***routename*** refers to any specific root route or endpoint that extends from the root route. For example:
- `/routes/example/example.routes.js` contains route definitions for example subroutes, such as:
   - `localhost:3000/example/*hello-world*`
   - `localhost:3000/example/*echo*`
- `/routes/example/example.js` contains functionality for the endpoints outlined in `example.routes.js`. 
- `/routes/example/example.test.js` contains tests for the mailgun endpoints
- `/routes/example/example.md` contains all neccesary information for the example endpoint
>When adding a new route, ensure you create an appropriatley named folder within the `/routes/` subdirectory to house the associated files and documentation. For more information please see [Contribution guidelines](#contribution-guidelines). 

> Ensure that `/package.json` is updated to include a testing script for each route. An example within `/package.json` has been included.

<!-- VARIABLE NAMING GUIDELINES -->
## Variable Naming Guidelines 

**Camel Case**<br/> Use camelCase for variable names. Example: *`myVariableName`*.

**Single Words**<br/>  Whenever possible, use single words for variable names.

**Descriptive Names**<br/>  Choose descriptive names that convey the purpose and content of the variable. Avoid single-letter names such as *`i`* or *`x`*.

**Avoid Abbreviations**<br/>  Avoid using abbreviations that might be unclear to readers of your code. `description` instead of `desc`

**Comments for Clarity**<br/>  If a variable's purpose is not immediately obvious from its name, add a brief comment explaining its purpose.


<!-- FILE NAMING GUIDELINES -->
## File Naming Guidelines
The table below outlines the naming convention for all files generated. If you find you need to add any additional files, submit your changes for review to receive feedback on the appropriate naming convention for that specific file.

Please make note of the specific *file extensions* used for each file, these do not alter the file itself but provides a convenient way to keep track of each files contents.

| Rule | Definition |
| --- | --- |
| **Route Files** | Main route file: `*routeName*.js` . |
| **Route Definitions** | Endpoint specifics: `*routeName*.routes.js` . |
| **Testing** | Test files: `*routeName*.test.js` . |
| **Documentation** | Document files: `*routeName*.md` |

<br>

For instance, consider a root route `/example/` with subroutes like `/subscribe` and `/unsubscribe`:
- `/routes/example.js`: logic for `/example/` endpoints.
- `/routes/example.routes.js`: Endpoint details for `/example/` and its subroutes.
- `/routes/example.test.js`: Tests for `/example/` endpoint functionality.
- `/routes/example.md`: documents details for `/example/` endpoint.

<!-- ENDPOINT NAMING GUIDELINES -->
## Endpoint Naming Guidelines
* Use nouns instead of verbs, to signify the functionality of each endpoint pathway.

* Consider the use of plurals for naming endpoints responsible for collections of data,
e.g., `/stories/` instead of `/story/` for a collection.

* Maintain the use of standard HTML status and error codes when sending responses
to API requests e.g., `404`, `505` etc… This will help maintain standard error handling
practices.

* Use forward slashes to separate URI resources and maintain resource hierarchy e.g.,
`https://demo.com/thread/sent-message`

* Lowercase letters are considered best practice in naming endpoints, and words that
require separation should use hyphens (see above example).

* File extensions are not required in endpoint names.

* Versioning should be considered in endpoint names, to make it easier to distinguish
between API versions e.g., `https://demo.com/API/v4/thread`.

* Logical nesting should be utilised, for example, associated information should be
grouped. Logically, if an article was being fetched, along with comments, `/comments`
would be appended to the `/articles` pathway.

* Security practices must be maintained. SSL certificates are a reasonably costeffective way to secure endpoints.

* Filtering, sorting and pagination techniques should be utilised to ensure only the
data necessary for the request is returned, which will help maintain a high level of
performance.

* Consider data caching options, as utilising local memory will help reduce the need to
query the backend service every time an API request is made

<!-- API KEY GUIDELINES -->
## API key Guidelines
    To be determined

<!-- DOCUMENTATION STANDARDS -->
## Documentation Standards
In the directory of each route you will find a document ***routename*.md**, This document contains all relevant information the specific route. The information for each route **must** contain the following:
- All route endpoints
- Description for each endpoint
- How data is formatted for each endpoint (response & request)
- An example using CURL to call the endpoint

It may seem like a lot of work but this is **essential** for maintaining a clean codebase so that future contributors may make impactful changes.

>Example endpoint documentaion can be found at `routes/example/example.md`

<!-- CONTRIBUTION GUIDELINES -->
## Contribution Guidelines

We welcome contributions to improve our API, however please ensure your contribution meets all outlined critera. 

### Adding Routes

When adding new routes to the API, please adhere to the following steps:

1. Create a new route directory within `/routes` with an [appropriate name.](#file-naming-guidelines)
2. Implement route functionality in the corresponding `*.js` file.
3. Define route endpoints and logic in the `*.routes.js` file.
4. Write comprehensive tests in the `*.test.js` file.
5. Create an entry in `package.json` to execute the test file.
6. Write a [document](#documentation-standards) for the route in the `*.md` file. 
7. Include the route within `/routes/routeRegistrar.js`.

### Adjusting Existing Routes

If you need to make adjustments to existing routes, please follow these guidelines:

1. Make changes to the appropriate route's `*.js` file.
2. Update route names in the corresponding `*.routes.js` file if needed.
3. Ensure existing tests in the `*.test.js` file still pass.
4. Update the [documentation](#documentation-standards) for the route in the `*.md` file. 
5. Update `/routes/routeRegistrar.js` if required.

<!-- DOCKER GUIDELINES -->
## Docker Guidelines
    To be determined

<!-- DEPLOYMENT GUIDELINES -->
## Deployment Guidelines
Feel free to deploy this API as you wish, please note that you will need to provide API keys for any external services this API interacts with. These will need to be configured within your enviornment variables, if you require clairification please see [API key Guidelines](#api-key-guidelines).

### Test API keys
Test API keys are **not** provided, it is up to you to obtain your own API keys. Swapping out an API key with another one will not effect the service, only the endpoint of that service itself. if you are unable to obtain an API key for a service, please contact the team to find a solution. 

>Please contact the team with a justification if you wish to use the shared test API keys for this project

### Production API keys
Production API keys will be given to those who **require** them, production API keys may be revoked or removed if it is beleived they are being misused. Each API key given for production is *directly* associated to the person it has been given to, this allows the team to monitor the actions performed on the production services.

>Access to production API keys is restricted to those **activley** working within the production enviornment.
