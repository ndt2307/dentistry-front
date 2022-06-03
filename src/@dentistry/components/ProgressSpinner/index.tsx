import { Spin } from 'antd'

const ProgressSpinner = (): JSX.Element => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Spin size='large' />
  </div>
)

export default ProgressSpinner
