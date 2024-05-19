import {
  TargetBody,
  TargetBodyHeader,
  TargetContainer,
  TargetHeader,
  TargetLayout,
} from './styled';
import { Table, Button, Modal, Space, Select, Input, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import * as selectors from './targetSlice';

const Target = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.selectIsLoading);
  const listTarget = useSelector(selectors.selectListTarget);
  console.log(listTarget);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [amount, setAmount] = useState('');

  const dataSource = [];

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: 'Thứ trong tuần',
      dataIndex: 'dayOfWeek',
      key: 'dayOfWeek',
    },
    {
      title: 'Thời gian học',
      dataIndex: 'studyTime',
      key: 'studyTime',
    },
    {
      title: 'Số lượng bài học',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Sửa</Button>
          <Button type="primary" color="red">
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const handleOk = () => {
    setIsOpenModal(false);
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    const getCookie = (name) => {
      let nameEQ = name + '=';
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
        }
      }
      return null;
    };
    const userId = getCookie('id');
    dispatch(actions.getListTarget(userId));
  }, []);

  return (
    <TargetContainer>
      <TargetLayout>
        <TargetHeader>
          Hãy thiết lập mục tiêu để có kết quả học tốt hơn
        </TargetHeader>
        <TargetBody>
          <TargetBodyHeader>
            <div style={{ fontSize: 20, fontWeight: 700 }}>
              Tổng số mục tiêu: 0
            </div>
            <Button type="primary" onClick={() => setIsOpenModal(true)}>
              Thêm mới
            </Button>
          </TargetBodyHeader>
          <Table columns={columns} dataSource={dataSource} />
        </TargetBody>
      </TargetLayout>
      <Modal
        title="Thêm mới"
        open={isOpenModal}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Xác nhận"
        cancelText="Hủy"
      >
        <Space wrap direction="vertical">
          <div>
            <h4>Chọn thứ trong ngày</h4>
            <Select
              defaultValue="lucy"
              style={{ width: 200 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </div>
          <div>
            <h4>Chọn thời gian học</h4>
            <Select
              defaultValue="lucy"
              style={{ width: 200 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </div>
          <div>
            <h4>Nhập số lượng bài học</h4>
            <Tooltip
              trigger={['focus']}
              title={'Nhập số'}
              placement="topLeft"
              overlayClassName="numeric-input"
            >
              <Input
                value={amount}
                onChange={(e) => {
                  const { value: inputValue } = e.target;
                  const reg = /^-?\d*(\.\d*)?$/;
                  if (
                    reg.test(inputValue) ||
                    inputValue === '' ||
                    inputValue === '-'
                  ) {
                    setAmount(inputValue);
                  }
                }}
                placeholder="Nhập số lượng bài học hoàn thành"
                maxLength={2}
              />
            </Tooltip>
          </div>
        </Space>
      </Modal>
    </TargetContainer>
  );
};

export default Target;
