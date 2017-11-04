## What is this?
This is a basic project setup for custom web assets, it features a set of commonly used utility functions and (eventually) common styles for quicker turn-around and improved consistency.

It is setup to use Webpack to compile your Single Page App (SPA) into a package that can be deployed to a public facing server and generate an embed code that can be used in Methode articles


## How do I use it?
**Pre-requisite** You must have Node JS installed. if you're not sure open your terminal and type `node -v` to get the installed version number. I recommend at least v8.4.0 as there are additional features I'd like to add that make use of it's new features.

If it displays an error message and not a version number then head to `nodejs.org` and download the newest stable version.


### Getting started

**Install all dependancies**

- Open terminal and run  `npm install`. 

**Set the project details**

- Open src/config.json; 
- Update the projectName - this will be used to name the div wrappering our app and generate unique css classnames
- Update server path (this can be done later). This will be used to generate embed and preview output 
- Back to the terminal and run `npm start`. visit `localhost:8080` in your browser to see the default layout.


### Your first change
The layout is controlled from the `srclayout.js` file. If you've not used ES2015's string templates the syntax can look a bit funky. 

All of our HTML is written here (we will cover composing templates later), go ahead, add a par of text and take a look at your browser; You'll notice that as you make changes they update into the browser automatically. 

If you quit your terminal you will need to re-run `npm start` to start this hot-reloading service again.

## Let's add some styles
Open `src/app.sass` and add a new class `.myNewClass` with some style changes.

Now go back to your layout and add that class to one of the elements in the template. Nothing happen?

This app makes use of CSS Modules which means we need to add our class names slightly differently: 

	`<h1 class="${Styles.myNewClass}">Hello world</h1>`

Whoah, what's all this? At the top of the file we import the app.sass file 



