import BreadCrum from "../../../components/BreadCrum/BreadCrum";
import UpdateModalButton from "../../../components/Buttons/UpdateModalButton/UpdateModalButton";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { Tab, TabList, TabPanel, Tabs } from "../../../components/Tab/Tab";
import { apiNotification } from "../../../store/api/enhances/enhancedApiAdmin copy";
import { RxUpdate } from "react-icons/rx";
import { formatDateTime } from "../../../utils/utilsDate";
import Button from "../../../components/Buttons/Button/Button";
import { RiInformation2Line } from "react-icons/ri";
import CreateNewSystemNotificationModal from "./CreateNewSystemNotificationModal/CreateNewSystemNotificationModal";
import { useState } from "react";

export default function NotificationsPage(){
    // States
    const [isCreateSysNotfModalOpen,setIsCreateSysNotfModalOpen] = useState(false);

    // Queries
    const systemNotificationsQuery = apiNotification.useGetApiNotificationGetSystemNotificationsQuery();
    const ticketNotificationsQuery = apiNotification.useGetApiNotificationGetAllTickeTNotificationsQuery();
    
    // Mutations
    const systemnotificationData = systemNotificationsQuery.data?.data ?? [];
    const ticketNotificationData = ticketNotificationsQuery.data?.data ?? [];

    // Handlers

    return <div className="h-full">
        <BreadCrum/>
        {isCreateSysNotfModalOpen && (
            <CreateNewSystemNotificationModal isOpen ={isCreateSysNotfModalOpen} onClose={() => setIsCreateSysNotfModalOpen(false)}/>
        )}
        <div className="w-full min-h-96">
            <Tabs>
                <TabList>
                    <Tab index={0}>System Notifications</Tab>
                    <Tab index={1}>Ticket Notifications</Tab>
                </TabList>
                <TabPanel index={0}>
                        <div className="w-full py-4">
                            <Button onClick={() => setIsCreateSysNotfModalOpen(true)} icon={<RiInformation2Line/>} title="Send New System Notifications"/>
                        </div>
                        <SimpleTable
                            title="System Notification Table"
                            data={systemnotificationData}
                            columns={[
                                {
                                    header:"Title",
                                    accessorFn:(cell) => cell.title
                                },
                                {
                                    header:"Message",
                                    accessorFn:(cell) => cell.message
                                },
                                {
                                    header:"Date",
                                    accessorFn:(cell) => formatDateTime(cell.createdAt ?? "")
                                },
                                {
                                    header:"Actions",
                                    cell:() => (
                                        <div className="w-full">
                                            <UpdateModalButton 
                                                icon={<RxUpdate />} 
                                                className=""
                                            />
                                        </div>
                                    )
                                },
                            ]}
                        />
                </TabPanel>
                <TabPanel index={1}>
                        <SimpleTable
                            title="Ticket Notifications Table"
                            data={ticketNotificationData}
                            columns={[
                                {
                                    header:"Title",
                                    accessorFn:(cell) => cell.title
                                },
                                {
                                    header:"Message",
                                    accessorFn:(cell) => cell.message
                                },
                                {
                                    header:"Date",
                                    accessorFn:(cell) => formatDateTime(cell.createdAt ?? "")
                                },
                                {
                                    header:"Actions",
                                    cell:() => (
                                        <div className="w-full">
                                        </div>
                                    )
                                },
                            ]}
                        />
                </TabPanel>
            </Tabs>
        </div>
    </div>
}