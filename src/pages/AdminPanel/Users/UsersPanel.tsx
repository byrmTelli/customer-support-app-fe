import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import DeleteButton from "../../../components/Buttons/DeleteButton/DeleteButton";
import InspectButton from "../../../components/Buttons/InspectButton/InspectButton";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { apiUser } from "../../../store/api/enhances/enhancedApiUser";
import { customers } from "../Customers/constants";

export default function UsersPanel() {
  // States
  // Queries
  const getHelpdesksQuery =
    apiUser.useGetApiUserGetHeldesksProfileListForAdminPanelQuery();

  // Memo
  const helpdeskUserList = getHelpdesksQuery.data?.data ?? [];
  // Forms
  // Handlers
  return (
    <div className="w-full h-full">
      <BreadCrum />
      <div className="p-4">
        <SimpleTable
          title="Users"
          columns={[
            {
              header: "ID",
              accessorFn: (cell) => cell.id,
            },
            {
              header: "Full Name",
              accessorFn: (cell) => cell.fullName,
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
              header: "Role",
              accessorFn: (cell) => cell.role?.name,
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
          data={helpdeskUserList}
        />
      </div>
    </div>
  );
}
