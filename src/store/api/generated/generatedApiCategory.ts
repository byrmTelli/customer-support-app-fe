import { customerSupportAppApi as api } from "../customerSupportAppApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiCategoryGetCategories: build.query<
      GetApiCategoryGetCategoriesApiResponse,
      GetApiCategoryGetCategoriesApiArg
    >({
      query: () => ({ url: `/api/Category/GetCategories` }),
    }),
    getApiCategoryGetCategoryById: build.query<
      GetApiCategoryGetCategoryByIdApiResponse,
      GetApiCategoryGetCategoryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Category/GetCategoryById`,
        params: {
          id: queryArg.id,
        },
      }),
    }),
    postApiCategoryCreateCategory: build.mutation<
      PostApiCategoryCreateCategoryApiResponse,
      PostApiCategoryCreateCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Category/CreateCategory`,
        method: "POST",
        body: queryArg.createCategoryRequestModel,
      }),
    }),
    deleteApiCategoryDeleteCategory: build.mutation<
      DeleteApiCategoryDeleteCategoryApiResponse,
      DeleteApiCategoryDeleteCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Category/DeleteCategory`,
        method: "DELETE",
        params: {
          id: queryArg.id,
        },
      }),
    }),
    putApiCategoryUpdateCategory: build.mutation<
      PutApiCategoryUpdateCategoryApiResponse,
      PutApiCategoryUpdateCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Category/UpdateCategory`,
        method: "PUT",
        body: queryArg.updateCategoryRequestModel,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedCategory };
export type GetApiCategoryGetCategoriesApiResponse =
  /** status 200 OK */ CategoryViewModelListIDataResultRead;
export type GetApiCategoryGetCategoriesApiArg = void;
export type GetApiCategoryGetCategoryByIdApiResponse =
  /** status 200 OK */ CategoryViewModelIDataResultRead;
export type GetApiCategoryGetCategoryByIdApiArg = {
  id?: number;
};
export type PostApiCategoryCreateCategoryApiResponse =
  /** status 204 No Content */ CategoryViewModelIDataResultRead;
export type PostApiCategoryCreateCategoryApiArg = {
  createCategoryRequestModel: CreateCategoryRequestModel;
};
export type DeleteApiCategoryDeleteCategoryApiResponse =
  /** status 204 No Content */ CategoryViewModelIDataResultRead;
export type DeleteApiCategoryDeleteCategoryApiArg = {
  id?: number;
};
export type PutApiCategoryUpdateCategoryApiResponse =
  /** status 200 OK */ CategoryViewModelIDataResultRead;
export type PutApiCategoryUpdateCategoryApiArg = {
  updateCategoryRequestModel: UpdateCategoryRequestModel;
};
export type CategoryViewModelListIDataResult = {};
export type CategoryViewModel = {
  id?: number;
  name?: string | null;
};
export type CategoryViewModelListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: CategoryViewModel[] | null;
};
export type CategoryViewModelIDataResult = {
  data?: CategoryViewModel;
};
export type CategoryViewModelIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: CategoryViewModel;
};
export type CreateCategoryRequestModel = {
  name?: string | null;
  creator?: string | null;
};
export type UpdateCategoryRequestModel = {
  id?: number;
  name?: string | null;
};