export interface LogoProps extends React.SVGProps<SVGSVGElement> {
    width?: number | string;
    height?: number | string;
    gradientStart?: string;
    gradientEnd?: string;
    strokeColor?: string;
    strokeWidth?: number;
    className?: string;
}
