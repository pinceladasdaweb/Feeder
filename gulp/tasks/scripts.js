import config from '../config';
import pkg from '../../package';

import gulp from 'gulp';
import util from 'gulp-util';
import header from 'gulp-header';
import path from 'path';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import notify from 'gulp-notify';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

const PATH = {
    src: path.join(config.root.src, config.tasks.scripts.path, `/**/*.${config.tasks.scripts.extensions}`),
    dest: path.join(config.root.dest, config.tasks.scripts.path)
}

const banner = [
  '/*! ',
    '<%= pkg.name %> ',
    'v<%= pkg.version %> | ',
    '(c) ' + new Date().getFullYear() + ' <%= pkg.author %> |',
    ' <%= pkg.repository %>',
  ' */',
  '\n'
].join('');

export function scriptsTask () {
    browserify({
        debug: true,
        entries: path.join(config.root.src, config.tasks.scripts.path, 'feeder.js'),
        standalone: 'Feeder'
    })
    .transform(babelify, { presets: ['es2015'], plugins: ['add-module-exports', 'transform-es2015-modules-umd'] })
    .bundle()
    .on('error', e => util.log(e))
    .pipe(source('feeder.js'))
    .pipe(buffer())
    .pipe(gulp.dest(PATH.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg }))
    .pipe(notify({
        onLast: true,
        title: 'Task complete!',
        message: 'Finished compiling and uglifying scripts.'
    }))
    .pipe(gulp.dest(PATH.dest))
}

gulp.task('scripts', scriptsTask)