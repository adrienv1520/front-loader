/**
 * Head of the index HTML document
 */

const head = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Small Node.js app that loads a large list of contacts from a JSON file into a HTML dropdown component">
    <meta name="author" content="Adrien Valcke">
    <title>Front Loader</title>
  </head>
  <style>
    :root {
      --fontFamily: monospace;
      --fontSize: 1.4rem;
      --colorTextPrimary: rgb(219, 219, 219);
      --colorInputText: rgb(34, 34, 34);
      --colorBackgroundParams: whitesmoke;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      height: 100%;
      font-size: 62.5%;
    }

    body {
      height: 100%;
      margin: 0;
      padding: 0;
      background: -webkit-radial-gradient(center, darkred, black);
      background: -moz-radial-gradient(center, darkred, black);
      background: -o-radial-gradient(center, darkred, black);
      background: -ms-radial-gradient(center, darkred, black);
      background: radial-gradient(center, darkred, black);
      color: var(--colorTextPrimary);
      font-family: var(--fontFamily);
      font-size: var(--fontSize);
    }

    .wrapper {
      min-height: 100%;
      height: auto !important;
      height: 100%;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }

    label {
      font-size: 5rem;
      color: var(--colorBackgroundParams);
      margin-bottom: 5%;
    }

    .input-select {
      margin: 0;
      padding: 0.5rem;
      color: var(--colorInputText);
      font-family: inherit;
      font-size: var(--fontSize);
      font-weight: inherit;
      border: none;
      border-radius: 0.4rem;
      transition: box-shadow 300ms;
      background-color: var(--colorBackgroundParams);
    }

    .input-select:hover {
      box-shadow: 0.2rem 0.8rem 1.6rem black;
    }

    .input-select:focus {
      outline: none;
      box-shadow: 0.2rem 0.8rem 1.6rem black;
    }

    .hide-outline {
      color: transparent;
      text-shadow: 0 0 0 var(--colorInputText);
    }

    .hide-arrow {
      position: relative;
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: '';
    }
  </style>
  <body>
    <main class="wrapper">
      <label for="contacts">Contacts</label>
      <select id="type" class="input-select hide-outline hide-arrow" name="contacts">
`;

module.exports = head;
