import { Button } from "react-bootstrap";

export default function AssignmentEditorButtons() {
    return (
    <div id="wd-modules-controls" className="text-nowrap">
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-assignment-btn"> 
            Save
        </Button>
        <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-cancel-assignment-btn"> 
            Cancel
        </Button>
    </div>
    );}