import { BsEnvelopeArrowDownFill } from "react-icons/bs";
import { TabList, Tabs, Tab, TabPanel } from "../../../../components/Tab/Tab";
import { formatDateTime } from "../../../../utils/utilsDate";
import { apiNotification } from "../../../../store/api/enhances/enhancedApiAdmin copy";
import { CustomerProfileTabsProps } from "./types";
import { useNavigate } from "react-router-dom";

export default function CustomerProfileTabs({
  userId,
}: CustomerProfileTabsProps) {
  // States
  const navigate = useNavigate();
  // Queries
  const ticketNotificationtsQuery =
    apiNotification.useGetApiNotificationGetTicketNotificationOfUserQuery({
      userId: userId,
    });
  const systemNotificationsQuery =
    apiNotification.useGetApiNotificationGetSystemNotificationsQuery();
  // Mutations
  const ticketNotificationts = ticketNotificationtsQuery.data?.data ?? [];
  const systemNotifications = systemNotificationsQuery.data?.data ?? [];

  return (
    <>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab index={0}>
            System Notifications ({systemNotifications.length})
          </Tab>
          <Tab index={1}>
            Ticket Notifications ({ticketNotificationts.length})
          </Tab>
        </TabList>
        <TabPanel index={0}>
          {systemNotifications.map((item, key) => (
            <div
              key={key}
              className="w-full flex border border-gray-300 p-4 text-sm hover:bg-gray-100"
            >
              <div className="w-3/4 grid grid-cols-3 items-center">
                <div className="flex gap-2 items-center col-span-1">
                  <BsEnvelopeArrowDownFill className="text-sky-600 text-lg mt-1" />
                  {item.title}
                </div>
                <div className="col-span-2">{item.message}</div>
              </div>
              <div>{formatDateTime(item.createdAt ?? "")}</div>
            </div>
          ))}
        </TabPanel>
        <TabPanel index={1}>
          {ticketNotificationts.map((item, key) => (
            <div
              key={key}
              onClick={() => navigate(`/ticket-status/${item.ticketId}`)}
              className="w-full flex border border-gray-300 p-4 text-sm hover:bg-gray-100"
            >
              <div className="w-3/4 grid grid-cols-3 items-center">
                <div className="flex gap-2 items-center col-span-1">
                  <BsEnvelopeArrowDownFill className="text-sky-600 text-lg mt-1" />
                  {item.title}
                </div>
                <div className="col-span-2">{item.message}</div>
              </div>
              <div>{formatDateTime(item.createdAt ?? "")}</div>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </>
  );
}
