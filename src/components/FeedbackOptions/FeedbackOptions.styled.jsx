import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const FeedbackButton = styled.button`
  width: 90px;
  color: #000;
  background-color: #fff;
  font-size: 22px;
  padding: 5px;
  border-radius: 8px;
  border: 2px solid #fff;
  border-radius: 20px;

  &:hover,
  &:focus {
    cursor: pointer;
    border: 2px solid #000;
    border-radius: 20px;
  }
`;

