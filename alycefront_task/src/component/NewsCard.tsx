import * as React from "react";
import { List } from "antd";

interface CardProps {
  data: Data[];
}

export interface Data {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const NewsCard = ({ data }: CardProps) => (
  <>
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          extra={<img width={272} alt="logo" src={`${item.urlToImage}`} />}
        >
          <List.Item.Meta
            title={<a href={item.url}>{item.title}</a>}
            description={`${item.description.slice(0, 20)} ...`}
          />
          {item.content}
        </List.Item>
      )}
    />
  </>
);

export default NewsCard;
