import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;
export const Header = styled.header`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  span {
    color: #666;
    font-size: 30px;
    margin-left: 15px;
  }
`;
export const Icon = styled(Link)`
  display: flex;
  align-items: center;
  > span {
    font-size: 20px !important;
  }
`;
export const RepoInfo = styled.section`
  margin-bottom: 60px;
  ul {
    display: flex;

    li {
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      strong {
        color: #fff;
        font-size: 22px;
        margin-bottom: 5px;
      }

      span {
        color: #aaa;
        font-size: 16px;
      }
    }
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
export const Box = styled.div`
  margin-left: 10px;

  span {
    font-size: 30px;
    color: #fff;
    font-weight: bold;
  }
  p {
    color: #aaa;
    margin-top: 5px;
  }
`;

export const Issues = styled.a`
  background: #fff;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;

  & + a {
    margin-top: 15px;
  }

  &:hover {
    transform: translate3d(10px, 0, 0);
  }
`;
export const BoxIssues = styled.div`
  flex: 1;

  span {
    color: #333;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    color: #555;
    margin-top: 5px;
  }
`;
