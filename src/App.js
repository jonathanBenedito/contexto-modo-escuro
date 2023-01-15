import './App.css';
import { ThemeProvider } from './contexts/theme-context';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { Card } from './components/card/card';

function App() {
  return (
    <ThemeProvider>
      <Card />
      <Card />
      <Card />
      <ThemeTogglerButton />
    </ThemeProvider>
  );
}

export default App;
