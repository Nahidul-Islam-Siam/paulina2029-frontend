/* eslint-disable @typescript-eslint/no-explicit-any */
import { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL;
export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your Gmail",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
          required: true,
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;
        const response = await axios.post(`${url}/admin`, { email, password });

        if (response.status === 200) {
          // If login is successful, return the user object
          const user = {
            id: response.data.data._id, // Replace with dynamic user ID
            name: response.data.data.name, // Replace with dynamic user name
            email: response.data.data.email,
            role: response.data.data.role, // Assuming the backend returns role info
          };
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({
      token,
      account,
      user,
    }: {
      token: any;
      account: any;
      user: any;
    }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.role = user.role;
      }
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: { session: any; token: any }) {
      session.user.role = token.role;
      return session;
    },
  },
};
