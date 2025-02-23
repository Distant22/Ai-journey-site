import { useState, useEffect } from "react";
import { getHotel, getTypeHotel } from "./getHotel";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons";

export default function Hotel({result}) {

    // 儲存旅館搜尋結果
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // 處理報錯訊息
    const [bang, setBang] = useState(false);
    // 處理住宿型態改變
    const [hotelTypeBox, setHotelTypeBox] = useState("");
    // 處理服務改變
    const [serviceBox, setServiceBox] = useState("");
    // 處理價格改變
    const [price, setPrice] = useState(3000);
    // 處理星級改變
    const [stars, setStars] = useState([<AiOutlineStar />,<AiOutlineStar />,<AiOutlineStar />,<AiOutlineStar />]);
    const [starFill, setStarFill] = useState([false,false,false,false])
    // 處理飯店星級圖示
    const handleStarFill = (num) => {
      let newArr = [];
      for (let i = 0; i < starFill.length; i++) {
        newArr.push(i <= num);
      }
      setStarFill(newArr);
    };
    
    // 處理價格範圍
    const handleSliderChange = (event) => {
      const newValue = parseInt(event.target.value);
      setPrice(newValue);
    };

    // 處理住宿類型；未完成
    const handleHotelTypeBoxChange = (e) => {
      // setIsLoading(true)
      const { name } = e.target;
      let hotelType;
    
      switch (name) {
        case 'global':
          hotelType = '1';
          break;
        case 'normal':
          hotelType = '2';
          break;
        case 'ordinary':
          hotelType = '3';
          break;
        case 'bandb':
          hotelType = '4';
          break;
        default:
          hotelType = null;
      }
    
      setHotelTypeBox(hotelType);
    };

    // 去Firebase要資料
    useEffect(() => {
      async function fetchData() {
        try{
          if(hotels.length === 0 && isLoading){
            let hotelList;
            if (hotelTypeBox) {
              console.log("It's changing!")
              hotelList = await getTypeHotel(result, hotelTypeBox);
              console.log("changeBox:",hotelList)
            } else {
              console.log("initial:",hotelList)
              hotelList = await getHotel(result);
            }
            setHotels(hotelList);
            setIsLoading(false);
          }
        } catch (FirebaseError){
          console.log("錯誤：",FirebaseError)
          setBang(true);
          setIsLoading(false);
        }
      }
      fetchData();
    });


    return (
      <div className="bg-white">
        {isLoading ? (
            <p className="text-lg p-8 font-bold text-gray-600">載入中...</p>
        ) : (
        <ul>
          {hotels.length === 0 && (setBang ? (
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
          {hotels.length !== 0 &&
            <div class="flex">
              <div class=" h-[calc(172vh)] w-60 mt-12 ml-4 bg-gray-200 rounded-3xl ">
                <div class="-translate-y-8 h-12 w-56 ml-2 bg-gray-700 rounded-full flex items-center justify-center">
                  <p class="text-2xl font-bold w-max text-white">篩選條件</p>
                </div>
                <div class=" flex flex-col space-y-4 place-items-center text-center h-full">
                  <div class="h-28 w-48 bg-white rounded-xl">
                    <p class="mt-3 text-center text-xl">飯店等級</p>
                    <div class="mt-2 ml-4 h-1 w-40  bg-black"></div> 
                    <p class="flex w-full h-1/2 items-center justify-center space-x-3">
                      <IconContext.Provider value={{ size: '24px' }}>
                        {stars.map((star,index) => (
                          <p onClick={() => handleStarFill(index)}>
                            { starFill[index] ? <AiFillStar /> : <AiOutlineStar /> }
                          </p>
                        ))}
                      </IconContext.Provider>
                    </p>
                  </div>
                  <div class="h-28 w-48 bg-white rounded-xl">
                    <p class="mt-3 text-center text-xl">價格範圍</p>
                    <div class="mt-2 ml-4 h-1 w-40 bg-black mb-2"></div>
                    <input
                      id="range"
                      name="range"
                      type="range"
                      min={3000}
                      max={11000}
                      step={4000}
                      value={price}
                      onChange={handleSliderChange}
                    />
                    <div class="font-bold">{ price < 11000 ? price < 7000 ? "低" : "一般" : "昂貴"}</div>
                  </div>
                  <div class="h-72 w-48 bg-white rounded-xl">
                    <p class="mt-3 text-center text-xl">其他服務</p>
                    <div class="mt-2 ml-4 h-1 w-40 bg-black">
                      <div class="flex flex-col items-start ml-5 space-y-2 font-black text-md">
                        <div class="mt-4 space-x-2">
                          <input type="checkbox" id="network" name="network" class="mb-1"/>
                          <label for="site">免費網路</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="computer" name="computer" class="mb-1"/>
                          <label for="site">免費電腦</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="parking" name="parking" class="mb-1"/>
                          <label for="site">停車服務</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="tour" name="tour" class="mb-1"/>
                          <label for="site">導覽活動</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="card" name="card" class="mb-1"/>
                          <label for="site">國民旅遊卡</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="dining" name="dining" class="mb-1"/>
                          <label for="site">咖啡廳 / 餐廳</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="h-52 w-48 bg-white rounded-xl">
                    <p class="mt-3 text-center text-xl">住宿類型</p>
                    <div class="mt-2 ml-4 h-1 w-40  bg-black">
                    <div class="flex flex-col ml-4 items-start space-y-2 font-black text-md">
                        <div class="mt-4 space-x-2">
                          <input type="checkbox" id="global" name="global" checked={hotelTypeBox === "1"} onChange={handleHotelTypeBoxChange} class="mb-1" />
                          <label for="site">國際觀光旅館</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="normal" name="normal" checked={hotelTypeBox === "2"} onChange={handleHotelTypeBoxChange} class="mb-1" />
                          <label for="site">一般觀光旅館</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="ordinary" name="ordinary" checked={hotelTypeBox === "3"} onChange={handleHotelTypeBoxChange} class="mb-1" />
                          <label for="site">一般旅館</label>
                        </div>
                        <div class="space-x-2">
                          <input type="checkbox" id="bandb" name="bandb" checked={hotelTypeBox === "4"} onChange={handleHotelTypeBoxChange} class="mb-1" />
                          <label for="site">民宿</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div>
            {hotels.map((hotel,index) => index <= 30 ? (
              
              <div className="w-[55rem] h-[22rem] flex flex-col mt-4 space-y-4 ml-8">
                  <li key={`${hotel.Id}-${hotel.Name}`}>
                    <>
                      <div class="h-[22rem] bg-gray-200 rounded-3xl p-8 flex">
                        <div class="w-1/2 space-y-2 mr-2">
                          <p class="text-gray-700 font-black text-2xl">{ hotel.Name }</p>
                          <p class="text-sm line-clamp-1">{ hotel.Description }</p>
                          { hotel.Picture1 !== "" &&
                            <img alt="journey-pic" src={hotel.Picture1} className="h-[12rem] w-[16rem] rounded-lg"></img>
                          }
                          { hotel.Picture1 === "" &&
                            <p className="h-[12rem] w-[16rem] rounded-lg bg-gray-300 text-gray-600 font-bold items-center flex justify-center">店家沒有提供照片</p>
                          } 
                          <p class="text-sm font-bold">{hotel.Add}</p>
                        </div>
                        <div class="flex w-full">
                          <div class="flex flex-col w-full h-full space-y-5 mt-1 mr-4">
                            <div class="flex w-full h-1/5 rounded-xl bg-white p-4 font-bold hover:bg-gray-700 hover:text-gray-50 duration-500">
                              價格：最低 { hotel.LowestPrice }｜最高 { hotel.CeilingPrice }
                            </div>
                            <div class="flex w-full h-1/5 rounded-xl bg-white p-4 hover:bg-gray-700 hover:text-gray-50 duration-500">
                              <p class="line-clamp-1 font-bold">提供服務：{ hotel.Serviceinfo.length !== 0 ? hotel.Serviceinfo : "無服務資料" }</p>
                            </div>
                            <div class="flex w-full h-1/5 rounded-xl bg-white p-4 font-bold hover:bg-gray-700 hover:text-gray-50 duration-500">
                              可容納人數：{ hotel.TotalNumberofPeople }｜房間數：{ hotel.TotalNumberofRooms }
                            </div>
                            <div class="flex w-full h-1/5 rounded-xl bg-white p-4 font-bold hover:bg-gray-700 hover:text-gray-50 duration-500">
                              電話：{ hotel.Tel.length !== 0 ? hotel.Tel : "無提供電話" }
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </li>
                </div>
              ) : (<></>)
            )}
            </div>
              </div>
          }
        </ul>
        )}
      </div>
  );}