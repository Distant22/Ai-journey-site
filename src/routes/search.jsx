import TopBar from "../components/topbar";
import Hotel from "../components/hotel";
import SelectBox from "../components/selectBox";
import Journey from "../components/journey";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ChatBox from "../components/ChatBox";

export default function Root() {

  const result = useLocation();
  const [selectedCheckbox, setSelectedCheckbox] = useState("site");

  const handleCheckboxChange = (name) => {
    console.log(result, result.state)
    setSelectedCheckbox(name);
  };

  const [num, setNum] = useState(0);

  const handleNumChange = (newNum) => {
    setNum(newNum);
  };

  return (
    <div>
      <TopBar onPageChange={handleNumChange} />
      { num === 0 ? (
        <>
          <SelectBox onCheckboxChange={handleCheckboxChange} />
          {selectedCheckbox === "site" && (
            <Journey result={result.state.message} />
          )}
          {selectedCheckbox === "hotel" && (
            <Hotel result={result.state.message} />
          )}
        </>
      ) : num === 1 ? (
        <div class="bg-white">
          <div class="h-[calc(100vh-8rem)] w-full items-center justify-center flex">
            <div class="h-[85%] w-3/4 bg-searchBox rounded-xl p-8">
              <div class="h-full w-full rounded-xl flex justify-center bg-gray-100">
                <ChatBox searchMsg={result.state} />
              </div>
            </div>
          </div>
        </div>
      ) : num === 2 ? (
        <>收藏頁</>
      ) : (
        <>登入</>
      )}
    </div>
  );
}
