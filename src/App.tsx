import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Card } from './components/Card';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <h1 className="container p-4 text-5xl bg-sky-900 text-sky-50 font-bold text-center">Cookie Run 🍪</h1>

        <header>
          Info of the player
        </header>

        <section>
          Characters (Cookies)
        </section>

        <main>
          <Card />
        </main>

        <section>
          Card options
        </section>

        <footer>
          Socials
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App