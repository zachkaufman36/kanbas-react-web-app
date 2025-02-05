import { FormControl, FormGroup, ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssigmentControls";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import AssignmentModuleControls from "./AssignmentModuleControls";
import { IoIosPaper } from "react-icons/io";
import "./index.css"
import AssingmentStatus from "./AssignmentStatus";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <div className="d-flex align-items-center gap-3 mb-4">
          <FormGroup className="mb-0 flex-grow-1" controlId="searchbar" id="wd-search-assignment">
          <BsSearch className="wd-zindex-bring-to-front position-absolute fs-3" style={{top: '11.3%', left: '15.5%'}}/>
            <FormControl 
              type="search" 
              placeholder="Search..." 
              className="form-control-lg ps-5" 
              style={{ position : "relative", zIndex : 2 }}
            />
          </FormGroup>
          
          <div className="flex-shrink-0">
            <AssignmentControls />
          </div>
        </div>
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> Assignments <AssignmentModuleControls /> </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> <IoIosPaper className="text-success me-2 fs-3"/> <a href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              A1 - ENV + HTML
              </a>
            <span><span id="wd-multiple-modules"> Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts</span> <AssingmentStatus /> </ListGroup.Item>
            </ListGroup>

            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> <IoIosPaper className="text-success me-2 fs-3"/> <a href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              A2 - CSS + BOOTSTRAP
              </a>
            <span><span id="wd-multiple-modules"> Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts</span> <AssingmentStatus /> </ListGroup.Item>
            </ListGroup>

            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> <IoIosPaper className="text-success me-2 fs-3"/> <a href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              A3 - JAVASCRIPT + REACT
              </a>
            <span><span id="wd-multiple-modules"> Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts</span> <AssingmentStatus /> </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  