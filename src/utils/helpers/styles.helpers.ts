import { kebabCase } from "lodash-es";
/**
 * The css way of naming classes is to use kebab-case naming scheme.
 * Wrap the styles object with this class to enable calling this classes with camelCase
 */
export function kamelStyles(styles: { [prop: string]: string }) {
  return new Proxy(styles, {
    get: function (target, prop, receiver) {
      if (typeof prop === "string") {
        return target[
          prop
            .split("_")
            .map((s) => kebabCase(s))
            .join("_")
        ];
      }

      return Reflect.get(target, prop, receiver);
    },
  });
}
