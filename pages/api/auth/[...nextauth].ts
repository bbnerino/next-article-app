import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "b4502b8f7d0a1359f75e",
      clientSecret: "07e26cd3454eabbac8e8dc693d8d2bf93c887b44",
    }),
  ],
  secret: "qwer1234",
};
export default NextAuth(authOptions);
