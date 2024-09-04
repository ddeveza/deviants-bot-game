import { cn } from "@/lib/utils";

export const UpgradeSVG = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 55 54"
      fill="none"
      className={cn(className)}
    >
      <path
        d="M27.5 4.5C15.08 4.5 5 14.58 5 27C5 39.42 15.08 49.5 27.5 49.5C39.92 49.5 50 39.42 50 27C50 14.58 39.92 4.5 27.5 4.5ZM27.5 19.6875C26.5775 19.6875 25.8125 18.9225 25.8125 18C25.8125 17.0775 26.5775 16.3125 27.5 16.3125C33.395 16.3125 38.1875 21.105 38.1875 27C38.1875 32.895 33.395 37.6875 27.5 37.6875C26.5775 37.6875 25.8125 36.9225 25.8125 36C25.8125 35.0775 26.5775 34.3125 27.5 34.3125C31.5275 34.3125 34.8125 31.0275 34.8125 27C34.8125 22.9725 31.5275 19.6875 27.5 19.6875ZM27.5 44.4375C17.8925 44.4375 10.0625 36.6075 10.0625 27C10.0625 26.0775 10.8275 25.3125 11.75 25.3125C12.6725 25.3125 13.4375 26.0775 13.4375 27C13.4375 34.7625 19.7375 41.0625 27.5 41.0625C35.2625 41.0625 41.5625 34.7625 41.5625 27C41.5625 19.2375 35.2625 12.9375 27.5 12.9375C26.5775 12.9375 25.8125 12.1725 25.8125 11.25C25.8125 10.3275 26.5775 9.5625 27.5 9.5625C37.1075 9.5625 44.9375 17.3925 44.9375 27C44.9375 36.6075 37.1075 44.4375 27.5 44.4375Z"
        fill="#171717"
      />
    </svg>
  );
};
