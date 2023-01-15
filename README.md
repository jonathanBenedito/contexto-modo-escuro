# Módulo - Context API 
📄 Link de acesso aos <a href="https://cord-delivery-7eb.notion.site/Context-API-b3d9d7f1c2a04e1ba05c9c2954a139f7">resumos</a>. 

🖼 Link de <a href="https://soft-mermaid-9bbefb.netlify.app/">demonstração</a>.

> Definição do Context
> 

```jsx
import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000000',
        background: '#eeeeee'
    },
    dark: {
        color: '#ffffff',
        background: '#000000'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
```

> Utilização do Context em um componente
> 

```jsx
function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
    </ThemeProvider>
  );
}
```

`useContext` → Serve para selecionar um context criado e herdar suas variáveis;

```jsx
export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Clique Aqui</Button>
        </div>
    )
}
```