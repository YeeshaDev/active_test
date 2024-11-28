'use client'

import { Suspense } from 'react';
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from 'posthog-js/react';

function PostHogPageViewContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (pathname && posthog) {
        let url = window.origin + pathname
        if (searchParams.toString()) {
          url = url + `?${searchParams.toString()}`
        }
        posthog.capture(
          '$pageview',
          {
            '$current_url': url,
          }
        )
      }
    }
  }, [pathname, searchParams, posthog])
  
  return null;
}

export default function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageViewContent />
    </Suspense>
  )
}