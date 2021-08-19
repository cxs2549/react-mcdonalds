import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #333;
    }

    main {
        margin-top: 56px;
    }

    svg, button, a {
        cursor: pointer;
    }
    button {
				background-color: #f8af2e;
				color: inherit;
				text-transform: capitalize;
				padding: .65rem 1.25rem;
				border: none;
				border-radius: 5px;
				font-size: 94%;
				@media (min-width: 1024px) {
					padding: .65rem 1.75rem;
					font-size: 108%;
				}
			}
    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style-type: none;
    }
   
`

export default GlobalStyles
