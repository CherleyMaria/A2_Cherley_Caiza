/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyTableCmcaiza1 {
        "apiUrl": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyTableCmcaiza1Element extends Components.MyTableCmcaiza1, HTMLStencilElement {
    }
    var HTMLMyTableCmcaiza1Element: {
        prototype: HTMLMyTableCmcaiza1Element;
        new (): HTMLMyTableCmcaiza1Element;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-table-cmcaiza1": HTMLMyTableCmcaiza1Element;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyTableCmcaiza1 {
        "apiUrl"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-table-cmcaiza1": MyTableCmcaiza1;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-table-cmcaiza1": LocalJSX.MyTableCmcaiza1 & JSXBase.HTMLAttributes<HTMLMyTableCmcaiza1Element>;
        }
    }
}
