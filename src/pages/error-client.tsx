import { fetchTest } from "@/lib";
import { ExampleData } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const ErrorMessage = `Client custom error with data: ${data.title} / ${data.randomNumber}`;
  throw new Error(ErrorMessage, {
    cause: {
      name: "my name",
      customMessage: "some random message",
    },
  });

  // return (
  //   <main>
  //     <p>error client page</p>
  //     <p>Title: {data.title}</p>
  //     <p>Number: {data.randomNumber}</p>
  //     <Navigation />
  //   </main>
  // );
}

export const getServerSideProps: GetServerSideProps<{
  data: ExampleData;
}> = async () => {
  const data = await fetchTest();
  return { props: { data } };
};
