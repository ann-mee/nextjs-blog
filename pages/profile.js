import UserProfile from "@/components/profile/profile";
import { getSession } from "next-auth/react";

export default function Profile() {
  return <UserProfile />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
