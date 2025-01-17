import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cowwithtag.jpg" width={200} />
            <div>
              <h5> CS1233 HTML and CSS </h5>
              <p className="wd-dashboard-course-title">
                Front end software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cowlicking.jpg" width={200} />
            <div>
              <h5> CS1235 Javascript/Typescript </h5>
              <p className="wd-dashboard-course-title">
                Back end software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/algorithms.jpg" width={200} />
            <div>
              <h5> CS1236 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Algorithms  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/teslabot.jpg" width={200} />
            <div>
              <h5> CS1237 AI Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Artificial Intelligence  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/smallboxes.jpg" width={200} />
            <div>
              <h5> CS1238 Distributed Systems </h5>
              <p className="wd-dashboard-course-title">
                Java the class  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/noideas.jpg" width={200} />
            <div>
              <h5> CS1239 I ran out of classes </h5>
              <p className="wd-dashboard-course-title">
                Learn to improvise  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}