import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBox() {
    
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    };

    const [startDate, setStartDate] = useState(new Date());
    const [isOpenStart, setIsOpenStart] = useState(false);

    const [endDate, setEndDate] = useState(new Date());
    const [isOpenEnd, setIsOpenEnd] = useState(false);

    const[isChooseStartDate, setIsChooseStartDate] = useState(false);
    const[isChooseEndDate, setIsChooseEndDate] = useState(false);

    const[modal, setModal] = useState(false);

    const handleStartChange = (e) => {
        setIsOpenStart(!isOpenStart);
        setStartDate(e);
        setIsChooseStartDate(true);
    };
    const handleEndChange = (e) => {
        setIsOpenEnd(!isOpenEnd);
        setEndDate(e);
        setIsChooseEndDate(true);
    };
    const handleStartClick = (e) => {
        e.preventDefault();
        setIsOpenStart(!isOpenStart);
    };
    const handleEndClick = (e) => {
        e.preventDefault();
        setIsOpenEnd(!isOpenEnd);
    };

    const handleSearch = () => {

        if (endDate > startDate && message !== "") {
            // Redirect to the new page with state.message
            navigate('/search', { state: { message, startDate, endDate }});
        } else {
            // Show the error modal
            // Implement your error modal logic here
            handleModal()
            console.log(startDate, endDate, new Date())
            console.log('Search not allowed!');
        }
    }

    const handleModal = () => {
        setModal(true)
    }
        
    return (
      <>
        <div class="h-[calc(100vh-8rem)] flex items-center justify-center pb-12">
            <div class="w-1/2 h-72 rounded-xl bg-searchBox flex flex-col items-center">
                <div class="w-5/6 h-full space-y-3 mt-10">
                    <div class="h-1/4">
                        <input
                            type="text" 
                            class="w-full h-full bg-white rounded-full px-8 font-bold border-transparent"
                            placeholder="請輸入縣市（要輸入「臺」而不是「台」！）"
                            onChange={handleChange}
                            checked={modal}
                            value={message}
                        />
                    </div>
                    <div class="flex flex-row w-full h-1/4 justify-center space-x-2.5">

                        <button className="w-1/2 h-full bg-white rounded-full px-8 font-bold flex items-center overflow-hidden" onClick={handleStartClick}>
                        { (isChooseStartDate) ? (startDate.getFullYear() + "/" + (parseInt(startDate.getMonth())+1).toString() + "/" + startDate.getDate()) : "出發日" }
                        </button>

                        <button className="w-1/2 h-full bg-white rounded-full px-8 font-bold flex items-center overflow-hidden" onClick={handleEndClick}>
                        { (isChooseEndDate) ? (endDate.getFullYear() + "/" + (parseInt(endDate.getMonth())+1).toString() + "/" + endDate.getDate()) : "結束日" }
                        </button>
                    </div>
                    {/* <Route render={isAdmin ? (
                        <Redirect to='/confirm' />
                    ) : (
                            <NotFound />
                        )
                    } /> */}
                    <div class="flex w-full h-1/4 items-center">
                        <button
                            onClick={handleSearch}
                            className="w-full h-full bg-black rounded-3xl px-8 font-bold border-transparent flex justify-center items-center"
                        >
                            <p className="text-white text-xl font-xl">Search</p>
                        </button>
                        {/* <Link to={{pathname: '/search'}} state={{ message }}  class="w-full h-full bg-black rounded-3xl px-8 font-bold border-transparent flex justify-center items-center">
                            <p class="text-white text-xl font-xl">Search</p>
                        </Link> */}
                    </div>
                </div>
            </div>
            <div class="absolute left-10">
            {isOpenStart && (
                <DatePicker selected={startDate} onChange={handleStartChange} inline />
            )}
            </div>
            <div class="absolute right-10">
            {isOpenEnd && (
                <DatePicker selected={endDate} onChange={handleEndChange} inline />
            )}
            </div>
            
        </div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="errorModal" className="modal-toggle" checked={modal} />
        <label onClick={() => setModal(!modal)} className="modal cursor-pointer">
        <label className="modal-box max-w-[60%] h-[50%] font-bold space-y-4">
            <h3 className="text-lg ml-3">錯誤</h3>
            { (endDate < startDate) ?  <p className="p-2 w-max h-[3rem] rounded-xl bg-blue-200 flex items-center">出發時間不可晚於結束時間</p> : <></> }
            { (endDate === new Date() || startDate || new Date()) ? <p className="p-2 w-max h-[3rem] rounded-xl bg-blue-200 flex items-center">請填寫出發與結束時間</p> : <></> }
            { (message === '') ? <p className="p-2 w-max h-[3rem] rounded-xl bg-blue-200 flex items-center">地點不可為空</p> : <></> }
            { (message.length >= 10) ? <p className="p-2 w-max h-[3rem] rounded-xl bg-blue-200 flex items-center">你輸入的關鍵字太長了，請減少字數</p> : <></> }
        </label>
        </label>
      </>
    );
  }