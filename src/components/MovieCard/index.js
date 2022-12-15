import React from "react";

import { Column, Text } from "components";

const MovieCard = (props) => {
  return (
    <>
      <Column
        className={props.className}
        style={{ backgroundImage: "url('images/img_group1.png')" }}
      >
        <Text className="bg-white_A700 border border-black_900 border-solid flex font-inter font-semibold items-center sm:mb-[127px] md:mb-[165px] mb-[240px] sm:pl-[3px] md:pl-[4px] pl-[7px] sm:pr-[4px] md:pr-[5px] pr-[8px] rounded-radius50 text-[12px] text-black_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]">
          8.8
        </Text>
      </Column>
    </>
  );
};

export default MovieCard;
