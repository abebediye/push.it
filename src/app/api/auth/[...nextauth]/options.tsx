import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@repository";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";



export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            profile(_profile) {
                console.log("auth", _profile)
                return {
                    id: _profile.sub,
                    name: _profile.name,
                    first_name: _profile.given_name,
                    last_name: _profile.family_name,
                    emailVerified: _profile.email_verified,
                    email: _profile.email,
                    image: _profile.picture
                }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            profile(_profile) {
                console.log("auth", _profile)
                return {
                    id: _profile.id,
                    name: _profile.name,
                    email: _profile.email,
                    image: _profile.avatar_url
                }
            }
        }),
    ],
    session: {
        strategy: 'jwt'
    }
}