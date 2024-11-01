import { customerSupportAppApi } from "./customerSupportAppApi";

export const extendedCustomerSupportAppApi =
  customerSupportAppApi.injectEndpoints({
    endpoints: (build) => ({
      createTicket: build.mutation({
        query: (formData: FormData) => ({
          url: "/api/Ticket/CreateTicket",
          method: "POST",
          body: formData,
        }),
        invalidatesTags: ["GetTicketsOfUser"],
      }),
    }),
    overrideExisting: false,
  });

export const { useCreateTicketMutation } = extendedCustomerSupportAppApi;
