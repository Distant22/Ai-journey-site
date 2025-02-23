import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill, BsPersonFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi' 
import { FaRobot } from 'react-icons/fa'
import { IconContext } from "react-icons";

export default function TopBar({onPageChange}) {

    // 選擇目前頁面
    const [page, setPage] = useState(0);
    // 處理頁面改變函式
    const handlePage = (num) => {
      setPage(num)
      onPageChange(num)
    }

    return (
      <>
        <div class="h-32 bg-[#5A7A45] flex text-white items-center w-full">
          <Link to={{pathname: '/'}} class="w-[45rem] ml-10 text-3xl font-bold">
               台北旅遊網<br /><p class="text-lg">依照需求推薦個人化旅程，推薦景點、當地天氣、行李內容一應俱全！</p>
          </Link>
          <IconContext.Provider value={{ size: '24px' }}>
            <div onClick={() => handlePage(3)} class={`${page === 3 ? "text-yellow-300" : ""} duration-300 absolute top-16 right-[20%]`}><BsFillBookmarkFill /></div>
            <div onClick={() => handlePage(2)} class={`${page === 2 ? "text-yellow-300" : ""} duration-300 absolute top-16 right-[15%]`}><BsPersonFill /></div>
            <div onClick={() => handlePage(0)} class={`${page === 0 ? "text-yellow-300" : ""} duration-300 absolute top-16 right-[10%]`}><BiSearch /></div>
            <div onClick={() => handlePage(1)} class={`${page === 1 ? "text-yellow-300" : ""} duration-300 absolute top-16 right-[5%]`}><FaRobot /></div>
          </IconContext.Provider>
        </div>
      </>
    );
  }