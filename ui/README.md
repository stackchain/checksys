## Setting up your instance

If you want to create your own checklists, you need to be the owner of the contract.
In order to do that you need specify the contract address editing the file `.env`

```javascript
REACT_APP_CONTRACT_LOCAL=0x9df474a009399a5bf96544207346302fff3d98ca
```

You might also want to deploy it on your own addresses for kovan, rinkeby or ropsten, it is inside the `src/logic/apis/contracts`.
No other testnet is supported so far.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Todo

1. i18n.
2. Storybook.
3. Tests E2E, Units.
4. Typechecking prop-types or flow.
5. Optimize the load of the data (atm it is fetch all at once).