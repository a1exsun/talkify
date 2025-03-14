import React from "react";
import { Box } from '@app-launch-kit/components/primitives/box';
import HomestayInformationFold from "./HomestayInformationFold";
import KeepLearning from "./KeepLearning";

const MainContent = ({
  modalVisible,
  setModalVisible,
  setActiveTab,
  activeTab,
}: any) => {
  return (
    <Box className="flex-1 md:h-[calc(100vh-144px)] md:pr-16 md:pl-8 overflow-auto">
        {/* explore page main content header */}
        {/* explore page new this week fold 1 */}
        <KeepLearning />
        {/* explore page homestay info fold 2 */}
        <HomestayInformationFold />
    </Box>
  );
};
export default MainContent;
