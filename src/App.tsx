import "./App.css";
import { Blogpageheader } from "./components/Blogpageheader";
import { Header } from "./components/Header";
import PeopleBlogsSection from "./components/PeopleBlogsSection";

function App() {
  return (
    <div>
      <Header />
      <Blogpageheader />
      <PeopleBlogsSection />
    </div>
  );
}

export default App;
