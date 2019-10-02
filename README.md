## Book 4 Chapter 10 Practice/Challenge 1-5

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

***

### Practice: No Content for You!

Ensure that customers can't access locations, owners, or employees unless they submit authentication.

### Practice: Change the view once the user logs in

Once a user logs in, redirect them to the home route. You will need to refactor the login route. With routes, consider when you will need to use component vs render and the use of {...props}.

### Challenge: No Animal ID in API

What if an animalId is no longer available in the API? Write a conditional to display something different if an animal(user, employee or location) is not available/valid.

### Challenge: Active NavBar Route

In the NavBar, highlight the active section. For example, if you are viewing Animals, change the <NavBar> Animals link to lime (you could also disable the ability to click). Since the <NavBar is not part of a route, you will need to export default withRouter(NavBar) in order to have access to the router location properties. Consider how we used loadingStatus in a previous chapter.

### Fun Challenge: Remember Me

* Add a checkbox beneath the login form labeled Remember Me.
* When the customer logs in and the checkbox is not checked, then save their information to session storage
* When the customer logs in and the checkbox is checked, then save their information to local storage
* Tip You will need to store the value of the checkbox in state.