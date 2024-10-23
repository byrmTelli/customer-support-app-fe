import { TicketStatus } from "../store/api/generated/generatedApiTicket";

export function ticketStatus(ticketStatus: TicketStatus | 0) {
  switch (ticketStatus) {
    case 1:
      return "Pending";
    case 2:
      return "Cancelled";
    case 3:
      return "Completed";
    default:
      return "Unknown";
  }
}
