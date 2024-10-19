interface ErrorMessage {
  msg: string;
}

const ErrorMessage = ({ msg }: ErrorMessage) => {
  return msg ? (
    <span className="text-red-500 font-semibold text-sm block">{msg}</span>
  ) : null;
};

export default ErrorMessage;
