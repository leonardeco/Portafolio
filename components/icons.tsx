"use client";

import {
  Browsers,
  Buildings,
  Gauge,
  Lightning,
  Plugs,
  Robot,
  ShieldCheck,
  ShieldStar,
  Sparkle,
  StackSimple,
  type Icon,
} from "@phosphor-icons/react";

const map: Record<string, Icon> = {
  browsers: Browsers,
  buildings: Buildings,
  gauge: Gauge,
  lightning: Lightning,
  plugs: Plugs,
  robot: Robot,
  shieldCheck: ShieldCheck,
  shield: ShieldStar,
  sparkle: Sparkle,
  stack: StackSimple,
};

export function NamedIcon({ name, size = 22 }: { name: string; size?: number }) {
  const Component = map[name] ?? Sparkle;
  return <Component size={size} weight="light" />;
}
