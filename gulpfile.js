import { src, dest, watch, series } from "gulp";
import sass from "gulp-sass";
import dartSass from "sass";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";

const sassCompiler = sass(dartSass);

function compilaSass() {
    return src("src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sassCompiler().on("error", sassCompiler.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.write("."))
        .pipe(dest("dist/css"));
}

function monitorar() {
    watch("src/scss/**/*.scss", compilaSass);
}

export default series(compilaSass, monitorar);
