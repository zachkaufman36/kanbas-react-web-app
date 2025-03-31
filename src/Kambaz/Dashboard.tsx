import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteCourse, enroll, unenroll } from "./reducer";
import { useDispatch } from "react-redux";
import EditProtection from "./Account/EditProtection";
import { useState } from "react";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse, updateCourse }: {
    courses: any[]; 
    course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    updateCourse: () => void; }
  ) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const dispatch = useDispatch();
  const [enrolling, setEnrolling] = useState(false);

  function ButtonsForTypeOfUser() {
    if (currentUser.role === "FACULTY") {
      return (<h5> New Course <button className="btn btn-primary float-end"
        id="wd-add-new-course-click"
        onClick={addNewCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
        onClick={updateCourse} id="wd-update-course-click">
        Update
        </button></h5>)
    } else if (currentUser.role === "STUDENT") {
      return (<button className="btn btn-primary float-end"
        id="wd-add-new-course-click"
        onClick={() => {setEnrolling(!enrolling); console.log(enrolling)}} > Enrollment </button>)
    } else {
      return 
    }
  }

  type user = {
    _id: string,
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    role: string;
    loginId: string;
    section: string;
    lastActivity: string;
    totalActivity: string }

    type course = {
      _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    department: string;
    credits: number;
    description: string }

  function EnrollorUnEnroll({ user, course }: { user: user; course: course}) {

      return (
          <div
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
          <Card.Body className="card-body">
            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{course.description}</Card.Text>
            <Button variant="primary">Go</Button>
        <button onClick={(event) => {
          event.preventDefault();
          dispatch(enroll({userId: user._id, courseId: course._id}));
        }} className="btn btn-success float-end"
        id="wd-delete-course-click">
        Enroll
        </button>
        </Card.Body>
        </div>)

      
    }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <ButtonsForTypeOfUser /><br />
      <EditProtection>
        <FormControl value={course.name} className="mb-2" 
          onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <FormControl as = "textarea" value={course.description} rows={3} 
          onChange={(e) => setCourse({ ...course, description: e.target.value }) } /><hr />
      </EditProtection>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4" >
          {courses
.map((course) => (
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
                <EnrollorUnEnroll user={currentUser} course={course}/>
                <EditProtection>
                <button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id));
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
                </button>

                <button id="wd-edit-course-click"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                  className="btn btn-warning me-2 float-end" >
                  Edit
                </button>
                </EditProtection>
                </Card>
          </Col>
          ))}
        </Row>
      </div>
    </div>
);}