import {css} from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 600,
  smallMobile: 320,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media screen and (max-width: ${sizes[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `.join('');
  return acc;
}, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>);
