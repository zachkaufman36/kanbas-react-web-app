import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function AssingmentStatus() {
    return (
        <div className="float-end">
            <GreenCheckmark />    
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}