/**
 * @file Integration and automation of babel and eslint
 * @author Archit
 */

import gulp from "gulp";
import shell from "gulp-shell";
import rimraf from "rimraf";
import run from "run-sequence";
import watch from "gulp-watch";
import server from "gulp-live-server";

const paths = {
  src: ["./src/**/*.js"],
  destination: "./dist",
};

gulp.task("default", (cb) => {
  run("server", "build", "watch", cb);
});

gulp.task("build", (cb) => {
  run("clean", "lint", "babel", "restart", cb);
});

gulp.task("clean", (cb) => {
  rimraf(paths.destination, cb);
});

gulp.task("babel", shell.task(["babel --copy-files --out-dir dist --ignore *.test.js src"]));

gulp.task("lint", shell.task(["eslint src/**"], { ignoreErrors: true }));

let express;

gulp.task("server", () => {
  express = server.new(paths.destination);
});

gulp.task("restart", () => {
  express.start.bind(express)();
});

gulp.task("watch", () => watch(paths.src, () => {
  gulp.start("build");
}));
