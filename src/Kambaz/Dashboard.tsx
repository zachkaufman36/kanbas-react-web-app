import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4" >
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/cowwithtag.jpg" width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS1235 Typescript</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Backend Software Developer</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/algorithms.jpg" width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS1236 Algorithms</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Algorithms</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
              </Link>
            </Card>
          </Col>         
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/teslabot.jpg" width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS1237 AI Algorithms</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Introduction to AI</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/smallboxes.jpg" width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS1238 Distributed Systems</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Java the Class</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/fluffycow.jpg" width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS1239 I Ran out of Classes</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Learn to Improvise</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/NEU.png" width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS1240 Circuits and Signals</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Reaching Back to Undergrad</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
);}