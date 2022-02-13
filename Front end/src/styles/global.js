import { createGlobalStyle } from "styled-components";

const bgPath = './images/bg3.jpg';

const CreateStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: url(${bgPath}) #333;
        font-family: 'Roboto', sans-serif;
        background-attachment: fixed;
        background-size: 700px;
    }

`;

export default CreateStyle;
