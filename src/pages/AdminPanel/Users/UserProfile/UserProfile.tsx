import { useParams } from "react-router-dom";
import { apiUser } from "../../../../store/api/enhances/enhancedApiUser";
import BreadCrum from "../../../../components/BreadCrum/BreadCrum";
import UserTicketTable from "./UserTicketTable/UserTicketTable";
import UserProfileSideMenu from "./UserProfileSideMenu/UserProfileSideMenu";
import UserLogsTable from "./UserLogsTable/UserLogsTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { SlDocs } from "react-icons/sl";

export default function UserProfile() {
  // States
  const params = useParams();
  // Queries
  const getUsersProfile = apiUser.useGetApiUserGetUserProfileForAdminPanelQuery(
    { id: Number(params.id) }
  );
  const user = getUsersProfile.data?.data ?? {};

  return (
    <div className="w-full p-4">
      <BreadCrum />
      <div className="grid grid-cols-4 p-4 border border-gray-400 gap-2">
        <div className="col-span-1 w-full shadow m-4">
          <UserProfileSideMenu user={user} />
        </div>
        <div className="col-span-3 grid w-full p-4 gap-2">
          <Tabs className="p-4">
            <TabList>
              <Tab>
                <div className="flex items-center gap-2">
                  <SlDocs />
                  <h1>Tickets</h1>
                </div>
              </Tab>
              <Tab>Logs</Tab>
            </TabList>
            <div className="w-full p-4 row-span-2 shadow">
              <TabPanel className="">
                <UserTicketTable />
              </TabPanel>
              <TabPanel>
                <UserLogsTable />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
