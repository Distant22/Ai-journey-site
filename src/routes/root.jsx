import TopBar from "../components/topbar";
import SearchBox from "../components/searchBox";
import { useState } from "react";
import ChatBox from "../components/ChatBox";
import { BsPersonCircle } from 'react-icons/bs';
import { IconContext } from "react-icons";

export default function Root() {

    // 儲存登入狀態
    const [register, setRegister] = useState(false)

    // 處理登入 / 登出的跳出窗格
    const[modal, setModal] = useState(false);
    const[isLogin, setIsLogin] = useState(false);
    const handleLogin = () => {
      console.log("改變，目前為",isLogin)
      setIsLogin(!isLogin)
      setModal(true)
    }

    // 收藏頁的預設資料
    const[marks, setMarks] = useState([
      { name: '圓山大飯店' },
      { name: '木柵動物園' },
      { name: '士林夜市' },
      { name: '東門市場' },
      { name: '芝山數位藝術中心' },
      { name: '大稻埕碼頭' },
      { name: '內湖科技園區' },
      { name: '松菸文創園區' }
    ])

    // 確認使用者要前往登入 / 收藏 / 搜尋 / 小幫手哪一個頁面
    const [num, setNum] = useState(0);
    const handleNumChange = (newNum) => {
      setNum(newNum);
    };

    return (
      <>
        <TopBar onPageChange={handleNumChange} />
        { num === 0 ? (
          <div>
            <SearchBox />
          </div>
        ) : num === 1 ? (
          <div>
            <div class="h-[calc(100vh-8rem)] w-full items-center justify-center flex">
              <div class="h-[85%] w-3/4 bg-searchBox rounded-xl p-8">
                <div class="h-full w-full rounded-xl flex justify-center bg-gray-100">
                  <ChatBox />
                </div>
              </div>
            </div>
          </div>
        ) : num === 2 ? (
          <>
            { isLogin ? (
              <div class="h-[calc(100vh-8rem)] w-full items-center justify-center flex">
                <div class="h-[85%] w-2/3 bg-searchBox rounded-xl p-8 font-bold text-base flex space-y-4">
                <IconContext.Provider value={{ size: '92px' }}><BsPersonCircle /></IconContext.Provider>
                  <div class="flex flex-col w-full ml-4">
                    <p class="text-2xl">Tourist</p>
                    <p>ID：30482340</p>
                  </div>
                  <div class="h-full w-full flex items-end justify-end p-4">
                    <p onClick={() => handleLogin()} class="btn w-[6rem]">登出</p>
                  </div>
                </div>
              </div>
            ) : (
              <div class="h-[calc(100vh-8rem)] w-full items-center justify-center flex">
                <div class="h-[85%] w-1/3 bg-searchBox rounded-xl p-8 font-bold text-base flex flex-col items-center justify-center space-y-8">
                  <p class="text-xl">{ register ? "註冊" : "登入"}</p>
                  <input 
                    class="w-full h-[3rem] min-h-[3rem] bg-white rounded-full px-8 font-bold border-transparent"
                    placeholder="帳號"
                  />
                  <input 
                    class="w-full h-[3rem] min-h-[3rem] bg-white rounded-full px-8 font-bold border-transparent"
                    placeholder="密碼"
                    type="password"
                  />
                  <div class="flex space-x-6 pt-8">
                    <p onClick={ register ? () => setRegister(false) : () => setRegister(true)} class="btn w-[6rem]">{ register ? "取消" : "註冊"}</p>
                    <p onClick={ register ? () => setRegister(false) : () => handleLogin()} class="btn w-[6rem]">{ register ? "確認" : "登入"}</p>
                  </div>
                </div>
              </div>
            )}
            
            <input type="checkbox" id="errorModal" className="modal-toggle" checked={modal} />
              <label onClick={() => setModal(!modal)} className="modal cursor-pointer">
              <label className="modal-box max-w-[25%] h-[15%] font-bold space-y-4 flex justify-center items-center">
                  <p class="text-lg">{ isLogin ? '登入成功！' : '登出成功！'}</p>
              </label>
            </label>
        </>
        ) : (
          <>
            { isLogin ? (
              <div class="h-[calc(100vh-8rem)] w-full items-center justify-center flex">
                <div class="h-[85%] w-2/3 bg-searchBox rounded-xl p-8 font-bold text-base flex flex-col space-y-4">
                  <p class="text-2xl">收藏</p>
                  <div class="overflow-y-scroll h-[95%] bg-white rounded-xl w-full p-2 space-y-3">
                    {marks.map((mark,index) => (
                      <p class="w-full h-[6rem] rounded-xl bg-gray-100 p-4 flex items-center">{ mark.name }</p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div class="h-[calc(100vh-8rem)] w-full items-center justify-center flex">
                <div class="h-[85%] w-2/3 bg-searchBox rounded-xl p-8 font-bold text-base flex flex-col space-y-4 items-center justify-center">
                  <p class="text-2xl">尚未登入</p>
                  <p>登入以啟用收藏功能！</p>
                </div>
              </div>
            )}
          </>
        )}
      </>
    );
}