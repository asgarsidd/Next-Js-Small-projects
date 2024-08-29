import "./App.css";
import ProviderButton from "federation_provider/button";
import Navbar from "federation_provider/Navbar";
import SignIn from "federation_provider/signIn";
const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>
          This from here on this page only which one is consumer in this case:
        </h1>
      </div>
      <div>
        <SignIn />
        <p>This Sign page from another #project</p>
      </div>
    </>
  );
};

export default App;
