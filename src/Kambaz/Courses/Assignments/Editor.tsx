import { Col, Form, FormControl, Row } from "react-bootstrap";
import AssignmentEditorButtons from "./AssignmentEditorButtons";
import { useParams } from "react-router";
import { updateAssignment, addAssignment } from "./reducer";
import "./editor.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function AssignmentEditor({ cid }:
    {cid: string}
) {
    const { aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    let filteredAssignments = assignments.filter((assignment: any) => assignment._id === aid);
    const dispatch = useDispatch();
    function updateOrAdd({aid, title, course, release_date, due_date, points}:
        {aid: string; title: string; course: string; release_date: string; due_date: string; points: string}
    ) {
        if (aid === "createNew") {
            console.log("here");
            dispatch(addAssignment({title: title, course: course, release_date: release_date, due_date: due_date, points: points}))
        } else {
            console.log("there");
            dispatch(updateAssignment({_id: aid, title: title, course: course, release_date: release_date, due_date: due_date, points: points}))
        }
    }

    if (filteredAssignments.length === 0) {
        filteredAssignments = [{ _id: "createNew", title: null, course: null, release_date: null,  due_date: null, points: null}]
    } 

    const [assignmentTitle, setAssignmentTitle] = useState(filteredAssignments[0].title);
    const [assignmentRd, setAssignmentRd] = useState(filteredAssignments[0].release_date);
    const [assignmentDd, setAssignmentDd] = useState(filteredAssignments[0].due_date);
    const [assignmentPoints, setAssignmentPoints] = useState(filteredAssignments[0].points);
    console.log(assignmentTitle)

    return (
      <div id="wd-assignments-editor">
        
        <Form.Group as={Row} controlId="assignment-name" id="wd-name" className="mb-3">
            <Form.Label column sm={3}><b>Assignment Name</b></Form.Label>
            <Col sm={12}>
                <FormControl type="assignment-name" defaultValue={filteredAssignments[0].title} onChange={ (e) => setAssignmentTitle(e.target.value) } ></FormControl>
            </Col>
        </Form.Group>
        

        <Form.Group as={Row} controlId="assignment-description" id="wd-description" className="mb-3">
            <Col sm={12}>
                <FormControl as='textarea' style={{ height : "400px", resize: "none" }} defaultValue="Please enter assignment description here..."/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="Points-for-assignment" id="wd-points" align="right" className="mb-3">
            <Form.Label column sm={3}><b>Points</b></Form.Label>
            <Col sm="9">
                <FormControl type="point-entry" defaultValue={filteredAssignments[0].points} onChange={(e) => setAssignmentPoints(e.target.value)}></FormControl>
            </Col> 
        </Form.Group>

        <Form.Group as={Row} controlId="assignment-group" id="wd-group" align="right" className="mb-3">
            <Form.Label column sm={3}><b>Assignment Group</b></Form.Label>
            <Col sm={9}>
                <Form.Select>
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option selected value="MIDTERM">
                                MIDTERM</option>
                    <option value="FINAL">FINAL</option>
                </Form.Select>
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="display-grade" id="wd-display-grade-as" align="right" className="mb-3">
            <Form.Label column sm={3}><b>Display Grade as</b></Form.Label>
            <Col sm={9}>
                <Form.Select>
                    <option value="Percentage">Percentage</option>
                    <option value="Grade Point Average">Grade Point Average</option>
                    <option value="Total">Total</option>
                </Form.Select>
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="submission-type" id="wd-submission-type" align="right" className="mb-3">
            <Form.Label column sm={3}><b>Submission Type</b></Form.Label>
            <Col sm={9}>
                <Form.Group className="editor-border">
                <Form.Select className="mb-3">
                    <option value="Online">Online</option>
                    <option value="In Person">In Person</option>
                    <option value="Carrier Pidgeon">Carrier Pidgeon</option>
                </Form.Select>

                <Form.Group as={Row} controlId="submission-type" id="wd-submission-type" align="left" className="mb-3">
                    <Form.Label column sm={3}><b>Online Entry Options</b></Form.Label>
                    <Col sm={10}>
                        <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
                        <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
                        <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                        <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
                        <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" />
                    </Col>
                </Form.Group>
                </Form.Group>
                
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="submission-type" id="wd-submission-type" align="right" className="mb-3">
            <Form.Label column sm={3}><b>Assign</b></Form.Label>
            <Col sm={9}>
                <Form.Group className="editor-border">
                <Form.Group as={Row} controlId="assign-to" id="wd-assign-to" align="left">
                    <Form.Label column sm={3}><b>Assign to</b></Form.Label>
                    {/* How do I do this as a tag entry? */}
                    <Col sm={12}>
                        <Form.Control type="Select"></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="due-date" id="wd-due-date" align="left" className="md-3">
                    <Form.Label column sm={3}><b>Due</b></Form.Label>
                    <Col sm={12}>
                        <FormControl type="datetime" defaultValue={filteredAssignments[0].due_date} onChange={(e) => setAssignmentDd(e.target.value)}/>
                    </Col>

                    <Form.Group controlId="availability-dates" className="md-3">
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="available-from" id="wd-available-from" className="md-3">
                                    <Form.Label><b>Available From</b></Form.Label>
                                    <FormControl type="datetime" defaultValue={filteredAssignments[0].release_date} onChange={(e) => setAssignmentRd(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="available-until-date" id="wd-available-until" className="md-3">
                                    <Form.Label><b>Until</b></Form.Label>
                                    <Form.Control type="datetime" /> 
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form.Group>
                </Form.Group>
            </Col>
        </Form.Group>
        <hr />
        <AssignmentEditorButtons 
        cid={cid} 
        
        addAssignment={() => {console.log(assignmentTitle); (updateOrAdd({aid: aid ?? "createNew", title: assignmentTitle, course: cid, release_date: assignmentRd, due_date: assignmentDd, points: assignmentPoints}))}}/>
    </div>
  );} 