import { Navigation } from "./Navigation";

export type CustomErrorProps = {
  err: Error;
  insideStatusCode?: number | undefined;
};

export default function CustomError({
  insideStatusCode,
  err,
}: CustomErrorProps) {
  console.log("🔖 custom error component props", {
    insideStatusCode,
    err,
  });

  const { message, name, stack, cause } = err;

  return (
    <div className="flex flex-col gap-2 text-xl text-white h-full w-full bg-gradient-to-b from-red-500 to-red-900 p-4">
      <Navigation />
      <p>insideStatusCode: {insideStatusCode}</p>
      <p>message: {message}</p>
      <p>name: {name}</p>
      <pre>stack:{stack}</pre>
      <pre>cause:{JSON.stringify(cause)}</pre>
    </div>
  );
}
