interface ErrorMessage {
  msg: string;
}

const ErrorMessage = ({ msg }: ErrorMessage) => {
  return msg ? (
    <span className="text-red-500 font-semibold text-sm block dark:text-red-500 dark:font-extrabold">{msg}</span>
  ) : null;
};

export default ErrorMessage;
