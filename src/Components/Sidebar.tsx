import { getCategories } from "../Api/Queries/getCategories";

export default function Sidebar() {
    const response = getCategories();
    console.log(response);

    return(
        <div>Sidebar</div>
    );
}