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

        <header className='m-4'>
          Info of the player
        </header>

        <section className='m-4'>
          Characters (Cookies)
        </section>

        <main>
          <Card />
        </main>

        <section className='m-4'>
          Card options
        </section>

        <footer className='m-4'>
          Socials
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App