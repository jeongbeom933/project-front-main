import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.PALLETE.background.white};
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  // 가로 중앙
  gap: 24px;            // 요소 간 간격
  padding-top: 200px;
`

export const AddButton = styled.button`
  width: 298px;
  height: 56px;

  border: 1px solid #FF4D26;
  border-radius: 5px;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};

  color: #262626; 
  cursor: pointer;
`;



