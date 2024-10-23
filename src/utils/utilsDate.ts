import { format } from "date-fns";

export function formatDateTime(dateString: string) {
  if (dateString != "") {
    const date = new Date(dateString);
    return format(date, "HH:mm - dd/MM/yyyy");
  }
  return dateString;
}
