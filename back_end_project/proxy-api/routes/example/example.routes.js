/**
 *  These subroute definitions represent subroutes for a specific route,
 *
 *  Main routes are defined in 'routeRegistrar.js',
 *  These subroutes are extensions of that main route.
 * 
 *  the subroutes are stored this way to maintain a higher level of control and modularity.
 *  This allows for the example.test.js and example.js to use the same subroute names
 */
module.exports = {
    subRouteDefinitions : {
        helloWorld : "/hello-world",
        echo : "/echo"
    }
}