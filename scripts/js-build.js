import gulp from "gulp";
import concat from "gulp-concat";
import minify from "gulp-minify";

gulp
  .src(["./src/js/*.js"])
  .pipe(concat("bundle.js"))
  .pipe(minify())
  .pipe(gulp.dest("./public/js"));
