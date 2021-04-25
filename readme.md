# Oberin World Map

This is an alpha build of the Oberin world map. There will be very little new feature support coming to this version of the map. Testing and educational purposes only.

## Created with Electron and Zee's Map

This application was designed by Zee using Zee's Map, and packaged into Electron.js a library for building JavaScript based applications by Cryssandria.

## Start up process:

The project was built from the ground up using the following commands:

### `npm init -y`

initialize NPM.

### `npm i --save-dev Electron`

installs Electron as a dev dependency.

### `npm i --save-dev @electron-forge/cli`

installs Electron-Forge.

### `npm i --save source-map-support`

installs source-map-support library (required for electron-forge).

### `npx electron-forge import`

imports electron application into electron forge workflow.

After you install NPM you should be able to run npm start to begin the platform through your ide. To build the application, run `npx electron-forge import` then `npm run make`.

## Run commands

### `npm start`

starts the application in development mode.

### `npm run make`

builds the application into a binary .exe file.
