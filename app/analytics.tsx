"use client";

import { useEffect } from "react";
import { analytics } from "@/core/firebase/config";

export default function AnalyticsProvider() {
   useEffect(() => {
      analytics;
   }, []);

  return null;
}