import { MovieContent } from "./cases_movies/components/movie.content";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Navbar } from "./components/layout/navbar";
import {Highlight} from "./components/layout/highlight";

function App() {
  return (
    <>

      <main className="min-h-screen">
      <Header />
        <Highlight />
        <Navbar />
        <MovieContent />
      </main>
      <Footer />
    </>
  );
}

export default App;
