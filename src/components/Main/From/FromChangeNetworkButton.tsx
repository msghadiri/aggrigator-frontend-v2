import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { RootState } from "../../../app/store";
import ArrowDownFont from "../../../assets/arrow-down-sign-to-navigate.png";
import { fromNetworklistStatus } from "../../../features/modals/modalsSlice";
const StyledButton = styled.div<{ backgroundColor: string }>`
  width: 50%;
  min-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  margin: 0 10px;
  text-decoration: none;
  border-radius: 15px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#EEEEEE"};
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;
const FromChangeNetworkButton: FC<{
  imageSrc: string;
  coinName: string;
}> = ({ imageSrc, coinName }) => {
  const dispatch = useDispatch();
  const themeMode = useSelector(({ theme }: RootState) => theme.value);
  return (
    <>
      <StyledButton
        backgroundColor={themeMode === "light" ? "#EEEEEE" : "#393E46"}
        onClick={() => dispatch(fromNetworklistStatus(true))}
      >
        <div className="w-[20%]">
          <img src={imageSrc} alt="" className="w-[32px]" />
        </div>
        <div className="mx-5 w-[60%] text-center">
          <h3>{coinName}</h3>
        </div>
        <div className="w-[20%]">
          <img src={ArrowDownFont} alt="" className="w-[10px]" />
        </div>
      </StyledButton>
    </>
  );
};

export default FromChangeNetworkButton;
