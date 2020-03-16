import Head from 'next/head'

function Layout(props) {
    return (
      <div className="App App-header">
      <Head>
          <title>Untitled Guidelines</title>
      </Head>
        {props.children}
        <style jsx global>{`
        .App {
            text-align: center;
        }

        .App-header {
            background-color: #fff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            font-size: calc(8px + 2vmin);
            color: #000;
        }

        body {
            margin: 0;
            font-family: 'Roboto Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: 'Buenard', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
            font-weight: 400;
            font-size: calc(50px + 2vmin);
            line-height: 1;
            margin: 10px 0;
        }

        a {
            text-decoration: none;
            margin: 0 20px;
            color: #000;
            cursor: pointer;
        }

        a:hover {
            border-bottom: 2px solid black;
        }

        code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                monospace;
        }
        `}</style>
      </div>
    )
  }
  export default Layout
