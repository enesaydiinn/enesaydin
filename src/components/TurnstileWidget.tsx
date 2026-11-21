"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      size: "flexible";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    }
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileWidgetProps = {
  siteKey: string;
  resetSignal: number;
  onTokenChange: (token: string) => void;
};

export function TurnstileWidget({ siteKey, resetSignal, onTokenChange }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!scriptReady || !window.turnstile || !containerRef.current) return;

    const widgetId = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      size: "flexible",
      callback: (token) => {
        setLoadError(false);
        onTokenChange(token);
      },
      "expired-callback": () => onTokenChange(""),
      "error-callback": () => {
        onTokenChange("");
        setLoadError(true);
      }
    });
    widgetIdRef.current = widgetId;

    return () => {
      window.turnstile?.remove(widgetId);
      widgetIdRef.current = null;
    };
  }, [scriptReady, siteKey, onTokenChange]);

  useEffect(() => {
    if (resetSignal === 0 || !widgetIdRef.current) return;
    onTokenChange("");
    window.turnstile?.reset(widgetIdRef.current);
  }, [resetSignal, onTokenChange]);

  return (
    <div className="min-w-0" aria-label="Bot doğrulaması">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
        onError={() => setLoadError(true)}
      />
      <div ref={containerRef} />
      {loadError ? (
        <p className="mt-2 text-sm text-red-600" role="alert">
          Doğrulama yüklenemedi. Sayfayı yenileyip tekrar deneyin.
        </p>
      ) : null}
    </div>
  );
}
