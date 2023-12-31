import { Navigation } from "@/components/Navigation";
import { fetchTest } from "@/lib";
import { ExampleData } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <p>index page from/pages</p>
      <p>Title: {data.title}</p>
      <p>Number: {data.randomNumber}</p>
      <Navigation />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: ExampleData;
}> = async () => {
  const data = await fetchTest();
  return { props: { data } };
};
