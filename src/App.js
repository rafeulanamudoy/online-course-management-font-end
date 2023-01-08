import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/shared/Header/Header';
import ReadingHistory from './pages/ReadingHistory/ReadingHistory';

import Addproduct from "./pages/AddProduct/Addproduct";
import Deleteproduct from "./pages/Deleteproduct/Deleteproduct";
import Updateproduct from "./pages/Updateproduct/Updateproduct"
import CourseDetails from './pages/CourseDetails/CourseDetails';

function App() {
  return (
    <div className="App">



      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>} ></Route>

        <Route path='/readingHistory' element={<ReadingHistory></ReadingHistory>} ></Route>
        <Route path='/addCourse' element={<Addproduct></Addproduct>} ></Route>

        <Route path='/deleteCourse' element={<Deleteproduct></Deleteproduct>} ></Route>
        <Route path='/updateCourse' element={<Updateproduct></Updateproduct>} ></Route>
        <Route path='/courseDetails' element={<CourseDetails></CourseDetails>} ></Route>
      </Routes>


    </div>
  );
}

export default App;
