import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body {
  min-height: 100%;
}

body {
  background-color: white;
  display: flex;
  justify-content: center;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: #222;
  font-family: Quicksand, Helvetica Neue, Helvetica,Arial,sans-serif;
  font-size: 14px;
}

button {
  outline: none;
  cursor: pointer;
}

#root {
  width: 100%;
}
`
