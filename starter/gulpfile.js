import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("build", shell.task("parcel build index.html"));
gulp.task("start", shell.task("parcel index.html"));
gulp.task("cypress", shell.task("npx cypress open"));

gulp.task("default", gulp.series("build", "start"));
