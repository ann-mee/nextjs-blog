import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "@/helpers/api-users";
import { verifyPassword } from "@/helpers/auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await getUser(credentials.email);

        if (!user) {
          throw new Error("No user");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
};

export default NextAuth(authOptions);
