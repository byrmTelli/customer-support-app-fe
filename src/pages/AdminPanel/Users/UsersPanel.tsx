import { useNavigate } from "react-router-dom";
import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import DeleteButton from "../../../components/Buttons/DeleteButton/DeleteButton";
import InspectButton from "../../../components/Buttons/InspectButton/InspectButton";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { apiUser } from "../../../store/api/enhances/enhancedApiUser";
import { useState } from "react";
import Button from "../../../components/Buttons/Button/Button";
import AssignRoleModal from "../Customers/AssignRoleModal/AssignRoleModal";

export default function UsersPanel() {
  // States
  const navigate = useNavigate();
  const [selectedUsersRole, setSelectedUsersRole] = useState({
    id: 0,
    roleName: "",
  });
  const [isAssignRoleModalOpen, setIsAssignRoleModalOpen] = useState(false);
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
      {isAssignRoleModalOpen && (
        <AssignRoleModal
          requestModel={selectedUsersRole}
          isOpen={isAssignRoleModalOpen}
          onClose={() => setIsAssignRoleModalOpen(false)}
        />
      )}
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
              cell: (cell) => (
                <div className="flex gap-2">
                  <InspectButton
                    color="primary"
                    onClick={() => {
                      navigate(`/admin/user/${cell.row.original.id}`);
                    }}
                  />
                  <Button
                    onClick={() => {
                      setSelectedUsersRole({
                        id: cell.row.original.id ?? 0,
                        roleName: cell.row.original.role?.name ?? "",
                      });
                      setIsAssignRoleModalOpen(true);
                    }}
                    color="primary"
                    title="Manage Role"
                    size="sm"
                  />
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
