import * as React from "react";
import LoginForm from "../../component/LoginForm";
import styled from "styled-components";
import { Layout, Button, Modal } from "antd";

const { Content } = Layout;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Title = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  margin-right: 15px;
`;

interface HomeProps {
  searchTerm: string;
  userId: string;
  userPassword: string;
  modalVisible: boolean;
  isUser: boolean;
  loginUser: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowModal(): void;
  handleCancel(): void;
  handleSubmit(): void;
  handleLogOut(): void;
}

const HomePresenter: React.FC<HomeProps> = ({
  searchTerm,
  userId,
  userPassword,
  modalVisible,
  handleChange,
  handleShowModal,
  handleCancel,
  handleSubmit,
  isUser,
  loginUser,
  handleLogOut,
}) => (
  <>
    <Content style={{ margin: "0 auto", width: 850 }}>
      {!isUser ? (
        <ButtonContainer>
          <Button type="primary" name="login" onClick={handleShowModal}>
            로그인
          </Button>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Title>{`${loginUser} 님`}</Title>
          <Button type="primary" name="logout" onClick={handleLogOut}>
            로그아웃
          </Button>
        </ButtonContainer>
      )}
    </Content>

    <Modal
      visible={modalVisible}
      cancelText="취소"
      okText={"로그인"}
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <LoginForm
        handleChange={handleChange}
        userId={userId}
        userPassword={userPassword}
      />
    </Modal>
  </>
);

export default HomePresenter;
