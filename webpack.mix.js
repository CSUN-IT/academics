const mix = require('laravel-mix');

mix.sass('src/sass/academics.scss', 'dist/css');


// Needed for Windows Users for yarn run dev
mix.setPublicPath('./');