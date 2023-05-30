import { useState } from "react";
import { Link } from "react-router-dom";

export default function TopBar({onPageChange}) {

    const [page, setPage] = useState(0);

    const handlePage = () => {
      const newPage = page === 0 ? 1 : 0
      setPage(newPage)
      onPageChange (newPage)
    }

    return (
      <>
        <div class="h-32 bg-topbar flex items-center ">
        <Link to={{pathname: '/'}} class="w-[45rem] ml-10 text-3xl font-bold">
            你的 AI 旅遊小幫手
        </Link>
          <p onClick={handlePage} class={`cursor-pointer font-bold text-xl w-[12rem] h-full mb-4 flex items-end justify-end ${page === 0 ? "text-blue-500 duration-300" : ""}`}>搜尋</p>
          <p onClick={handlePage} class={`cursor-pointer font-bold text-xl w-[12rem] h-full mb-4 flex items-end justify-end ${page === 1 ? "text-blue-500 duration-300" : ""}`}>AI聊天機器人</p>
        </div>
      </>
    );
  }