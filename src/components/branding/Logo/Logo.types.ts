import type { SVGMotionProps } from "framer-motion";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
    strokeColor?: string;
    strokeWidth?: number;
    gradientStart?: string;
    gradientEnd?: string;
}

export interface AnimatedLogoConfig extends LogoProps {
    duration?: number;
}

export interface AnimatedLogoProps extends AnimatedLogoConfig {
    motionProps?: SVGMotionProps<SVGSVGElement>;
}
