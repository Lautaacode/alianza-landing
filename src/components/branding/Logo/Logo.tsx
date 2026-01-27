import { PATH_D } from "./Logo.path";
import type { LogoProps } from "./Logo.types";



export default function Logo({
    gradientStart,
    gradientEnd,
    strokeColor,
    strokeWidth = 2,
    ...props
}: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="80 95 350 350"
            {...props}
        >
            <defs>
                <linearGradient id="gradFill" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={gradientStart} />
                    <stop offset="100%" stopColor={gradientEnd} />
                </linearGradient>
            </defs>

            <path
                d={PATH_D}
                fill="url(#gradFill)"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
            />
        </svg>
    );
}
