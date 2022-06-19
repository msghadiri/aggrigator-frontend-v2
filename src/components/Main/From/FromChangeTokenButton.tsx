import React, { FC, HTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ArrowDownFont from "../../../assets/arrow-down-sign-to-navigate.png";
import { fromTokenlistStatus } from "../../../features/modals/modalsSlice";
const StyledButton = styled.div<HTMLAttributes<HTMLElement>>`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  margin: 0 10px;
  text-decoration: none;
  border-radius: 15px;
  background-color: #eeeeee;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;
const FromChangeChainButton: FC<{
  imageSrc: string;
  coinName: string;
  chain: string;
}> = ({ imageSrc, coinName, chain }) => {
  const dispatch = useDispatch();
  return (
    <StyledButton onClick={() => dispatch(fromTokenlistStatus(true))}>
      {/* <div>
        <img src={imageSrc} alt="" />
      </div>
      <div className="mx-5">
        <h3>{coinName}</h3>
        <h6>{chain}</h6>
      </div> */}
      <div className="mx-5">
        <h2>Select Token</h2>
      </div>
      <div>
        <img src={ArrowDownFont} alt="" />
      </div>
      
    </StyledButton>
  );
};

export default FromChangeChainButton;