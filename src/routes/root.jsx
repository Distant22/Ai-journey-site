import TopBar from "../components/topbar";
import SearchBox from "../components/searchBox";
import TravelSpot from "../components/travelSpot";
import Hotel from "../components/hotel";

export default function Root() {
    return (
      <>
        <TopBar/>
        {/* <SearchBox/> */}
        <Hotel />
        <div id="topbar">
          
        </div>
        <div id="detail">

        </div>
      </>
    );
  }