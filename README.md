# Frontend Development Setup
This repo has a frontend development set up for all of my websites. I am making it public so that anyone who wants to start quickly can get benefit out of it. 

## Benefits 
 - Uses webpack and hot module replacement to make the development process easy and fast. 
 - Uses `dev.js` to serve the js and styles without reloading the browser in the development mode.
 - For the CSS, you can use variables, write nested css like scss/sass.
 - For the production mode, code splitting is implemented and the files are split and names using chunk hash. (It also splits the CSS files from js files)
 - For the production mode, css is minified, auto prefixed the different browser supports., etc.,
 -  You can use this setup with any of your development environment. 
 - It will work for django/wordpress as well. Style file has a comment which wordpress expects. 
 - Uses `dev.js`

## How to setup

    git clone https://github.com/davidrajdgl/frontend-development-setup.git

    cd frontend-development-setup
    npm install
    npm run dev

This code will run the `webpack-dev-server` watch your files in the current directory for any change and serve the js files 

    http://localhost:3000/dev.js
You can add this in your `index.html` or wherever your base file is there while you are in development mode. 

Once you are ready for production, you can run,

    npm run build

This code will build all the necessary files, splits the js into css and chunk files, and put it in the folder called `dist` in the current directory. (You can change this destination in `webpack.config.js`)

Currently, webpack proxy the 
`http://localhost:5500`.
You may change the port number accordingly in `webpack.config.js`. Most likely, you may have `http://localhost:8000` to be proxy.
