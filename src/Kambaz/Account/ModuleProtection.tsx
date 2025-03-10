import { useSelector } from "react-redux";
export default function ModuleProtection({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer)
    if (currentUser.role === "FACULTY") {
        console.log(currentUser.role);
        return children;
    } else {
        return;
    }
}