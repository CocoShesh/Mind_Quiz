import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Categories from "./pages/categories/Categories";
import Difficulty from "./pages/Difficulty/Difficulty";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/results/Results";
function App() {
  return (
    <>
      <BrowserRouter>
        <main className="bg-[#dbdefd] min-h-screen w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/difficulty" element={<Difficulty />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="*">"404 Not Found!"</Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
