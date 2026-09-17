"use client";

import { useEffect, useMemo, useState } from "react";

type CountUpMetricProps = {
  value: string;
  label: string;
};

const durationMs = 1200;

function parseMetricValue(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);

  if (!match) {
    return {
      target: 0,
      suffix: value,
      decimals: 0
    };
  }

  const numericPart = match[1];
  const decimals = numericPart.includes(".") ? numericPart.split(".")[1].length : 0;

  return {
    target: Number(numericPart),
    suffix: match[2],
    decimals
  };
}

export function CountUpMetric({ value, label }: CountUpMetricProps) {
  const { target, suffix, decimals } = useMemo(() => parseMetricValue(value), [value]);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(target * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [target]);

  return (
    <div className="rounded-lg border border-brand-line bg-brand-canvas p-5">
      <p className="font-display text-3xl font-bold text-brand-navy" aria-label={`${value} ${label}`}>
        {displayValue.toFixed(decimals)}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-brand-muted">{label}</p>
    </div>
  );
}
