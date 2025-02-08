import Proxy from "./Proxy";
import Router from "./Router";
import ThemeProviderContext from "./components/Theme";
import { Layout } from "./components/layout/Layout";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";

function App() {
    return (<>
        <ThemeProviderContext>
            <Proxy>
                <Layout>
                    <Header className="col-span-2" />
                    <SideBar/>
                    <Router />
                </Layout>
            </Proxy>
        </ThemeProviderContext>
    </>);
}

export default App;
