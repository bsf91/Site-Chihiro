import { src, dest, watch, series, parallel } from "gulp";
import sass from "gulp-sass";
import dartSass from "sass";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import htmlmin from "gulp-htmlmin";

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

function minifyHtml() {
    return src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(dest("dist"));
}

function monitorar() {
    watch("src/scss/**/*.scss", compilaSass);
    watch("src/*.html", minifyHtml);
}

// Exporta as tasks para rodar em série e paralelamente:
export default series(parallel(compilaSass, minifyHtml), monitorar);
