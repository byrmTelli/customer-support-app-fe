import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import DeleteButton from "../../../components/Buttons/DeleteButton/DeleteButton";
import InspectButton from "../../../components/Buttons/InspectButton/InspectButton";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { apiUser } from "../../../store/api/enhances/enhancedApiUser";
import { formatDateTime } from "../../../utils/utilsDate";
import { customers } from "./constants";

export default function CustomersPanel() {
  // States
  // Queries
  const getCustomersProfileListQuery =
    apiUser.useGetApiUserGetCustomerProfileListForAdminPanelQuery();

  const customersProfileList = getCustomersProfileListQuery.data?.data ?? [];
  // Forms
  // Handlers
  return (
    <div className="w-full">
      <BreadCrum />
      <div className="p-4">
        <SimpleTable
          title="Customers"
          columns={[
            {
              header: "ID",
              accessorFn: (cell) => cell.id,
            },
            {
              header: "Username",
              accessorFn: (cell) => cell.username,
            },
            {
              header: "Email",
              accessorFn: (cell) => cell.email,
            },
            {
              header: "Status",
              accessorFn: (cell) => cell.isApproved,
            },
            {
              header: "Phone",
              accessorFn: (cell) => cell.phoneNumber,
            },
            {
              header: "Register Date",
              accessorFn: (cell) => formatDateTime(cell.createdAt ?? ""),
            },
            {
              header: "Actions",
              cell: () => (
                <div className="flex gap-2">
                  <InspectButton color="primary" />
                  <DeleteButton className="" />
                </div>
              ),
            },
          ]}
          data={customersProfileList}
        />
      </div>
    </div>
  );
}
