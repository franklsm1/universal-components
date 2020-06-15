## Universal Component Library

[Storybook Live UI View](https://franklsm1.github.io/universal-components/)

### Create S3 bucket
- follow the steps in this [medium article](https://medium.com/@shamnad.p.s/how-to-create-an-s3-bucket-and-aws-access-key-id-and-secret-access-key-for-accessing-it-5653b6e54337)

#### npm Commands
- Build all components: `npm run build`
- Create HTML reports with each components bundle size: `npm run analysis`
    - results will be in the `analysis` folder
- Start storybook locally: `npm run storybook`
- Build storybook (for updating Github page): `npm run build-storybook`    
    - **NOTE:** both storybook files and rerunning rollup build live reload when changes are made under the lib folder
- Upload built components to S3 (personal bucket required): `node uploadWidgets.js`
    - **NOTE:** `ACCESS_KEY`, `SECRET_KEY`, `S3_ENDPOINT`, and `BUCKET` env variables need to be set prior to upload

### Dev Notes:
- React and React-Dom dependencies are required once in the page using the widgets, see [example use file](componentUseExample.html)
- the rollup config looks for the `widget.jsx` file under each component directory to use as the starting point for that widget
- the Storybook stories are utilizing the rollup built JS file for each widget with pure HTML (no React in the stories)
- `.storybook/preview-body.html` and `.storybook/preview-head.html` files are hacks to inject the react and react-dom packages into storybook's rendering of components and a default div to use as the auto reloader
- the scripts  in the stories need to be annonymous functions so they rerun after a different story is chosen in the UI to ensure that it replaces the default widget div
- the JSX notes print out shows left double quotes `“` instead of the `&quot;` value due to being in a code block

### Credits
- the outline of the uploadWidgets.js script came from [this stackoverflow answer](https://stackoverflow.com/a/43663433)
