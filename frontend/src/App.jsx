import "./App.css";
import Layout from "./layout/Layout";
import { AuthContextProvider } from '../src/context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
    <Layout />
    </AuthContextProvider>
  );
}

export default App;
