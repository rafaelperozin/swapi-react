This project was created following these steps:

1. **Plan:** I searched on the web for some similar application to save time with it.
2. **Set up:** I installed React and made the set up of files structure.
3. **Code:** Development
4. **Styles:** To looks nice

## Reasons
- I choose the React Framework because is more popular and in my interview, you asked about React, then I presume you prefer to work with this framework.
- I'm using yarn instead of npm because I think faster to install libraries and returns less error in general.
- I used Axios to make the ajax requests
- I used a simple CSS instead of SASS because is a very simple application with just a few styles then I believe I do not need to complicate considering is a very simple application.
*PS.: I normally use SASS on my project.*
- I made a very simple and clean template (no advanced styles) because I'm focused on meeting the deadline of 4 hours.
- I didn't have time enough to stylize better the app because I never build, run in server-side and publish a React App. I only coded in the development mode to practise.
- I can easily reduce this time with commercial experience in javascript frameworks and with a standard set up project

## Code Explanation

1. Check local storage to reduce the number of API calls. If no data then get from API using Axios.
2. Pass characters data through the characters property on List Component.
3. On the List, I get the data sent in props and loop through the characters (using the map function because the data is in an array) to show the list of characters.
4. Create an Express Server to render the app on the server-side.

---------------

## See the React default instructions:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
