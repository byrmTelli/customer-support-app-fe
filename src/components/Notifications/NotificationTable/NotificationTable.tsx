import { useState } from "react";
import { NotificationTableProps } from "./types";

export default function NotificationTable({... props}:NotificationTableProps){
    // States
    const [currentPage,setCurrentPage] = useState(0);
    const [pageItemCount,setPageItemCount] = useState(5);
    const [totalPage,setTotalPage] = useState(0);
    // Queries
    // Handlers

    if(props.children && props.children.length > 0){
        setTotalPage(props.children.length / pageItemCount);
    }

    return <div>
        <h1>Notification table</h1>
        <div>
         {
            // Buraya data map edilecek 
         }
        </div>
        <div className="">
            <div>Page {currentPage} / {totalPage}</div>
            <select onChange={(e) => setPageItemCount(Number(e.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
            </select>
            <button className="p-2 w-[4rem]" onClick={() => currentPage > 0 ? setCurrentPage(currentPage-1): null}>Previous</button>
            <button className="p-2 w-[4rem]" onClick={() => currentPage < totalPage ? setCurrentPage(currentPage+1): null}>Next</button>
        </div>
    </div>
}