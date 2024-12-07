import { useParams } from "react-router-dom";
import { apiUser } from "../../../../store/api/enhances/enhancedApiUser";
import BreadCrum from "../../../../components/BreadCrum/BreadCrum";
import UserProfileSideMenu from "./UserProfileSideMenu/UserProfileSideMenu";
import "react-tabs/style/react-tabs.css";
import AdminCustomerProfileTabs from "./UserProfileSideMenu/AdminCustomerProfileTabs/AdminCustomerProfileTabs";

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
          <AdminCustomerProfileTabs userId={user.id ?? 0} />
        </div>
      </div>
    </div>
  );
}
