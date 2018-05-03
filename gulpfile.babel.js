import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import cssnano from 'gulp-cssnano';
import browserSync from 'browserSync';
import nodemon from 'gulp-nodemon';
import plumber from 'gulp-plumber';

bSync = browserSync.create();