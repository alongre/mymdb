import styled, { css } from 'styled-components'
import { reduce } from 'lodash';


const sizes = {
    desktop: 1280,
    tablet: 720,
    mobile: 500,
}

export const media = Object.keys(sizes).reduce(
    (acc, label) => {
      acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
        css`
          @media screen and (max-width: ${sizes[label]}px) {
            ${css(literals, ...placeholders)};
          }
        `.join("");
      return acc;
    },
    {} as Record<
      keyof typeof sizes,
      (l: TemplateStringsArray, ...p: any[]) => string
    >,
  );
  


