/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import CardB from "./CardB";
export default function HomeCard(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <CardB
        display="flex"
        gap="0"
        direction="column"
        width="320px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.CardB[0]")}
      >
        <Image
          width="320px"
          height="160px"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          src={home?.image_url}
          {...getOverrideProps(overrides, "Flex.CardB[0].Image[0]")}
        ></Image>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="16px 16px 16px 16px"
          {...getOverrideProps(overrides, "Flex.CardB[0].Flex[0]")}
        >
          <Flex
            gap="8px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.CardB[0].Flex[0].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="288px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              children={home?.address}
              {...getOverrideProps(
                overrides,
                "Flex.CardB[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="288px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              children={`${"Price $"}${home?.price}`}
              {...getOverrideProps(
                overrides,
                "Flex.CardB[0].Flex[0].Flex[0].Text[1]"
              )}
            ></Text>
          </Flex>
        </Flex>
      </CardB>
    </Flex>
  );
}
