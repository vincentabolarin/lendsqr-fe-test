declare module '*.svg' {
  const src: string
  export const ReactComponent: unknown
  export default src
}
declare module '*.png' {
  const src: string
  export default src
}
type CSSModuleClasses = { readonly [key: string]: string }

declare module '*.module.css' {
  const classes: CSSModuleClasses
  export default classes
}

declare module '*.module.scss' {
  const classes: CSSModuleClasses
  export default classes
}

declare module '*.scss' {
  const css: { [key: string]: string };
  export default css;
}

declare module '*.sass' {
    const css: { [key: string]: string };
    export default css;
}