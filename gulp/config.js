'use strict';

var config = {};

config.build = {
  uglify: true
};

config.srcPaths = {
  dir: './app',
  rootFiles: './app/*',
  allFiles: './app/**/*',
  index: './app/index.html',
  excludeIndex: '!./app/index.html',
  scss: './app/**/*.scss',
  js: './app/**/*.js',
  html: './app/**/*.html',
  views: './app/views/*.html',
  documents: './app/documents/**/*.*',
  images: './app/images/**/*.{svg,jpg,png,gif}'
};

config.destPaths = {
  dir: './dist',
  targetDir: './target',
  scriptsDir: './dist/scripts',
  stylesDir: './dist/styles',
  documentsDir: './dist/documents',
  fontsDir: './dist/fonts',
  imagesDir: './dist/images',
  viewsDir: './dist/views',

  appJsOutput: 'app.min.js',
  appStylesOutput: 'main.min.css',
  vendorScriptOutput: 'vendor.min.js',
  tempOutput: ['./.tmp', './dist', './target'],
  reportOutput: ['./_coverage', './_reports'],

  allFiles: './dist/**/*',
  allJs: './dist/**/*.js',
  allHtml: './dist/**/*.html',
  vendorScripts: './dist/**/vendor*.js',
  templatesScripts: './dist/**/templates*.js',
  appScripts: './dist/**/app*.js',
  stylesheets: './dist/**/*.css'
};

// Add vendor modules and fonts here
config.vendor = {
  scripts: [
    './node_modules/angular/angular.min.js',
    './node_modules/angular-animate/angular-animate.min.js',
    './node_modules/angular-aria/angular-aria.min.js',
    './node_modules/angular-cookies/angular-cookies.min.js',
    './node_modules/angular-messages/angular-messages.min.js',
    './node_modules/angular-resource/angular-resource.min.js',
    './node_modules/angular-sanitize/angular-sanitize.min.js',
    './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
    './node_modules/angular-ui-router/release/angular-ui-router.min.js',
    './node_modules/firebase/firebase.js',

    './js/jquery.min.js',
    './js/jquery.parallax-1.1.3.js',
    './js/jquery.counterup.min.js',
    // './js/jquery.prettyPhoto.js',
    './js/jquery.ajaxchimp.min.js',
    './js/jquery.ajaxchimp.langs.js',
    
    './js/bootstrap.min.js',
    './js/owl.carousel.js',
    './js/jquery.fitvids.js',
    './js/smoothscroll.js',
    
    './js/wow.min.js',
    './js/waypoints.min.js',
    './js/script.js',
    './js/type.js'
  ],
  fonts: [
    './node_modules/bootstrap-sass/assets/fonts/bootstrap/**/*.{eot,svg,ttf,woff,woff2}',
    './node_modules/font-awesome/fonts/**/*.{eot,svg,ttf,woff,woff2}'
  ],
  styles: [
    './node_modules/bootstrap-sass/assets/stylesheets',
    './node_modules/fontawesome/scss'
  ],
  excludeNodeModules: '!node_modules/**'
};

module.exports = config;
