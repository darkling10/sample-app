import React from "react";

import { Column, Row, Img, Input, Line, Text, Grid } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import MovieCard from "components/MovieCard";

const MostRecentMoviesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1200px] sm:mb-[47px] md:mb-[61px] mb-[89px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
            <Img
              src="images/img_newproject1.png"
              className="max-w-[100%] rounded-radius10 w-[14%]"
              alt="NewProjectOne"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
              wrapClassName="flex md:my-[6px] my-[9px] sm:mx-[0] sm:my-[4px] sm:w-[100%] w-[16%]"
              name="FrameFour"
              placeholder="Search for a movie"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[0] mr-[8px] sm:mr-[4px] md:mr-[5px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#898e9a"
                    className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
          </Row>
          <Line className="bg-gray_400 h-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
          <Text
            className="sm:mt-[19px] md:mt-[24px] mt-[36px] text-black_900 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
            as="h1"
            variant="h1"
          >
            Most Recent Movies
          </Text>
          <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]">
            <Grid className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group1.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Cruella
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group2.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  The Unholy
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Army of the Dead
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group4.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Wrath of Man
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group5.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Mortal Kombat
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group6.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  I Am All Girls
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group7.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Tom Clancy’s Without Remorse
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group8.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Godzilla vs. Kong
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group9.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Those Who Wish Me Dead
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group10.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  The Virtuoso
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group11.png')" }}
                />
                <Text
                  className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Nobody
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <MovieCard
                  className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group12.png')" }}
                />
                <Text
                  className="leading-[normal] mb-[11px] sm:mb-[5px] md:mb-[7px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] not-italic text-black_900 text-center tracking-ls016 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[83%]"
                  as="h3"
                  variant="h3"
                >
                  Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train
                </Text>
              </Column>
            </Grid>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default MostRecentMoviesPage;
