import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css"
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, updateCourse } from "./reducer";

export default function Kambaz() {
  const { courses } = useSelector((state: any) => state.courseReducer);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const dispatch = useDispatch();

  return (
    <div id="wd-kambaz"> 
      <KambazNavigation />         
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<ProtectedRoute>
            <Dashboard 
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={() => {dispatch(addNewCourse(course))}}
              updateCourse={() => {dispatch(updateCourse(course))}}/></ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
        </Routes>
      </div>           
    </div>
);}
