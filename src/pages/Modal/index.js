import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Input,
  Line,
  Text,
  List,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ModalPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack className="bg-white_A700 font-inter h-[1354px] mx-[auto] relative w-[100%]">
        <Column className="absolute flex flex-col inset-x-[0] items-center justify-start max-w-[1200px] mx-[auto] sm:pl-[15px] sm:pr-[15px] top-[1%] w-[100%]">
          <Column className="flex flex-col justify-start w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Img
                src="images/img_newproject1.png"
                className="max-w-[100%] rounded-radius10 w-[13%]"
                alt="NewProjectOne"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                wrapClassName="flex md:my-[6px] my-[9px] sm:mx-[0] sm:my-[4px] sm:w-[100%] w-[15%]"
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
            <Line className="bg-gray_400 h-[1px] mt-[13px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
            <Text
              className="sm:mt-[19px] md:mt-[24px] mt-[36px] text-black_900 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h1"
              variant="h1"
            >
              Most Recent Movies
            </Text>
            <List
              className="sm:gap-[13px] md:gap-[17px] gap-[26px] grid min-h-[auto] sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]"
              orientation="vertical"
            >
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group1.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[127px] md:mb-[165px] mb-[240px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      8.8
                    </Text>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Cruella
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group2.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[127px] md:mb-[165px] mb-[240px] px-[10px] sm:px-[5px] md:px-[6px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      7.1
                    </Text>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    The Unholy
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group3.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[127px] md:mb-[165px] mb-[240px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      6.6
                    </Text>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Army of the Dead
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group4.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[127px] md:mb-[165px] mb-[240px] sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      7.9
                    </Text>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Wrath of Man
                  </Text>
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group5.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[127px] md:mb-[165px] mb-[240px] sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      7.6
                    </Text>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Mortal Kombat
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group6.png')" }}
                  >
                    <Column className="bg-white_A700 border border-gray_900 border-solid flex flex-col sm:h-[19px] md:h-[24px] h-[34px] items-center justify-start sm:mb-[127px] md:mb-[165px] mb-[240px] px-[10px] sm:px-[5px] md:px-[6px] rounded-radius50 sm:w-[18px] md:w-[23px] w-[34px]">
                      <Text
                        className="mb-[1px] text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        7
                      </Text>
                    </Column>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    I Am All Girls
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group7.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[127px] md:mb-[165px] mb-[240px] sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      7.2
                    </Text>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Tom Clancy’s Without Remorse
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group8.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[127px] md:mb-[165px] mb-[240px] sm:px-[4px] md:px-[6px] px-[9px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      8.1
                    </Text>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Godzilla vs. Kong
                  </Text>
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group9.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[127px] md:mb-[165px] mb-[240px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      7
                    </Text>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Those Who Wish Me Dead
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group10.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[127px] md:mb-[165px] mb-[240px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      6.2
                    </Text>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    The Virtuoso
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group11.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[127px] md:mb-[165px] mb-[240px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      8.5
                    </Text>
                  </Column>
                  <Text
                    className="mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Nobody
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius8 shadow-bs sm:w-[100%] w-[24%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col justify-start p-[14px] sm:p-[7px] md:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group12.png')" }}
                  >
                    <Text
                      className="bg-white_A700 border border-gray_900 border-solid flex items-center sm:mb-[119px] md:mb-[154px] mb-[225px] sm:px-[3px] md:px-[4px] px-[6px] rounded-radius50 text-gray_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[34px]"
                      as="h5"
                      variant="h5"
                    >
                      8.4
                    </Text>
                  </Column>
                  <Text
                    className="leading-[normal] mb-[11px] sm:mb-[5px] md:mb-[7px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] not-italic text-center text-gray_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[83%]"
                    as="h3"
                    variant="h3"
                  >
                    Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train
                  </Text>
                </Column>
              </Row>
            </List>
          </Column>
        </Column>
        <Column className="absolute bg-black_900_b2 flex flex-col items-center justify-start sm:p-[15px] md:p-[228px] p-[332px] w-[100%]">
          <Column className="bg-white_A700 flex flex-col items-center justify-start max-w-[583px] sm:mb-[115px] md:mb-[148px] mb-[216px] sm:mx-[0] md:p-[11px] sm:p-[15px] p-[17px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <Text
                className="mt-[3px] text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h2"
                variant="h2"
              >
                Army of the Dead
              </Text>
              <Button className="flex sm:h-[13px] md:h-[17px] h-[24px] items-center justify-center sm:w-[12px] md:w-[16px] w-[24px]">
                <Img
                  src="images/img_close.svg"
                  className="h-[13px] sm:h-[7px] md:h-[9px] flex items-center justify-center"
                  alt="close"
                />
              </Button>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mb-[11px] sm:mb-[5px] md:mb-[7px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
              <Img
                src="images/img_group3.png"
                className="max-w-[100%] sm:w-[100%] w-[51%]"
                alt="Movieposter"
              />
              <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                <Text
                  className="font-semibold text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  <span className="text-black_900 text-[14px] font-inter">
                    Release date:{" "}
                  </span>
                  <span className="text-black_900 text-[14px] font-inter font-normal not-italic">
                    May 13, 2021
                  </span>
                </Text>
                <Text
                  className="font-normal leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  as="h4"
                  variant="h4"
                >
                  Following a zombie outbreak in Las Vegas, a group of
                  mercenaries take the ultimate gamble: venturing into the
                  quarantine zone to pull off the greatest heist ever attempted.
                </Text>
                <Text
                  className="font-semibold md:mt-[11px] mt-[16px] sm:mt-[8px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  <span className="text-black_900 text-[14px] font-inter">
                    6.6{" "}
                  </span>
                  <span className="text-black_900 text-[14px] font-inter font-normal not-italic">
                    / 10 (1214 total votes)
                  </span>
                </Text>
              </Column>
            </Row>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default ModalPage;
