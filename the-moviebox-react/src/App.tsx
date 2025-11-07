import { MovieContent } from "./cases_movies/components/movie.content"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { Navbar } from "./components/layout/navbar"

function App() {

  return (
    <>
      <Header />
      <main>
        <Navbar />
        <MovieContent />
      </main>  
      <Footer />
    </>
  )
}

export default App