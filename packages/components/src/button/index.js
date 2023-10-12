import _Button from "./button.vue";
const withInstall = (comp) => {
    comp.install = (app) => {
        const name = comp.name;
        //注册组件
        app.component(name, comp);
    };
    return comp;
};
export const Button = withInstall(_Button);
export default Button;