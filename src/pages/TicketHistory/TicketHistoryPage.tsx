import BreadCrum from "../../components/BreadCrum/BreadCrum";
import { supportRequests } from "../../components/SimpleTable/constants";
import SimpleTable from "../../components/SimpleTable/SimpleTable";

export default function TicketHistoryPage() {
  return (
    <div className="">
      <BreadCrum />
      <div className="w-full h-full flex justify-center pt-4">
        <div className="w-full flex flex-col items-center p-2">
          <div className="w-full p-2">
            <p>
              Bu sayfa üzerinde geçmiş destek kayıtlarınıza ulaşabilirsiniz.
            </p>
          </div>
          <div className="min-h-96 border border-gray-400 p-4 w-full">
            <SimpleTable
              title=""
              columns={[
                {
                  header: "No",
                  accessorFn: (cell) => cell.id,
                },
                {
                  header: "Title",
                  accessorFn: (cell) => cell.title,
                },
              ]}
              data={supportRequests}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
