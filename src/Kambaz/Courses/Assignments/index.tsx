import { FormControl, FormGroup, ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssigmentControls";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import AssignmentModuleControls from "./AssignmentModuleControls";
import { IoIosPaper } from "react-icons/io";
import { useParams } from "react-router";
import "./index.css"
import AssingmentStatus from "./AssignmentStatus";
import { deleteAssignment }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import EditProtection from "../../Account/EditProtection";
import AssignmentProtection from "./AssignmentProtection";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  
  function AssignmentName({assignmentId, assignmentTitle}: {assignmentId: string; assignmentTitle: string}) {
    if (AssignmentProtection()) {
      return (<a href={`#/Kambaz/Courses/${cid}/Assignments/${assignmentId}`} className="wd-assignment-link" style={{ color: "black", textDecoration: "None"}}>
      <b>{assignmentTitle}</b>
    </a>)
    } else {
      return (<a className="wd-assignment-link" style={{ color: "black", textDecoration: "None"}}>
        <b>{assignmentTitle}</b>
      </a>)
    }
  }

  console.log(assignments)
    return (
      <div id="wd-assignments">
        <div className="d-flex align-items-center gap-3 mb-4">
          <FormGroup className="mb-0 flex-grow-1" controlId="searchbar" id="wd-search-assignment">
          <BsSearch className="wd-zindex-bring-to-front position-absolute fs-3" style={{top: '10.5%', left: '15.5%'}}/>
            <FormControl 
              type="search" 
              placeholder="Search..." 
              className="form-control-lg ps-5" 
              style={{ position : "relative", zIndex : 2 }}
            />
          </FormGroup>
          
          <div className="flex-shrink-0">
            <EditProtection>
            <AssignmentControls />
            </EditProtection>
          </div>
        </div>
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> Assignments <AssignmentModuleControls /> </div>
            { /* Ask about how to get the visual style that they want. Page 98 is an example */ }
            {assignments.filter((assignment:any) => assignment.course === cid).map((assignment: any) => (
              <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> <IoIosPaper className="text-success me-2 fs-3"/> 
              {/* <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link" style={{ color: "black", textDecoration: "None"}}>
                <b>{assignment.title}</b>
              </a> */}
              <AssignmentName assignmentTitle={assignment.title} assignmentId={assignment._id} />
              <span><span id="wd-multiple-modules"> Multiple Modules</span> | <b>Not available until</b> {assignment.release_date} | Due {assignment.due_date} | {assignment.points}</span> <AssingmentStatus assignmentId = {assignment._id}
              deleteAssignment={(assignmentId) => {dispatch(deleteAssignment(assignmentId));}}/> </ListGroup.Item>
            </ListGroup>
            ))}
          </ListGroup.Item> 
        </ListGroup>
      </div>
  );}
  