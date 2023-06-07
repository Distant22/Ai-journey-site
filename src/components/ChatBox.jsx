import React, { useState, useEffect, useRef } from 'react';
import bot from "../bot.png";
import user from "../user.png";

// ChatBox.jsx：AI旅遊小幫手，透過串接OpenAI API將Chat Model放進來我們的網站。
// Model：text-davinci-003
export default function ChatBox({searchMsg}) {
  const [currentText, setCurrentText] = useState("");
  const [err, setErr] = useState(false);
  const starterMsg = [
    {
      name: '小幫手',
      message: '您好，有什麼我可以幫助你的嗎？',
    },
  ]
  const [message, setMessage] = useState(starterMsg);
  const isFirstRender = useRef(true);

  // 若使用者在已輸入搜尋內容的情況下進入小幫手頁面，則新增預設訊息
  useEffect(() => {
    if (isFirstRender.current && searchMsg !== undefined) {
      isFirstRender.current = false;
      handleMessage('您好，我想要尋找有關'+searchMsg.message+"的資訊，預計出發日期是"+parseInt(searchMsg.startDate.getYear()+1900)+"年的"+(parseInt(searchMsg.startDate.getMonth()+1))+"月"+searchMsg.startDate.getDate()+"號，返家日期是"+
      parseInt(searchMsg.endDate.getYear()+1900)+"年的"+(parseInt(searchMsg.endDate.getMonth())+1)+"月"+searchMsg.endDate.getDate()+"號；如果要去台北市的那邊旅遊，可以告訴我必須隨身攜帶的物品以及注意事項有什麼嗎？");
    }
  });

  // 當使用者輸入內容時，呼叫API並更新訊息結果
  const handleMessage = async (msg) => {

      setMessage([...message, {
        name: '',
        message: msg,
      }]);

      const tempMsg = [...message, {
        name: '',
        message: msg,
      }]

      try {
        setMessage(prevMsg => [...prevMsg, { name: '小幫手', message: "輸入中..." }]);
        const response = await lateMessage(msg);
        setMessage(tempMsg)
        setMessage(prevMsg => [...prevMsg, { name: '小幫手', message: response.message }]);
        // Process the response received from the backend
        console.log(response);
        // Do something with the response
      } catch (error) {
        // Handle any errors that occurred during the request
        setMessage(tempMsg)
        setMessage(prevMsg => [...prevMsg, { name: '小幫手', message: "伺服器錯誤，請重新整理！" }]);
        // Handle the error gracefully
      }
    
    
  };
  
  // Call API
  async function lateMessage(msg) {
    try {
      const response = await fetch('https://ai-journey-backend.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: msg })
      });
      
      if (!response.ok) {
        throw new Error('Request failed');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Request failed');
    }
  }  

  // 讓聊天室能夠每次留言後都自動置底
  const chatContainerRef = useRef(null);
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [message]);

  return (
    <div class="w-full">
      <div ref={chatContainerRef} className="px-2 font-Serif font-bold w-full h-[calc(100%-3rem)] overflow-y-scroll">
        {message.map((msg, index) => (
          <div className={`${msg.name === '' ? "chat chat-end" : "chat chat-start"}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="avatar" src={msg.name === '小幫手' ? bot : user} />
              </div>
            </div>
            <div className="chat-header">
              {msg.name}
            </div>
            <div className={`${msg.name === '' ? "chat-bubble chat-bubble-success whitespace-pre-line" : msg.message === '伺服器錯誤，請重新整理！' ? "chat-bubble chat-bubble-error" : "chat-bubble"}`}>{msg.message}</div>
            <div className="chat-footer opacity-50">
              {msg.name === '' ? "已讀" : ""}
            </div>
          </div>
        ))}
      </div>
      <div class="h-[3rem] w-full rounded-lg bg-gray-400 p-2 flex justify-between">
            <input placeholder="輸入想告訴小幫手的話！" onChange={(e)=>{ setCurrentText(e.target.value)}} class="w-[87%] h-[95%] rounded-full bg-white px-4"/>
            <p onClick={() => { handleMessage(currentText) }} class="w-[12%] max-h-[2rem] min-h-[2rem] btn">傳送</p>
      </div>
    </div>
  );
}
