/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { PrismaAdapter } from '@/lib/auth/prisma-adapter'
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'

export function bulildNextAuthOptions(
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res'],
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        profile: (profile: GoogleProfile) => {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            avatar_url: profile.picture,
          }
        },
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET ?? '',
        profile: (profile: GithubProfile) => {
          return {
            id: String(profile.id),
            name: profile.name!,
            email: profile.email!,
            avatar_url: profile.avatar_url,
          }
        },
      }),
    ],

    callbacks: {
      async session({ session, user }) {
        return {
          ...session,
          user,
        }
      },
    },
  }
}

export default function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, bulildNextAuthOptions(req, res))
}
