const CustomChart = ({ board }) => {
  return (
    <div className="bg-[#f1f1f1] w-[14.42rem] h-[7.3rem] rounded-[1rem] pt-2 pl-2">
      <div className="flex gap-3">
        <div className="flex flex-col">
          <div className="bottom-[7.5rem] left-[0.3rem] w-[5.725rem]">
            <p className="text-[0.8rem] overflow-ellipsis overflow-hidden whitespace-nowrap">
              {board.title}
            </p>
          </div>
          <div className="text-[0.6rem] overflow-ellipsis overflow-hidden whitespace-nowrap">
            테마 : {board.foodCategory}
          </div>
          <div className="text-[0.6rem] overflow-ellipsis overflow-hidden whitespace-nowrap">
            현재인원 : {board.status} / {board.people}
          </div>
          <div className="text-[0.6rem] overflow-ellipsis overflow-hidden whitespace-nowrap">
            약속시간 : {board.time}
          </div>
          <button className="text-[0.6rem] mt-2 border w-[3.43rem] h-6 bg-[#54AB75] rounded-[0.625rem] text-[#ffffff]">
            상세보기
          </button>
        </div>
        <img className="w-[6.5rem] h-[6.5rem]" src="img/boardexampleimg.svg" />
      </div>
      <div className="w-3 h-3 absolute top-[97%] left-[4.3rem] bg-[#f1f1f1] transform rotate-45"></div>
    </div>
  );
};

export default CustomChart;
