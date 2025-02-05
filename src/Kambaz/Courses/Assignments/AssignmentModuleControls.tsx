import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentModuleControls() {
  return (
    <div className="float-end">
        {/*Change checkmark to a percentage bubble*/}
        <span className="wd-rounded-corners-all-around 
        wd-border-thick wd-border-solid 
        wd-padding-thin" style={{ padding : "8px" }}>
        40% of Total</span>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div> );}