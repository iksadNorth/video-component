import Router from "./Router";
import ThemeProviderContext from "./components/Theme";

function App() {
  return (<>
    <ThemeProviderContext>
      <Router />
    </ThemeProviderContext>
  </>);
}

export default App;
