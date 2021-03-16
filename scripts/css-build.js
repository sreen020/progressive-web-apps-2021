import gulp from "gulp";
import concat from "gulp-concat";

gulp
  .src([
    "./src/css/game.css",
    "./src/css/home.css",
    "./src/css/loader.css",
    "./src/css/nav.css",
    "./src/css/players.css",
    "./src/css/style.css",
  ])
  .pipe(concat("index.css"))
  .pipe(gulp.dest("./public/css"));
