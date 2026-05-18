import type * as React from "react";
import * as motionPrimitives from "framer-motion/client";

export const motion = motionPrimitives as Record<string, React.ComponentType<Record<string, unknown>>>;
