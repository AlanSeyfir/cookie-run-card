import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Card } from './components/Card';
import { Typography } from '@mui/material';

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
        <Typography variant='h2' className='bg-sky-500 p-4 text-sky-50 text-center'>Cookie Run 🍪</Typography>

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