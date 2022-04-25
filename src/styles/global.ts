import times from 'fonts/times.ttf';
import timesBold from 'fonts/times-bold.ttf';
import timesBoldItalic from 'fonts/times-bold-italic.ttf';
import timesItalic from 'fonts/times-italic.ttf';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'Times';
        src: url(${times}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'TimesBold';
        src: url(${timesBold}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'TimesItalic';
        src: url(${timesItalic}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'TimesBoldItalic';
        src: url(${timesBoldItalic}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    body {
        font-family: 'Times', 'TimesBold', 'TimesItalic', 'TimesBoldItalic', sans-serif;
        padding: 0;
        margin: 0;
    }

    /* a {
        color: inherit;
        text-decoration: none;
    }

    * {
       box-sizing: border-box;
    } */
`;
