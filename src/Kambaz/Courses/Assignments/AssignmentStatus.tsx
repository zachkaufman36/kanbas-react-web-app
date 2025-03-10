import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

function deletePopup(
    { assignmentId, deleteAssignment }:
    { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
    if (confirm("Are you sure you want to delete this assignment?")) {
        deleteAssignment(assignmentId)
    }   
}
export default function AssingmentStatus(
    { assignmentId, deleteAssignment }:
    { assignmentId: string; updateAssignment: (assignmentId: string) => void; deleteAssignment: (assignmentId: string) => void; }
    ) {
    return (
        <div className="float-end">
            <GreenCheckmark />  
            <FaTrash className = "text-danger me-1" onClick={() => deletePopup({assignmentId, deleteAssignment})}/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}