import { IProp } from './type'

const ErrorComponent = ({ error }: IProp): JSX.Element => <>{error.message}</>

export default ErrorComponent
