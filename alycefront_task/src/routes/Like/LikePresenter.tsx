import * as React from "react";
import UpdateNewsForm from "../../component/UpdateNewsForm";
import UpdateNewsCard from "../../component/UpdateNewsCard";
import { Layout, Modal, Empty } from "antd";

const { Content } = Layout;

interface LikeProps {
  modalVisible: boolean;
  resultData: any;
  likeData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUnlikeData: (value: any) => void;
  handleShowModal: (value: any) => void;
  handleCancel(): void;
  handleSubmit(): void;
}

const LikePresenter = ({
  modalVisible,
  handleChange,
  handleShowModal,
  handleCancel,
  handleSubmit,
  resultData,
  likeData,
  handleUnlikeData,
}: LikeProps) => (
  <>
    <Content style={{ margin: "0 auto", width: 850 }}>
      <Modal
        visible={modalVisible}
        cancelText="취소"
        okText={"수정"}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <UpdateNewsForm handleChange={handleChange} data={resultData} />
      </Modal>
      {likeData.length !== 0 ? (
        <UpdateNewsCard
          data={likeData}
          handleShowModal={handleShowModal}
          handleUnlikeData={handleUnlikeData}
        />
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Content>
  </>
);

export default LikePresenter;
