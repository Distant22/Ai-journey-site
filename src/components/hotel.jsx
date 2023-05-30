import { useState, useEffect } from "react";
import { getHotel, getTypeHotel } from "./getHotel";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons";

export default function Hotel({result}) {

    const [hotels, setHotels] = useState([
      {
        "Id": "C4_315080000H_003975",
        "Name": "福容大飯店 高雄",
        "Description": "福容大飯店高雄位於鹽埕區五福四路、大成街口，地理環境極佳且交通便利。緊鄰知名景點愛河旁，定位為國際觀光飯店，提供250間客房，設施包括游泳池、三溫暖、健身中心等，並提供全館WIFI無線上網服務，備極貼心；專為頂級消費者設計的尊榮樓層，提供氣派奢華的舒適環境，從制高點一覽海洋之都，凡塵喧囂瞬間落盡，是專屬的私密景點，輕啜著一杯紅酒，一天奔波幻化為心中的滿足。周邊景點多元，潺潺清流的愛河，多元的休閒藝文活動，值得在此度過悠閒時光；氛圍優雅的和平公園，吸引雙雙儷人來此拍攝婚紗；如意橋在夜裡恍若發著光的河流，浪漫美麗。真愛碼頭以雙座風帆的特殊造型，分別對著高雄市區及旗津渡輪碼頭，來到福容可欣賞高雄摩天大樓林立的現代都市風貌，也可眺望高雄海港體驗大船入港的震撼，白天、夜晚各具不同的風貌。",
        "Grade": "",
        "Add": "高雄市鹽埕區高雄市鹽埕區五福四路45號",
        "Zipcode": "803",
        "Region": "高雄市",
        "Town": "鹽埕區",
        "Tel": "886-7-5511188",
        "Fax": "886-7-5211166",
        "Gov": "315080000H",
        "Website": "http://www.fullon-hotels.com.tw/kh/",
        "Picture1": "https://taiwan.taiwanstay.net.tw/twpic/36771.jpg",
        "Picdescribe1": "游泳池",
        "Picture2": "https://taiwan.taiwanstay.net.tw/twpic/9803.jpg",
        "Picdescribe2": "大廳",
        "Picture3": "https://taiwan.taiwanstay.net.tw/twpic/3925.jpg",
        "Picdescribe3": "一樓 - Lobby Lounge",
        "Px": 120.287711,
        "Py": 22.621363,
        "Class": "2",
        "Map": "",
        "Spec": "雙人房6800;套房10800;雙人房6000;其他(無障礙客房)9560;",
        "Serviceinfo": "餐廳,會議場所,咖啡廳,宴會廳,健身房,商店,游泳池,有線網路,無線網路,iTaiwan,國民旅遊卡,停車場,高齡房,,,,洗衣服務,商務旅遊中心,貴重物品保管專櫃,接送服務,自行車租借,行動支付,哺乳室,AED,外幣兌換,寵物友善旅宿,,,自行車友善旅宿",
        "Parkinginfo": "車位:小客車86輛、機車30輛、大客車0輛",
        "TotalNumberofRooms": 250,
        "LowestPrice": 6000,
        "CeilingPrice": 10800,
        "TaiwanHost": "0",
        "IndustryEmail": "rsvn_kh@fullon-hotels.com.tw",
        "TotalNumberofPeople": 500,
        "AccessibilityRooms": 0,
        "PublicToilets": 1,
        "LiftingEquipment": 3,
        "ParkingSpace": 116
      },
      {
        "Id": "C4_315080000H_003978",
        "Name": "金鷺二館",
        "Description": "位於金門縣的民宿",
        "Grade": "1",
        "Add": "金門縣金城鎮西海路三段72巷3弄3號",
        "Zipcode": "893",
        "Region": "金門縣",
        "Town": "金城鎮",
        "Tel": "886-82-316080",
        "Fax": "886-82-354061",
        "Gov": "315080000H",
        "Website": "",
        "Picture1": "",
        "Picdescribe1": "",
        "Picture2": "",
        "Picdescribe2": "",
        "Picture3": "",
        "Picdescribe3": "",
        "Px": 118.309420,
        "Py": 24.420080,
        "Class": "4",
        "Map": "",
        "Spec": "",
        "Serviceinfo": "自行車友善旅宿",
        "Parkinginfo": "車位:小客車0輛、機車0輛、大客車0輛",
        "TotalNumberofRooms": 15,
        "LowestPrice": 4000,
        "CeilingPrice": 8000,
        "TaiwanHost": "1",
        "IndustryEmail": "",
        "TotalNumberofPeople": 56,
        "AccessibilityRooms": 0,
        "PublicToilets": 0,
        "LiftingEquipment": 0,
        "ParkingSpace": 0
      },
      {
        "Id": "C4_315080000H_003981",
        "Name": "翠園歐風庭園民宿",
        "Description": "獨棟300坪的翠園歐風庭園民宿，近市區及火車站又是近郊旅中心點，能遠眺台灣中央山脈雄壯的美及翠綠田園的風光！翠園民宿主人好客.溫馨.早餐獨特.有家的感覺！是縣政府簽約的特約民宿！獲得優質經典民宿及蟬聯台灣區好客民宿獎，這是給旅客們最佳的保證。住宿翠園民宿，住得安心.吃的放心.旅遊配套完整.安全有保障.景觀優美是旅游首選的地方！有專車在花蓮火車站迎接您們 (請提前預約)。 翠園歐風庭園民宿-負責人 陳月鳳  國內電話：03-8523-888 或 0932-656-069 資訊管理員：江合勇 03-8523-888 或 0912-092-899翠園歐風庭園民宿 2020年住宿客房價目表        單位：新台幣元客 房 類 型 及 房 價\t                                 平 日\t 假 日\t除夕/春節2樓：豪華雙人套房(最高可加2人)   \t3,000\t3,500\t4,8002樓：豪華雙人套房(最高可加2人)\t        3,000\t3,500\t4,8002樓：豪華雙人套房(最高可加2人)\t        3,000\t3,500\t4,8003樓：3E雙大床四人套房(最高可加1人)\t4,800\t4,500\t8,000包 棟 (費用另計 )",
        "Grade": "1",
        "Add": "花蓮縣吉安鄉稻香村吉昌三街135號",
        "Zipcode": "973",
        "Region": "花蓮縣",
        "Town": "吉安鄉",
        "Tel": "886-3-8523888",
        "Fax": "886-3-8512698",
        "Gov": "315080000H",
        "Website": "",
        "Picture1": "https://taiwan.taiwanstay.net.tw/twpic/170943.jpg",
        "Picdescribe1": "翠園歐風庭園民宿",
        "Picture2": "https://taiwan.taiwanstay.net.tw/twpic/170944.jpg",
        "Picdescribe2": "翠園全景",
        "Picture3": "https://taiwan.taiwanstay.net.tw/twpic/170945.jpg",
        "Picdescribe3": "翠園民宿內部一樓-客廳+餐廳+廚房",
        "Px": 121.568999,
        "Py": 23.965823,
        "Class": "4",
        "Map": "",
        "Spec": "雙人房4500;雙人房4500;雙人房4500;雙人房4500;套房6500;",
        "Serviceinfo": "餐廳,會議場所,有線網路,無線網路,iTaiwan,國民旅遊卡,停車場,高齡房,無障礙客房,上網電腦(免費),,,,兒童遊樂設施,洗衣服務,商務旅遊中心,接送服務,自行車租借,行動支付,導覽解說,體驗活動,穆斯林餐廳,素食餐廳,,,自行車友善旅宿",
        "Parkinginfo": "車位:小客車0輛、機車0輛、大客車0輛",
        "TotalNumberofRooms": 4,
        "LowestPrice": 4500,
        "CeilingPrice": 6500,
        "TaiwanHost": "1",
        "IndustryEmail": "j0912.j0912@msa.hinet.net",
        "TotalNumberofPeople": 10,
        "AccessibilityRooms": 0,
        "PublicToilets": null,
        "LiftingEquipment": null,
        "ParkingSpace": 0
      }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    // 處理住宿型態改變
    const [hotelTypeBox, setHotelTypeBox] = useState("");
    // 處理服務改變
    const [serviceBox, setServiceBox] = useState("");
    // 價格改變
    const [price, setPrice] = useState(3000);
    // 等級改變
    const [stars, setStars] = useState([<AiOutlineStar />,<AiOutlineStar />,<AiOutlineStar />,<AiOutlineStar />]);
    const [starFill, setStarFill] = useState([false,false,false,false])

    const handleStarFill = (num) => {
      let newArr = [];
      for (let i = 0; i < starFill.length; i++) {
        newArr.push(i <= num);
      }
      setStarFill(newArr);

      console.log(newArr);
    };
    

    const handleSliderChange = (event) => {
      const newValue = parseInt(event.target.value);
      setPrice(newValue);
    };

    const handleHotelTypeBoxChange = (e) => {
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

    // useEffect(() => {
      // async function fetchData() {
      //   let hotelList;
      //   if (hotelTypeBox) {
      //     hotelList = await getTypeHotel(result, hotelTypeBox);
      //   } else {
      //     hotelList = await getHotel(result);
      //   }
      //   setHotels(hotelList);
      //   // setIsLoading(false);
      // }
      // fetchData();
    // });


    return (
      <>
        {isLoading ? (
            <p className="text-lg p-8 font-bold text-gray-600">載入中...</p>
        ) : (
        <ul>
          {hotels.length === 0 && 
            <p class="p-8 font-bold text-gray-600">
              找不到結果QQ<br /><br />
              請確認以下內容是否設定正確：<br/>
              1. 將「台」替換為「臺」字。 Ex：臺南市 <br />
              2. 時間設定正確 <br />
              3. 網路狀態良好
            </p>
          }
          {hotels.length !== 0 &&
            <div class="flex">
              <div class=" h-[calc(172vh)] w-60 mt-12 ml-4 bg-gray-200 rounded-3xl ">
                <div class="-translate-y-8 h-12 w-56 ml-2 bg-gray-700 rounded-full flex items-center justify-center">
                  <p class="text-2xl font-bold w-max text-white">篩選條件</p>
                </div>
                {/* <div class="h-16 w-full flex justify-center items-center -translate-y-4">
                  <div class="btn h-4 w-48">重新搜尋</div>
                </div> */}
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
                      min={1000}
                      max={9000}
                      step={2000}
                      value={price}
                      onChange={handleSliderChange}
                    />
                    <div class="font-bold">{ price < 9000 ? `價格低於${price}元` : "價格不限"}</div>
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
            {hotels.map((hotel) => (
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
              ))}
            </div>
              </div>
          }
        </ul>
        )}
      </>
  );}