import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { SimpleTableProps } from "./types";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import MovingIcon from "@mui/icons-material/Moving";
import { RiFileExcel2Line } from "react-icons/ri";

export default function SimpleTable<T extends Record<string, any>>({
  data,
  columns,
  title,
}: SimpleTableProps<T>) {

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  // const tableState = useMemo(() => data, [data]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="w-full flex flex-col ">
      <div className="w-full pr-[0.5px] bg-teal-700 border-b border-b-gray-200">
        <div className=" flex items-center  ml-[0.5px]">
          <div className="w-1/2   p-3">
            <h1 className="font-semibold text-gray-200">{title}</h1>
          </div>
          <div className="w-1/2 p-3  flex justify-between gap-4">
            <div className="flex w-1/2  items-center justify-end">
              <button className="text-gray-200">
                <RiFileExcel2Line className="text-xl" />
              </button>
            </div>
            <input
              type="text"
              className="outline-none py-1 px-3 text-sm w-1/2"
              placeholder="Search"
              onChange={(e) => setFiltering(e.target.value)}
            />
          </div>
        </div>
      </div>
      <table className="table-auto">
        <thead className="bg-teal-700 text-gray-200 font-semibold">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <td
                  onClick={header.column.getToggleSortingHandler()}
                  key={header.id}
                  className="p-2 border border-teal-700 hover:bg-teal-600"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() ? (
                    header.column.getIsSorted() === "asc" ? (
                      <MovingIcon color="action" />
                    ) : (
                      <TrendingDownIcon color="action" />
                    )
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr className="hover:bg-gray-300 text-sm" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  className="p-2 border-b border-r border-l border-teal-700"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full flex text-xs items-center">
        <div className="w-1/2 flex items-center justify-between gap-4 p-4">
          <span className="page-info">
            {"Page: "}
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <label>
            Page Size:{" "}
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              className="outline-none"
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex w-1/2 justify-end text-xs select-none">
          <div className="flex items-center gap-1">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="bg-teal-700 text-gray-200 font-semibold p-2 w-[5rem]"
            >
              Previous
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="bg-teal-700 text-gray-200 font-semibold p-2 w-[5rem]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
