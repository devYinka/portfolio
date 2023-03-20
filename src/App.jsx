import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import {
  SharedLayout,
  About,
  Resume,
  Portfolio,
  Contact,
  Error,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<About />} />
          <Route path='resume' element={<Resume />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
