import CustomError, { CustomErrorProps } from "@/components/CustomError";
import { NextPageContext } from "next";

function Error(params: CustomErrorProps) {
  return <CustomError {...params} />;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const insideStatusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { err, insideStatusCode };
};

export default Error;
