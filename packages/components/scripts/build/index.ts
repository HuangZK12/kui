import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
import gulpSass from 'gulp-sass';
import sassLang from 'sass';
const sass = gulpSass(sassLang);
//删除easyest

export const removeDist = () => {
  return delPath(`${pkgPath}/kui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/styles/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/kui/lib/src`))
    .pipe(dest(`${pkgPath}/kui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);