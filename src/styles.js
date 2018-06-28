import { injectGlobal } from 'styled-components';

export default function setup() {
   injectGlobal`
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
   `;
}