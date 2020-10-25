import * as React from "react";
import styled from "styled-components";

import { Layout, Input } from "antd";

const { Content } = Layout;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  padding: 10px;
`;

const Div = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-right: 30px;
  width: 100px;
`;

const Inputs = styled(Input)`
  width: 300px;
  height: 30px;
  line-height: 17px;
  font-size: 14px;
  color: #9b9b9b;
`;

interface LoginProps {
  userId: String;
  userPassword: String;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginProps> = ({
  userId,
  userPassword,
  handleChange,
}) => (
  <>
    <Content style={{ margin: "0 auto" }}>
      <Container>
        <Div>아이디</Div>
        <Inputs
          placeholder="아이디를 입력해주세요"
          name="userId"
          value={`${userId}`}
          onChange={handleChange}
        />
      </Container>
      <Container>
        <Div>비밀번호</Div>
        <Inputs
          type="password"
          placeholder="비밀번호 입력해주세요"
          name="userPassword"
          value={`${userPassword}`}
          onChange={handleChange}
        />
      </Container>
    </Content>
  </>
);

export default LoginForm;
