import { TabList, Tabs, Tab, TabPanel } from "../../../../components/Tab/Tab";

export default function DashboardTabs() {
  // States
  // Queries

  // Mutations

  return (
    <>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab index={0}>System Notifications </Tab>
          <Tab index={1}>Ticket Notifications </Tab>
        </TabList>
        <TabPanel index={0}>
          <h1>Tab Panel 1 </h1>
        </TabPanel>
        <TabPanel index={1}>
          <h1>Tab Panel 2</h1>
        </TabPanel>
      </Tabs>
    </>
  );
}
