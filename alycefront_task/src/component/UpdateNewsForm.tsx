import * as React from "react";
import styled from "styled-components";
import moment from "moment";

import { Layout, Breadcrumb, Input, Select } from "antd";

const { Content } = Layout;
const { Option } = Select;

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
  data: Data[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

const UpdateNewsForm: React.FC<LoginProps> = ({ data, handleChange }) => (
  <>
    <Content style={{ margin: "0 auto" }}>
      <Container>
        <Div>기사 제목</Div>
        <Inputs name="title" disabled value={data[0].title} />
      </Container>
      <Container>
        <Div>저자</Div>
        <Inputs name="author" disabled value={`${data[0].author}`} />
      </Container>
      <Container>
        <Div>기사내용</Div>
        <Inputs
          name="description"
          value={data[0].description}
          onChange={handleChange}
        />
      </Container>
    </Content>
  </>
);

export default UpdateNewsForm;
