import { logEvent } from "firebase/analytics";
import { analytics } from "@/core/firebase/config";

export const trackEvent = (eventName: string) => {
   if(analytics !== undefined){
      logEvent(analytics, eventName);
   }
};