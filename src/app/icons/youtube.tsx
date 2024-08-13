import { cn } from "@/utils/utils";
import { HTMLAttributes } from "react";

export type IconProps = HTMLAttributes<HTMLDivElement>

const YouTubeIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className={cn("fill-current text-[#fcfcfc]", className)}
        >
            <path d="M25.024 22a1.0002 1.0001 0 0 0-1.0235 1v14a1.0002 1.0001 0 0 0 1.504 0.8633l12.001-7.0001a1.0002 1.0001 0 0 0 0-1.7266l-12.001-7.0001a1.0002 1.0001 0 0 0-0.4805-0.13672zm0.97663 2.7403 9.0162 5.2599-9.0162 5.2599z" />
            <path d="M18 14c-5.5227 0-10 4.4773-10 10v12c0 5.5227 4.4773 10 10 10h24c5.5227 0 10-4.4773 10-10v-12c0-5.5227-4.4773-10-10-10h-24zm0 2h24c4.4493 0 8 3.5507 8 8v12c0 4.4493-3.5507 8-8 8h-24c-4.4493 0-8-3.5507-8-8v-12c0-4.4493 3.5507-8 8-8z" />
        </svg>
    );
};

export default YouTubeIcon;
