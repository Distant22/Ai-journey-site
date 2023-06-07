import TopBar from "../components/topbar";
import SearchBox from "../components/searchBox";
import { useState } from "react";
import ChatBox from "../components/ChatBox";

export default function Root() {

    const [num, setNum] = useState(0);

    const [register, setRegister] = useState(false)

    const[modal, setModal] = useState(false);
    const[isLogin, setIsLogin] = useState(false);

    const handleNumChange = (newNum) => {
      setNum(newNum);
    };

    const handleLogin = () => {
        setModal(true)
    }

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
                <div class="h-[85%] w-2/3 bg-searchBox rounded-xl p-8 font-bold text-base flex flex-col space-y-4">
                  <p class="text-2xl">Tourist</p>
                  <p>ID：30482340</p>
                  <div class="h-full w-full flex items-end justify-end p-4">
                    <p class="btn w-[6rem]">登出</p>
                  </div>
                </div>
              </div>
            ) : (
              <div class="h-[calc(100vh-8rem)] w-full items-center justify-center flex">
                <div class="h-[85%] w-1/3 bg-searchBox rounded-xl p-8 font-bold text-base flex flex-col items-center justify-center space-y-8">
                  <p class="text-xl">{ register ? "註冊" : "登入"}</p>
                  <input 
                    class="w-full h-[3rem] bg-white rounded-full px-8 font-bold border-transparent"
                    placeholder="帳號"
                  />
                  <input 
                    class="w-full h-[3rem] bg-white rounded-full px-8 font-bold border-transparent"
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
              <label onClick={() => [setModal(!modal),setIsLogin(true)]} className="modal cursor-pointer">
              <label className="modal-box max-w-[25%] h-[15%] font-bold space-y-4 flex justify-center items-center">
                  <p class="text-lg">登入成功！</p>
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
                    <p class="w-full h-[6rem] rounded-xl bg-gray-100 p-4 flex items-center">景點1</p>
                    <p class="w-full h-[6rem] rounded-xl bg-gray-100 p-4 flex items-center">景點2</p>
                    <p class="w-full h-[6rem] rounded-xl bg-gray-100 p-4 flex items-center">景點3</p>
                    <p class="w-full h-[6rem] rounded-xl bg-gray-100 p-4 flex items-center">景點4</p>
                    <p class="w-full h-[6rem] rounded-xl bg-gray-100 p-4 flex items-center">景點5</p>
                    <p class="w-full h-[6rem] rounded-xl bg-gray-100 p-4 flex items-center">景點6</p>
                    <p class="w-full h-[6rem] rounded-xl bg-gray-100 p-4 flex items-center">景點7</p>
                    <p class="w-full h-[6rem] rounded-xl bg-gray-100 p-4 flex items-center">景點8</p>
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