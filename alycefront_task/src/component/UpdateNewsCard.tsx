import * as React from "react";

import styled from "styled-components";
import { List, Space, Button } from "antd";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";

interface UpdateCardProps {
  data: Data[];
  handleShowModal: (value: any) => void;
}

export interface Data {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: Source;
}

export interface Source {
  id: string;
  name: string;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Container = styled.div`
  display: flex;
  height: 660px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const NewsCard = ({ data, handleShowModal }: UpdateCardProps) => (
  <>
    <Container>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        style={{
          display: "flex",
          width: 1000,
          flexDirection: "column",
          margin: "0 auto",
        }}
        dataSource={data}
        renderItem={(item, index) => {
          const date: any = new Date(item.publishedAt);

          return (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={150}
                  height={150}
                  alt="logo"
                  src={`${item.urlToImage}`}
                />
              }
            >
              <List.Item.Meta
                title={
                  <a
                    href={item.url}
                    style={{ fontWeight: "bold" }}
                    target="_blank"
                  >{`제목 : ${item.title}`}</a>
                }
                description={`작성자 : ${
                  item.author
                }   작성날짜 : ${date.getFullYear()}/${date.getMonth()}/${date.getDate()}   출처 : ${
                  item.source.name !== null ? item.source.name : "없음"
                }`}
              />
              {`${item.description.slice(0, 120)}...`}
              <ButtonContainer>
                <>
                  <Button type="primary" name="login" onClick={handleShowModal}>
                    기사 내용 수정
                  </Button>
                </>
              </ButtonContainer>
            </List.Item>
          );
        }}
      />
    </Container>
  </>
);

export default NewsCard;
