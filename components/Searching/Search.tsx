import React from "react";

const Search = () => {
  return (
    <div className="fixed top-0 left-0 z-[1000] flex px-[2rem] py-[6rem] middle w-full h-full bg-[#000]/[.4]">
      <div className="flex max-w-[100rem] w-full rounded-[2.4rem] p-[2rem] bg-[#fff]">
        <div className="w-full">
          <input
            placeholder="search"
            className="outline-none border-none text-[1.6rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
