import { Controller, useForm } from "react-hook-form";
import Modal from "../../../../components/Modal/Modal";
import { ASsignRoleModalProps } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { AssignRoleFormSchema } from "./constants";
import { Select } from "../../../../components/Select";
import { apiAdmin } from "../../../../store/api/enhances/enhancedApiAdmin";
import { toast } from "react-toastify";
import Button from "../../../../components/Buttons/Button/Button";

export default function AssignRoleModal({ ...props }: ASsignRoleModalProps) {
  // States

  // Queries
  const getRolesQuery = apiAdmin.useGetApiAdminGetRolesQuery();

  const [assignRole, assignRoleMutation] =
    apiAdmin.usePostApiAdminAssignRoleToUserMutation();
  // Mutations
  const roles = getRolesQuery.data?.data ?? [];
  // Form
  const form = useForm({
    defaultValues: {
      userId: 0,
      roleId: {},
    },
    resolver: yupResolver(AssignRoleFormSchema),
  });
  // Handlers

  const handleSubmitButtonClick = () => {
    const f = form.getValues();
    assignRole({
      userId: props.requestModel.id,
      roleId: Number(f.roleId.id),
    })
      .unwrap()
      .then((res) => {
        if (res.code == 200) {
          toast.success(res.message);
          props.onClose();
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally();
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <Modal.Header>
        <h1>Role Assignment</h1>
      </Modal.Header>
      <Modal.Content>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full h-1/3">
            <h1 className="text-xl text-red-500 font-semibold">
              <u>Information</u>
            </h1>
            <p className="italic">
              You will change users role by doing this action. User needs to
              relogin after this.
            </p>
          </div>
          <form
            className="w-full flex flex-col gap-2"
            onSubmit={form.handleSubmit(handleSubmitButtonClick)}
          >
            <Controller
              name="roleId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Select
                  {...field}
                  label={"Role"}
                  options={roles.filter(
                    (x) => x.name != props.requestModel.roleName
                  )}
                  invalid={fieldState.error?.message}
                  getValueField={(cat) => String(cat.id)}
                  getLabelField={(cat) => String(cat.name)}
                />
              )}
            />
            <div className="w-full">
              <Button
                title={"Submit"}
                type="submit"
                className="w-full h-[2.5rem]"
                varient="info"
                onClick={form.handleSubmit(handleSubmitButtonClick)}
              />
            </div>
          </form>
        </div>
      </Modal.Content>
    </Modal>
  );
}
