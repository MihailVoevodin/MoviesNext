import {Spin} from 'antd';
import {FC} from 'react';
import {LoadingOutlined} from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{fontSize: 24}} spin />;

/** Спиннер загрузки при запросе с клиента. */
export const Spinner: FC = () => {
    return <Spin size="large" className="spinner" indicator={antIcon} />;
};
