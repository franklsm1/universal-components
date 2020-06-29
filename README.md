## Universal Component Library

### Live docs using components:
- [Storybook Live UI Documentation](https://franklsm1.github.io/universal-components/)
- [React code sandbox](https://codesandbox.io/s/brave-boyd-yssbw)
- [Angular code sandbox](https://codesandbox.io/s/dark-sunset-9ckxb)
- [Vue code sandbox](https://codesandbox.io/s/cool-brook-gfly0)

### npm Commands
- Build all components: `npm run build`
- Create HTML reports with each components bundle size: `npm run analysis`
    - results will be in the `analysis` folder
- Build components for local env and start storybook @ http://localhost:9000: `npm run storybook`
    - **NOTE:** Hot rebuilding occurs when any change is made within the lib directory
- Build storybook `docs` directory (for updating Github pages): `npm run build-storybook`    
- Upload built components to S3 (**personal bucket required**): `node uploadWidgets.js`
    - **NOTE:** `ACCESS_KEY`, `SECRET_KEY`, `S3_ENDPOINT`, and `BUCKET` env variables need to be set prior to upload

### Create Personal S3 bucket
- follow the steps in this [medium article](https://medium.com/@shamnad.p.s/how-to-create-an-s3-bucket-and-aws-access-key-id-and-secret-access-key-for-accessing-it-5653b6e54337)

### Dev Notes:
- React and React-Dom dependencies are required in the head script of the page using the widgets, see [example use file](componentUseExample.html#L6-L7)
- the rollup config looks for the `widget.jsx` file under each component directory to use as the starting point for that widget
- the Storybook stories utilize the rollup built JS file for each widget with pure HTML (no React in the stories)
- the `.storybook/preview-body.html` and `.storybook/preview-head.html` files inject the react and react-dom packages into storybook's rendering of components as well as a default div to use for remounting
- when running locally the bundled files are not GZIP compressed since storybook pulls the files from the local file store which does not have the capability to set the content-encoding header that tells the browser that the JS file is GZIP encoded 
- the script element creation in each story needs to be anonymous function so that it is rerun every time a different story is selected in the UI to ensure that the new content is placed in the default widget div
- the JSX notes print out shows left double quotes `“` instead of the `&quot;` value due to being in a code block

### Credits
- Much of the uploadWidgets.js script came from [this stackoverflow answer](https://stackoverflow.com/a/43663433) with some changes and additions to work with this pattern
- App bar starting component snippet from [material ui's app bar docs](https://material-ui.com/components/app-bar/)
- Card starting component snippet from [material ui's card docs](https://material-ui.com/components/cards/)
- Table starting component snippet from [material ui's table docs](https://material-ui.com/components/tables/)
