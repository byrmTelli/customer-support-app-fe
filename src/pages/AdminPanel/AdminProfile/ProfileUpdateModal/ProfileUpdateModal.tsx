import { Controller, useForm } from "react-hook-form";
import Modal from "../../../../components/Modal/Modal";
import { Input } from "../../../../components/Input";
import { useState } from "react";
import { apiUser } from "../../../../store/api/enhances/enhancedApiUser";
import { UpdateProfileModalProps } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileUpdateFormSchema } from "./constants";
import { toast } from "react-toastify";
import { convertBlobToBase64 } from "../../../../utils/utilsImage";
import { useAppDispatch } from "../../../../store/hooks";
import { updateUserProfile } from "../../../../store/slices/user/userSlice";
import useSetSafeTimeout from "use-set-safe-timeout";
import { Spinner } from "../../../../components/Spinner";

export default function ProfileUpdateModal({
  ...props
}: UpdateProfileModalProps) {
  // Queries
  const getUserProfile = apiUser.useGetApiAuthGetUserProfileQuery();
  const userData = getUserProfile.data?.data;
  const [updateUser, updateUserMutation] =
    apiUser.usePutApiUserUpdateUserMutation();
  // States
  const setSafeTimeout = useSetSafeTimeout();
  const dispatch = useAppDispatch();
  const [imagePreview, setImagePreview] = useState<string>(
    userData?.profileImage ?? ""
  );
  // Forms
  const userFullName = userData?.fullName?.split(" ") || [];
  const form = useForm({
    defaultValues: {
      id: userData?.id ?? 0,
      username: userData?.username || "",
      name: userFullName[0] || "",
      surname: userFullName[1] || "",
      phone: userData?.phoneNumber ?? "",
      image: userData?.profileImage ?? "",
      adress: userData?.adress ?? "",
    },
    resolver: yupResolver(ProfileUpdateFormSchema),
  });
  //Handlers
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateButtonClick = async () => {
    const f = form.getValues();
    let userNewImage: string | undefined = "";

    if (typeof f.image === "string") {
      userNewImage = f.image;
    } else if (f.image instanceof File) {
      userNewImage = await convertBlobToBase64(f.image);
    }

    updateUser({
      updateUserRequestModel: {
        id: f.id ?? 0,
        username: f.username,
        name: f.name,
        surname: f.surname,
        phoneNumber: f.phone,
        address: f.adress,
        email: userData?.email ?? "",
        profileImage: userNewImage,
      },
    })
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        dispatch(
          updateUserProfile({
            username: f.username,
            fullName: `${f.name} ${f.surname}`,
            profileImage: userNewImage,
            phoneNumber: f.phone ?? "",
            adress: f.adress ?? "",
          })
        );

        setSafeTimeout(props.onClose, 500);
      })
      .catch((error) => {
        toast.error("Güncelleme başarısız.");
      });
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <Modal.Header>
        <h1>Update Profile</h1>
      </Modal.Header>
      <Modal.Content>
        <form
          onSubmit={form.handleSubmit(handleUpdateButtonClick)}
          className="w-full h-full"
        >
          <div className="grid grid-cols-2 grid-rows-5 gap-3  w-full">
            <div className="w-full grid grid-rows-5 col-span-1 row-span-5">
              <div className="row-span-4 flex items-center justify-center">
                <img
                  src={imagePreview}
                  className="size-[200px] object-cover rounded-full"
                />
              </div>
              <div className="row-span-1 flex flex-col items-center justify-center">
                <Controller
                  name="image"
                  control={form.control}
                  render={({ field }) => (
                    <input
                      type="file"
                      onChange={(e) => {
                        handleFileChange(e);
                        field.onChange(e.target.files?.[0]); // Form'un image alanını güncelle
                      }}
                      className="file:mr-4 file:w-full file:py-2 file:px-4 file:border file:border-teal-700 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-700 hover:file:text-gray-200"
                    />
                  )}
                />
              </div>
            </div>
            <div className="col-span-1 row-span-5 flex flex-col gap-2">
              <div className="row-span-1">
                <Controller
                  name="username"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      invalid={fieldState.error?.message}
                      label={"Username"}
                      disabled
                    />
                  )}
                />
              </div>
              <div className="">
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      invalid={fieldState.error?.message}
                      label={"Name"}
                    />
                  )}
                />
              </div>
              <div className="">
                <Controller
                  name="surname"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      invalid={fieldState.error?.message}
                      label={"Surname"}
                    />
                  )}
                />
              </div>
              <div className="">
                <Controller
                  name="adress"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      invalid={fieldState.error?.message}
                      label={"Adress"}
                    />
                  )}
                />
              </div>
              <div className="">
                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      invalid={fieldState.error?.message}
                      label={"Phone"}
                    />
                  )}
                />
              </div>
            </div>
            <div className="w-full col-span-2 flex">
              <button className="bg-teal-700 w-full p-2 text-gray-200 font-semibold flex items-center justify-center">
                {updateUserMutation.isLoading ? (
                  <Spinner color={"success"} />
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </Modal.Content>
    </Modal>
  );
}
