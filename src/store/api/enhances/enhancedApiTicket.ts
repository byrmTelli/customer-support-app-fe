import { generatedTicket } from "../generated/generatedApiTicket";

export const apiTicket = generatedTicket.enhanceEndpoints({
  addTagTypes: ["GetTicketsOfUser", "GetTicketById","UpdateTicketStatus"],
  endpoints: {
    getApiTicketGetTicketById: {
      providesTags: ["GetTicketById"],
    },
    getApiTicketGetTicketsOfUser: {
      providesTags: ["GetTicketsOfUser"],
    },
    postApiCommentAddCommentToTicket: {
      invalidatesTags: ["GetTicketById"],
    },
    postApiTicketUpdateTicketStatus: {
      invalidatesTags:["GetTicketById"]
    }
  },
});
