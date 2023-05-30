import TopBar from "../components/topbar";
import SearchBox from "../components/searchBox";
import { useState } from "react";
import ChatBox from "../components/ChatBox";

export default function Root() {

    const [num, setNum] = useState(0);

    const handleNumChange = (newNum) => {
      setNum(newNum);
    };

    return (
      <>
        <TopBar onPageChange={handleNumChange} />
        { num === 0 ? (
          <div class="bg-white">
            <SearchBox />
          </div>
        ) : (
          <div class="bg-white">
            <div class="h-[calc(100vh-8rem)] w-full items-center justify-center flex">
              <div class="h-[85%] w-3/4 bg-searchBox rounded-xl p-8">
                <div class="h-full w-full rounded-xl flex justify-center bg-gray-100">
                  <ChatBox />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
}