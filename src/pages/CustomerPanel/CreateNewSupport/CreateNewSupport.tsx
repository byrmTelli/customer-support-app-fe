import { FaFileImport } from "react-icons/fa";
import {
  CreateNewSupportFormDefaults,
  CreateNewSupportFormModel,
  CreateNewSupportFormSchema,
} from "./types";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { BsFiletypePdf } from "react-icons/bs";
import { useAppSelector } from "../../../store/hooks";
import { apiCategory } from "../../../store/api/enhances/enhancedApiCategory";
import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Textarea } from "../../../components/Textarea";
import { apiTicket } from "../../../store/api/enhances/enhancedApiTicket";
import { extendedCustomerSupportAppApi } from "../../../store/api/extendedCSApi";

export default function CreateNewSupport() {
  // States
  const user = useAppSelector((state) => state.user);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // Queries
  const getCategoriesQuery = apiCategory.useGetApiCategoryGetCategoriesQuery();
  const categories = getCategoriesQuery.data?.data ?? [];

  const [createTicket, CreateTicketMutation] =
    extendedCustomerSupportAppApi.useCreateTicketMutation();
  // Forms
  const form = useForm<CreateNewSupportFormModel>({
    defaultValues: CreateNewSupportFormDefaults,
    resolver: yupResolver(CreateNewSupportFormSchema),
  });

  // Handlers
  const handleCreateNewSupportButtonClick = () => {
    const f = form.getValues();

    const formData = new FormData();
    formData.append("title", f.title || "");
    formData.append("content", f.content || "");
    formData.append("categoryId", f.category?.id?.toString() || "");
    formData.append("creatorId", user.id?.toString() || "");

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    createTicket(formData)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        form.reset();
        setSelectedFiles([]);
        apiTicket.util.invalidateTags(["GetTicketsOfUser"]);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  useEffect(() => {
    // selectedFiles değiştiğinde form value'yu günceller
    form.setValue("files", selectedFiles);
  }, [selectedFiles, form.setValue]);

  const removeFile = (index: number) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      return updatedFiles;
    });
  };

  return (
    <div>
      <BreadCrum />
      <div className="w-full flex justify-center px-4 py-4">
        <div className="lg:w-3/5 flex flex-col gap-4 py-4">
          <div className="p-2">
            <h1 className="font-semibold">Information</h1>
            <p className="mt-4">
              Yaşadığınız problemle ilgili bu sayfa üzerinde bir kayıt
              oluşturabilirsiniz. Kayıt oluşturulduktan sonra en kısa sürede
              destek birimi tarafından incelenerek email ya da sms aracılığıyla
              size durum hakkında bilgi verilecektir. Oluşturulan kayıtların
              destek birimimiz tarafından ortalama dönüş süresi{" "}
              <b>5 iş günüdür.</b> Yaşadığınız problem için çok üzgünüz, en kısa
              sürede çözülmesi için elimizden geleni yapacağız.
            </p>
            <div className="w-full flex items-center justify-end mt-4">
              <div className="flex flex-col items-center justify-end text-sm">
                <p>Customer Support Service</p>
                <p>Destek Ekibi</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={form.handleSubmit(handleCreateNewSupportButtonClick)}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold pl-2">Title</h1>
              <div className=" p-2 rounded-lg focus-within:border-teal-700">
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      invalid={fieldState.error?.message}
                      className="w-full outline-none p-1"
                      placeholder="Sorununuzu tanımlayıcı bir başlık girin."
                    />
                  )}
                />
              </div>
            </div>
            <div className="p-2">
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Select
                    {...field}
                    label={"Category"}
                    options={categories}
                    invalid={fieldState.error?.message}
                    getValueField={(cat) => String(cat.id)}
                    getLabelField={(cat) => String(cat.name)}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold pl-2">Description</h1>
              <div className=" p-2 flex flex-col gap-2 focus-within:border-teal-700">
                <p className="pl-2">
                  Sorununuzu aşağıda sizin için ayırılan alanda lütfen açık bir
                  şekilde tanımlayın.
                </p>
                <Controller
                  name="content"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Textarea
                      {...field}
                      invalid={fieldState.error?.message}
                      className="w-full min-h-48 p-2 outline-none"
                      placeholder="Sorununuzu burada belirtin."
                    />
                  )}
                />
              </div>
            </div>
            <div className="p-3 w-full">
              <h1 className="font-semibold text-gray-800 text-lg p-2">
                Files{" "}
                <span className="italic text-xs text-rose-500">
                  (You can only upload ".jpg, .png, .pdf" files.)
                </span>
              </h1>
              {selectedFiles.length > 0 ? (
                <div className="flex flex-wrap gap-4 mt-4">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="text-gray-600 flex flex-col gap-1 items-center space-x-2"
                    >
                      {file.type.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      ) : file.type === "application/pdf" ? (
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded">
                          <BsFiletypePdf className="text-2xl text-red-500" />
                        </div>
                      ) : (
                        <span className="text-gray-600 text-xs">
                          {file.name}
                        </span>
                      )}
                      <span className="text-xs text-gray-600">
                        {file.name.slice(0, 15)}
                      </span>
                      <button
                        className="text-red-500 text-xs mt-2"
                        onClick={() => removeFile(index)}
                      >
                        Kaldır
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-2 mt-4">
                  <h1 className="text-sm italic text-gray-600">
                    Henüz dosya yüklenmedi.
                  </h1>
                </div>
              )}
            </div>

            <div className="w-full">
              <Controller
                name="files"
                control={form.control}
                render={({ field }) => (
                  <>
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex items-center gap-4 justify-center px-4 py-2 bg-sky-800 text-white font-semibold rounded-lg hover:bg-teal-600"
                    >
                      <FaFileImport />
                      Dosya Seç
                    </label>
                    <Input
                      id="file-upload"
                      type="file"
                      multiple
                      onChange={(event) => {
                        handleFileChange(event);
                        field.onChange(event.target.files);
                      }}
                      onBlur={field.onBlur}
                      className="hidden"
                      accept=".jpg,.png,.pdf"
                    />
                  </>
                )}
              />
            </div>
            <div className="w-full">
              <button
                onClick={form.handleSubmit(handleCreateNewSupportButtonClick)}
                className="border border-teal-700 py-1 px-4 rounded-lg hover:bg-teal-600 hover:border-teal-600 bg-sky-800 font-semibold text-gray-200 w-full h-[2.3rem]"
              >
                Onayla
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
