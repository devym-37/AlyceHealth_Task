import * as React from "react";
import LoginForm from "../../component/LoginForm";
import NewsCard from "../../component/NewsCard";
import styled from "styled-components";
import { Layout, Button, Modal, Input } from "antd";

const { Content } = Layout;
const { Search } = Input;

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
  userId: string;
  userPassword: string;
  modalVisible: boolean;
  isUser: boolean;
  loginUser: string;
  resultData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowModal(): void;
  handleCancel(): void;
  handleSubmit(): void;
  handleLogOut(): void;
  handleSearch: (value: string) => void;
  handleLikeData: (value: any) => void;
}

const HomePresenter = ({
  userId,
  userPassword,
  modalVisible,
  handleChange,
  handleShowModal,
  handleCancel,
  handleSubmit,
  isUser,
  loginUser,
  resultData,
  handleLogOut,
  handleSearch,
  handleLikeData,
}: HomeProps) => (
  <>
    <Content style={{ margin: "0 auto", width: 850 }}>
      <ButtonContainer>
        <Search
          placeholder="기사 주제 검색"
          style={{ width: 400, marginRight: 200 }}
          onSearch={handleSearch}
          enterButton
        />
        {!isUser ? (
          <>
            <Button type="primary" name="login" onClick={handleShowModal}>
              로그인
            </Button>
          </>
        ) : (
          <>
            <Title>{`${loginUser} 님`}</Title>
            <Button type="primary" name="logout" onClick={handleLogOut}>
              로그아웃
            </Button>
          </>
        )}
      </ButtonContainer>

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
      {resultData.length !== 0 ? (
        <NewsCard data={resultData} handleLikeData={handleLikeData} />
      ) : null}
    </Content>
  </>
);

export default HomePresenter;
