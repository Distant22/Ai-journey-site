export default function Hotel() {
    return (
      <>
      <div class="grid grid-cols-4 gap-0 mt-12">
      <div>
        <input type="checkbox" id="site" name="site" class="ml-24"/>
        <label for="site">景點</label>
      </div>

      <div>
        <input type="checkbox" id="food" name="food"/>
        <label for="food">飲食</label>
      </div>
      <div>
        <input type="checkbox" id="hotel" name="hotel"/>
        <label for="hotel">住宿</label>
      </div>
      </div>
        <div class="relative h-[calc(165vh-8rem)] w-60 mt-16 ml-24 mb-8 bg-red-300 rounded-3xl float-left">
          <div class="-translate-y-8 h-16 w-56 -top-4 ml-2 bg-blue-300 rounded-full">
            <p class="text-center h-full mt-3 text-2xl font-bold">篩選條件</p>
              
          </div>
          <div class=" flex flex-col gap-4 justify-items-center ml-6 mt-16 text-center">
            <div class="h-32 w-48 bg-blue-300 rounded-3xl">
              <p class="mt-3 text-center text-xl">飯店等級</p>
              <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
            </div>
            <div class="h-32 w-48 bg-blue-300 rounded-3xl">
              <p class="mt-3 text-center text-xl">平均滿意度</p>
              <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
            </div>
            <div class="h-32 w-48 bg-blue-300 rounded-3xl">
              <p class="mt-3 text-center text-xl">價格範圍</p>
              <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
            </div>
            <div class="h-64 w-48 bg-blue-300 rounded-3xl">
              <p class="mt-3 text-center text-xl">其他服務</p>
              <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
            </div>
            <div class="h-64 w-48 bg-blue-300 rounded-3xl">
              <p class="mt-3 text-center text-xl">住宿類型</p>
              <div class="mt-2 ml-4 h-1 w-40  bg-black"></div>
            </div>
          </div>

        </div>
        
        <div class="relative h-[calc(75vh-8rem)] w-3/5 right-0 mt-16 ml-96 mr-24 bg-red-300 rounded-3xl">
          <p class="mt-8 ml-10 float-left text-2xl font-bold">印石時尚旅館</p>
          <div class=" ml-12 mb-7 bottom-0 h-40 w-64 bg-blue-300 rounded-xl">
            <p class="m-4 font-bold">評語：</p>
            <p class="m-4 ">評語評語評語評語評語評語評語評語評語</p>
          </div>
          <div class=" flex flex-col gap-4 justify-items-center right-0 mr-16 mt-8  text-center">
            <div class="m-0.1 h-20 w-96 bg-blue-300 rounded-xl">01</div>
            <div class="m-0.1 h-20 w-96 bg-blue-300 rounded-xl">02</div> 
            <div class="m-0.1 h-20 w-96 bg-blue-300 rounded-xl">03</div>
            <div class="m-0.1 h-20 w-96 bg-blue-300 rounded-xl">04</div>
          </div>
        </div>
        <p class="mt-8 ml-10 float-left text-2xl font-bold">台北海灣假日飯店</p>
        <div class="flex flex-row h-[calc(75vh-8rem)] w-3/5 right-0 mt-16 ml-96 mr-24 bg-red-300 rounded-3xl">
          <div class="h-40 w-64">

          </div>
          <div class=" ml-12 mb-7 bottom-0 h-40 w-64 bg-blue-300 rounded-xl">
            <p class="m-4 font-bold">評語：</p>
            <p class="m-4 ">評語評語評語評語評語評語評語評語評語</p>
          </div>
          <div class=" flex flex-col gap-4 justify-items-center right-0 mr-16 mt-8  text-center">
            <div class="m-0.1 h-20 w-96 bg-blue-300 rounded-xl">01</div>
            <div class="m-0.1 h-20 w-96 bg-blue-300 rounded-xl">02</div> 
            <div class="m-0.1 h-20 w-96 bg-blue-300 rounded-xl">03</div>
            <div class="m-0.1 h-20 w-96 bg-blue-300 rounded-xl">04</div>
          </div>
        </div>

      </>
    );
  }