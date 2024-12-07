import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "../../../../../../components/Tab/Tab";
import { AdminCustomerProfileTabsProps } from "./types";
import SimpleTable from "../../../../../../components/SimpleTable/SimpleTable";
import { apiTicket } from "../../../../../../store/api/enhances/enhancedApiTicket";

export default function AdminCustomerProfileTabs({
  userId,
}: AdminCustomerProfileTabsProps) {
  // States
  // Queries
  const usersTicketsQuery = apiTicket.useGetApiTicketGetTicketsOfUserQuery({
    id: userId,
  });
  // Mutations
  const usersTicketsData = usersTicketsQuery.data?.data ?? [];

  return (
    <>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab index={0}>Tickets</Tab>
          <Tab index={1}>Activities</Tab>
        </TabList>
        <TabPanel className="h-48" index={0}>
          <SimpleTable
            title="Ticket History"
            columns={[
              {
                header: "No",
                accessorFn: (cell) => cell.id,
              },
              {
                header: "Title",
                accessorFn: (cell) => cell.title,
              },
              {
                header: "Status",
                accessorFn: (cell) => cell.status,
              },
              {
                header: "Category",
                accessorFn: (cell) => cell.category?.name ?? "",
              },
              {
                header: "Creator",
                cell: (cell) => (
                  <div className="p-2">
                    {cell.row.original.creator?.fullName}
                  </div>
                ),
              },
              {
                header: "Assigned to",
                cell: (cell) =>
                  cell.row.original.assignedTo != null ? (
                    <div className="p-2">
                      {cell.row.original.assignedTo?.fullName}
                    </div>
                  ) : (
                    <div className="p-2">
                      <span className="py-1 px-1 lg:px-3 rounded-lg bg-orange-400 font-semibold text-gray-200 text-xs">
                        Not Assigned
                      </span>
                    </div>
                  ),
              },
            ]}
            data={usersTicketsData}
          />
        </TabPanel>
        <TabPanel index={1}>
          <p className="italic calitalize p-4">
            Users ativities will be here soon...
          </p>
        </TabPanel>
      </Tabs>
    </>
  );
}
