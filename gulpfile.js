var gulp = require('gulp');
// css 压缩工具
var cleanCSS = require('gulp-clean-css');
// js 压缩工具
var jsmin = require('gulp-jsmin');
// img 压缩工具
var imagemin = require('gulp-imagemin');
// html 压缩工具
var htmlmin = require('gulp-htmlmin');
// 文件合并工具
var concat = require('gulp-concat');
// 重命名工具
var rename = require('gulp-rename');


// 创建一个默认任务
gulp.task('default',['htmlmin','cleanCSS','jsmin','imagemin']);


// 压缩js 任务
gulp.task('jsmin', function () {
    return gulp.src('src/js/**/*.js')      // 找到src下面的'N'级目录任意名称的'.js'文件
        .pipe(jsmin())                  // 压缩
        .pipe(rename({suffix: '.min'})) // 修改名称为 'xxx.min.js'
        .pipe(gulp.dest('dist/js'));       // 输出目录为dist
});

// 压缩css 任务
gulp.task('cleanCSS', function () {
    return gulp.src('src/styles/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'})) // 修改名称为 'xxx.min.css'
        .pipe(gulp.dest('dist/styles'));
});


// 压缩html 任务
gulp.task('htmlmin', function () {
    return gulp.src(['src/*.html','src/**/*.html'])
            .pipe(htmlmin({
                collapseWhitespace: true
            }))
        .pipe(gulp.dest('dist'));
});

// 压缩图片任务
gulp.task('imagemin', function () {
    return gulp.src('src/images/**/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/images'));
});


// 合并 任务
gulp.task('concat', function () {
    return gulp.src('src/js/**/*.js') // or ->  gulp.src(['./lib/file3.js', './lib/file1.js', './lib/file2.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
});






