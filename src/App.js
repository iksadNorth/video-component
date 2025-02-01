import Proxy from "./Proxy";
import Router from "./Router";
import ThemeProviderContext from "./components/Theme";

function App() {
  return (<>
    <ThemeProviderContext>
      <Proxy>
        <Router />
      </Proxy>
    </ThemeProviderContext>
  </>);
}

export default App;
