import { Wrapper, BackDrop } from './profileStyle';

import HeaderProfile from '../../components/header/HeaderProfile';

import ProFileInfo from '../../components/proFile/ProFileInfo';
import PhotoZoneList from '../../components/proFile/PhotoZonelist';
// import FeedBar from '../../components/proFile/Feedbar';
// import Nothing from '../../components/proFile/Nothing';

// import Feed from '../Home/HomeFeed';

import PhotoZoneModal from '../../components/modal/PhotoZoneModal/PhotoZoneModal';

import NavBar from '../../components/navBar/NavBar';

const ProFile = () => {
  return (
    <Wrapper>
      <BackDrop />

      <HeaderProfile />
      <ProFileInfo />
      <PhotoZoneList />

      {/* <FeedBar /> */}
      {/* <Nothing /> */}

      {/* <Feed /> */}

      <PhotoZoneModal />

      <NavBar />
    </Wrapper>
  );
};
export default ProFile;
