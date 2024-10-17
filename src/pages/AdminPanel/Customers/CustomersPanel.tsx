import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import DeleteButton from "../../../components/Buttons/DeleteButton/DeleteButton";
import InspectButton from "../../../components/Buttons/InspectButton/InspectButton";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { customers } from "./constants";

export default function CustomersPanel() {
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
              header: "User",
              accessorFn: (cell) => {
                return `${cell.firstName} ${cell.lastName}`;
              },
            },
            {
              header: "Email",
              accessorFn: (cell) => cell.email,
            },
            {
              header: "Kayıt Tarihi",
              accessorFn: (cell) => cell.registeredAt,
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
          data={customers}
        />
      </div>
    </div>
  );
}
