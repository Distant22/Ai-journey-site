import { useState, useEffect } from "react";
import { getJourney } from "./getJourney";
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';

export default function Journey({result}) {
  const [journeys, setJourneys] = useState([]);
  const [mark, setMark] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openBox, setOpenBox] = useState(null);
  const [bang, setBang] = useState(false);
  const pullBox = (num) => {
    setOpenBox(num)
  }

  useEffect(() => {
    async function fetchData() {
      if(journeys.length === 0 && isLoading){
        try{
            const journeyList = await getJourney(result);
            setJourneys(journeyList);
            setIsLoading(false);
        } catch (FirebaseError){
          console.log("錯誤：",FirebaseError)
          setBang(true);
          setIsLoading(false);
        }
      }
    }
    fetchData();
  });


  return (
    <>
      {isLoading ? (
          <p className="text-lg p-8 font-bold text-gray-600">載入中...</p>
      ) : (
      <ul>
        {journeys.length === 0 && (setBang ? (
            <p class="p-8 text-2xl font-bold text-red-500">
              我們的資料庫爆了！<br />
              <p class="text-sm text-gray-500">抱歉，明天再來QQ<br />或是你可以先玩旁邊的AI小幫手功能</p>
            </p>
          ):(
            <p class="p-8 font-bold text-gray-600">
              找不到結果QQ<br /><br />
              請確認以下內容是否設定正確：<br/>
              1. 搜尋文字內容拼寫 <br />
              2. 網路狀態良好 <br />
            </p>
        ))}
        {journeys.map((journey,index) => (
          <div onClick={() => pullBox(index)} className={`${openBox === index ? "h-[20rem]" : "h-[10rem]"} w-1/1 duration-500 rounded-3xl bg-gray-300 my-2 mx-4 p-4 font-bold`}>
              <li key={`${journey.Id}-${journey.Name}`}>
                  { journey.Picture1 !== "" &&
                  <>
                    <div className="flex h-full items-start">
                      <div className="flex">
                        <img alt="journey-pic" src={journey.Picture1} className="h-[8rem] w-[12rem] rounded-2xl"></img>
                      </div>
                      <div className="w-full ml-4 h-[6rem]">
                        <div class="w-full h-[1.5rem] flex justify-end">
                          <p onClick={() => setMark(arr => [...arr, index])}>{ mark.includes(index) ? <BsFillBookmarkFill /> : <BsBookmark />}</p>
                        </div>
                        <div className="text-xl">{journey.Name}</div>
                        {/* <div className="text-sm text-gray-600">{journey.Add}</div> */}
                        <div className="line-clamp-2 mt-1 text-md text-gray-500">{journey.Toldescribe}</div>
                      </div>
                    </div>
                    { openBox === index ? 
                      <p class="font-bold p-4 flex flex-col h-[9rem] w-full bg-white my-4 rounded-xl overflow-y-scroll">
                        <p class="text-lg">景點介紹</p>
                        <p class="text-gray-600">{journey.Toldescribe}</p>
                      </p> 
                    : <></> }
                  </>
                  }
                  { journey.Picture1 === "" &&
                    <div className="flex">
                      <div className="h-[8rem] w-[12rem] rounded-2xl bg-gray-200 font-bold text-gray-600 text-sm flex justify-center items-center">
                        <p>未提供圖片</p>
                      </div>
                      <div className="w-full ml-4">
                        <div className="text-lg ">{journey.Name}</div>
                        <div className="text-sm text-gray-600">{journey.Add}</div>
                        <div className="line-clamp-2 mt-1">{journey.Toldescribe}</div>
                      </div>
                    </div>
                  }
              </li>
          </div>
        ))}
      </ul>
      )}
    </>
  );
}
