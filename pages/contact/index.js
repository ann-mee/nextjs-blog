import Head from "next/head";
import Form from "@/components/contact/form";
import { useSession } from "next-auth/react";

export default function ContactPage() {
  const { data: session, loading } = useSession();
  console.log(session);
  return (
    <>
      <Head>
        <title>Contact me</title>
      </Head>
      <Form />
    </>
  );
}
