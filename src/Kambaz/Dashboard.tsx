import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { enroll, unenroll } from "./reducer";
import { useDispatch } from "react-redux";
import EditProtection from "./Account/EditProtection";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Dashboard(
    { courses, enrolling, setEnrolling, course, setCourse, addNewCourse, updateCourse, deleteCourse, updateEnrollment }: {
    courses: any[]; 
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    updateCourse: () => void;
    deleteCourse: (courseId: any) => void
    updateEnrollment: (courseId: string, enrolled: boolean) => void ; }
  ) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  function ButtonsForTypeOfUser({ enrolling, setEnrolling }: { enrolling: boolean, setEnrolling: (value: boolean) => void }) {
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
        onClick={() => {setEnrolling(!enrolling)}}> Enrollment </button>)
    } else {
      return 
    }
  }
  
  function EnrollorUnEnroll({ enrolling, course }: {enrolling: boolean; course: any}) {
    if (!course) {
      return <div>Loading course...</div>;
    }
    if (enrolling) {
      if (!course.enrolled) {
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
          updateEnrollment(course._id, !course.enrolled);
        }} className="btn btn-success float-end"
        id="wd-delete-course-click">
        Enroll
        </button>
        </Card.Body>
        </div>)
      } else {
        return (
          <Link to={`/Kambaz/Courses/${course._id}/Home`}
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
          <Card.Body className="card-body">
            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{course.description}</Card.Text>
            <Button variant="primary">Go</Button>
        <button onClick={(event) => { 
          event.preventDefault(); 
          updateEnrollment(course._id, !course.enrolled);
        }} className="btn btn-danger float-end"
        id="wd-delete-course-click">
        Unenroll
        </button>
        </Card.Body>
        </Link>
        )
      } 
    } else {
      return (
        <Link to={`/Kambaz/Courses/${course._id}/Home`}
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
          <Card.Body className="card-body">
            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{course.description}</Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Link>
      )
    }
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <ButtonsForTypeOfUser enrolling={enrolling} setEnrolling={setEnrolling} /><br />
      <EditProtection>
        <FormControl value={course.name} className="mb-2" 
          onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <FormControl as = "textarea" value={course.description} rows={3} 
          onChange={(e) => setCourse({ ...course, description: e.target.value }) } /><hr />
      </EditProtection>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4" >
          {Array.isArray(courses) ? courses.map((course) => (
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
                <EnrollorUnEnroll enrolling={enrolling} course={course}/>
                <EditProtection>
                <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
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
          )) : <p>Loading courses...</p>}
        </Row>
      </div>
    </div>
);}