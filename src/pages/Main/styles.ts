import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormErrorInterface {
  hasError: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Logo = styled.section`
  margin-bottom: 25px;
  display: flex;
  align-items: center;

  span {
    color: #666;
    font-size: 30px;
    margin-left: 15px;
  }
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 38px;
  max-width: 400px;
  line-height: 1.2;
`;

export const Form = styled.form<FormErrorInterface>`
  margin-top: 40px;
  max-width: 700px;
  width: 100%;
  display: flex;
  border: 2px solid var(--primary-color);
  ${({ hasError }) =>
    hasError &&
    css`
      border: 2px solid #c33030;
      border-radius: 5px;
    `};
`;
export const Input = styled.input`
  flex: 1;
  height: 70px;
  padding: 0 10px;
  font-weight: bold;
  border: 0;
  border-radius: 5px 0 0 5px;
  font-size: 18px;
  color: #333;

  &::placeholder {
    font-weight: bold;
  }
`;
export const Submit = styled.button`
  width: 200px;
  border: 0;
  border-radius: 0px 5px 5px 0px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  background: var(--button-color-primary);
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
`;

export const Repository = styled.div`
  margin: 80px 0 30px;
  max-width: 700px;
`;
export const Link = styled.a`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 8px 10px;
  transition: transform 0.2s ease-in-out;

  display: flex;
  align-items: center;

  & + a {
    margin-top: 16px;
  }

  img {
    width: 70px;
    border-radius: 50%;
    margin-right: 15px;
  }

  svg {
    margin-left: auto;
  }

  &:hover {
    transform: translate3d(20px, 0, 0);
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RepoName = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;
export const Description = styled.p`
  color: #555;
  margin-top: 5px;
`;
export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
`;
