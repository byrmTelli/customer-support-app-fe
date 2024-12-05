import { customerSupportAppApi as api } from "../customerSupportAppApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiNotificationGetSystemNotifications: build.query<
      GetApiNotificationGetSystemNotificationsApiResponse,
      GetApiNotificationGetSystemNotificationsApiArg
    >({
      query: () => ({ url: `/api/Notification/GetSystemNotifications` }),
    }),
    postApiNotificationCreateSystemNotification: build.mutation<
      PostApiNotificationCreateSystemNotificationApiResponse,
      PostApiNotificationCreateSystemNotificationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Notification/CreateSystemNotification`,
        method: "POST",
        body: queryArg.createSystemNotificationRm,
      }),
    }),
    postApiNotificationCreateTicketNotification: build.mutation<
      PostApiNotificationCreateTicketNotificationApiResponse,
      PostApiNotificationCreateTicketNotificationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Notification/CreateTicketNotification`,
        method: "POST",
        body: queryArg.createTicketNotificationRm,
      }),
    }),
    getApiNotificationGetAllTickeTNotifications: build.query<
      GetApiNotificationGetAllTickeTNotificationsApiResponse,
      GetApiNotificationGetAllTickeTNotificationsApiArg
    >({
      query: () => ({ url: `/api/Notification/GetAllTickeTNotifications` }),
    }),
    getApiNotificationGetTicketNotificationOfUser: build.query<
      GetApiNotificationGetTicketNotificationOfUserApiResponse,
      GetApiNotificationGetTicketNotificationOfUserApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Notification/GetTicketNotificationOfUser`,
        params: {
          userId: queryArg.userId,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedNotification };
export type GetApiNotificationGetSystemNotificationsApiResponse =
  /** status 200 OK */ SystemNotificationVmListIDataResultRead;
export type GetApiNotificationGetSystemNotificationsApiArg = void;
export type PostApiNotificationCreateSystemNotificationApiResponse =
  /** status 200 OK */ IResultRead;
export type PostApiNotificationCreateSystemNotificationApiArg = {
  createSystemNotificationRm: CreateSystemNotificationRm;
};
export type PostApiNotificationCreateTicketNotificationApiResponse =
  /** status 200 OK */ IResultRead;
export type PostApiNotificationCreateTicketNotificationApiArg = {
  createTicketNotificationRm: CreateTicketNotificationRm;
};
export type GetApiNotificationGetAllTickeTNotificationsApiResponse =
  /** status 200 OK */ TicketNotificationVmListIDataResultRead;
export type GetApiNotificationGetAllTickeTNotificationsApiArg = void;
export type GetApiNotificationGetTicketNotificationOfUserApiResponse =
  /** status 200 OK */ TicketNotificationVmListIDataResultRead;
export type GetApiNotificationGetTicketNotificationOfUserApiArg = {
  userId?: number;
};
export type SystemNotificationVmListIDataResult = {};
export type SystemNotificationVm = {
  id?: number;
  title?: string | null;
  message?: string | null;
  createdAt?: string;
};
export type SystemNotificationVmListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: SystemNotificationVm[] | null;
};
export type IResult = {};
export type IResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
};
export type CreateSystemNotificationRm = {
  title?: string | null;
  message?: string | null;
  creatorId?: number;
};
export type TicketNotificationType = 1 | 2 | 3;
export type CreateTicketNotificationRm = {
  ticketId?: number;
  notificationType?: TicketNotificationType;
};
export type TicketNotificationVmListIDataResult = {};
export type TicketNotificationVm = {
  id?: number;
  title?: string | null;
  message?: string | null;
  createdAt?: string;
  ticketId?: number;
};
export type TicketNotificationVmListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: TicketNotificationVm[] | null;
};
