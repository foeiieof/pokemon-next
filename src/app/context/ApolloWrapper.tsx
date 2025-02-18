"use client"
import { HttpLink } from '@apollo/client'
import { ApolloClient, InMemoryCache, ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support'
import React from 'react'

const ClientConfig = () => {
  const httpLink = new HttpLink({
    uri: 'https://graphql-pokemon2.vercel.app',
    fetchOptions: { cors: "*" }
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
  })
}

const ApolloWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloNextAppProvider makeClient={ClientConfig}> {children} </ApolloNextAppProvider>
  )
}

export default ApolloWrapper
