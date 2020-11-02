# Code structure

The page as a whole is defined in `containers/MainLayout` and consists of the following three parts:

- A navigation bar at the top of the page.
- A left-hand grid that holds the page-specific controls.
- A main grid that occupies the majority of the space, and holds the main content.

These items are described in more detail below.

## Navigation bar

This is defined in `components/NavBar'. Currently all links in here are hard-coded.

It is intended to mimic the navigation bar used at the top of the classic NR site. Currently the links there are mostly simple text, but it may be better to add icons and adjust the styling to better match the existing site.

The background colour has been overridden to use the default theme background colour (rather than the default AppBar colour, which uses the theme's _primary_ colour). This means it appears in light grey when the light theme is used (default), to better mimic the classic site's colours.

To the left is a back arrow, with the intention that it will eventually provide a means to return to the classic site.

To the right are controls for switching between light and dark themes. This uses a React context object in `context/MDThemeContext` in order to access the value from `App.js` (where it's used) and the NavBar (where it gets updated). Currently this value is not persisted to localStorage or similar.

## Left-hand controls

This part of the page is implemented as a _named slot_ within the `containers/MainLayout` component. You need to assign your content (typically JSX) to a property called `leftControls`. For example:

```
const Dashboard = () => {
  const leftControls = <p>Dashboard controls go in here...</p>;

  return (
    <MainLayout leftControls={leftControls}>
    ...
    </MainLayout>
  );
}
```

This allows each page to define its own selection of controls to appear in the left panel. If no left controls are rquired, omit the prop from the `<MainLayout>` component and the main grid (below) will expand to fill the entire width of the page.

## Main grid

The remainder of the page is implemented as a grid (with `direction="row"`) that simply injects the children of the `<MainLayout>` component, allowing each page to hold whatever specific content is needed.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
