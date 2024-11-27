'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PHProvider({
  children,
}: {
  children: React.ReactNode
}) {
    useEffect(() => {
        const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY as string
        const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST as string
  
        if (posthogKey && posthogHost) {
          posthog.init(posthogKey, {
            api_host: posthogHost,
            person_profiles: 'identified_only',
            capture_pageview: false,
            capture_pageleave: true
          })
        } else {
          console.warn('PostHog initialization failed: Missing environment variables')
        }
    }, []);
  
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}