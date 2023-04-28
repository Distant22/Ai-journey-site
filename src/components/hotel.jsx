export default function Hotel() {
    return (
      <>
      <div class=" space-x-2 ml-6 mt-3">
        <input type="checkbox" id="site" name="site"/>
        <label for="site">景點</label>

        <input type="checkbox" id="food" name="food"/>
        <label for="food">飲食</label>

        <input type="checkbox" id="hotel" name="hotel"/>
        <label for="hotel">住宿</label>

      </div>

      <div class="flex flex-row">
        <div class=" h-[calc(185vh)] w-60 mt-12 ml-4 bg-gray-200 rounded-3xl">
          <div class="-translate-y-8 h-12 w-56 ml-2 bg-gray-700 rounded-full flex items-center justify-center">
            <p class="text-2xl font-bold w-max text-white">篩選條件</p>
          </div>
          <div class=" flex flex-col gap-4 place-items-center text-center h-full">
            <div class="h-28 w-48 bg-white rounded-xl">
              <p class="mt-3 text-center text-xl">飯店等級</p>
              <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
            </div>
            <div class="h-28 w-48 bg-white rounded-xl">
              <p class="mt-3 text-center text-xl">平均滿意度</p>
              <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
            </div>
            <div class="h-28 w-48 bg-white rounded-xl">
              <p class="mt-3 text-center text-xl">價格範圍</p>
              <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
            </div>
            <div class="h-64 w-48 bg-white rounded-xl">
              <p class="mt-3 text-center text-xl">其他服務</p>
              <div class="mt-2 ml-4 h-1 w-40 bg-black">
                <div class="flex flex-col items-center space-y-2 font-black text-md">
                  <div class="mt-4 space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">免費上網</label>
                  </div>
                  <div class="space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">免費早餐</label>
                  </div>
                  <div class="space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">免費停車</label>
                  </div>
                  <div class="space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">免費取消</label>
                  </div>
                  <div class="space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">提供備品</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-80 w-48 bg-white rounded-xl">
              <p class="mt-3 text-center text-xl">住宿類型</p>
              <div class="mt-2 ml-4 h-1 w-40  bg-black">
              <div class="flex flex-col ml-8 items-start space-y-2 font-black text-md">
                  <div class="mt-4 space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">公寓式飯店</label>
                  </div>
                  <div class="space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">渡假村</label>
                  </div>
                  <div class="space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">飯店</label>
                  </div>
                  <div class="space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">商業旅館</label>
                  </div>
                  <div class="space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">青年旅館</label>
                  </div>
                  <div class="space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">汽車旅館</label>
                  </div>
                  <div class="space-x-2">
                    <input type="checkbox" id="site" name="site" class="mb-1"/>
                    <label for="site">民宿</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="w-full h-grow flex flex-col mt-4 mx-4 space-y-4">
          <div class="h-1/2 bg-gray-200 rounded-3xl">
            <p class="p-8 text-gray-700 font-black text-3xl">
              印石時尚旅館
            </p>
            <div class="flex flex-row h-full w-full -translate-y-3">
              <div class="flex flex-col w-1/3 mx-4">
                <div class="h-1/3 mb-2 w-full bg-white rounded-3xl font-black flex items-center justify-center">
                  <p>*照片*</p>
                </div>
                <p>在地圖上顯示</p>
                <p>距離目標地0.80km</p>
                <div class="h-1/3 mt-2 w-full bg-white rounded-3xl font-black flex items-center justify-center">
                  <p>*評語*</p>
                </div>
              </div>
              <div class="flex flex-col w-full h-full space-y-5 mt-1 mr-4">
                <div class="flex w-full h-1/6 rounded-xl bg-white ">
                  
                </div>
                <div class="flex w-full h-1/6 rounded-xl bg-white ">
                 
                </div>
                <div class="flex w-full h-1/6 rounded-xl bg-white ">
                  
                </div>
                <div class="flex w-full h-1/6 rounded-xl bg-white ">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="h-1/2 bg-gray-200 rounded-3xl">
            <p class="p-8 text-gray-700 font-black text-3xl">
              台北海灣假日飯店
            </p>
            <div class="flex flex-row h-full w-full -translate-y-3">
              <div class="flex flex-col w-1/3 mx-4">
                <div class="h-1/3 mb-2 w-full bg-white rounded-3xl font-black flex items-center justify-center">
                  <p>*照片*</p>
                </div>
                <p>在地圖上顯示</p>
                <p>距離目標地0.80km</p>
                <div class="h-1/3 mt-2 w-full bg-white rounded-3xl font-black flex items-center justify-center">
                  <p>*評語*</p>
                </div>
              </div>
              <div class="flex flex-col w-full h-full space-y-5 mt-1 mr-4">
                <div class="flex w-full h-1/6 rounded-xl bg-white ">
                  
                </div>
                <div class="flex w-full h-1/6 rounded-xl bg-white ">
                 
                </div>
                <div class="flex w-full h-1/6 rounded-xl bg-white ">
                  
                </div>
                <div class="flex w-full h-1/6 rounded-xl bg-white ">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      </>
    );
  }