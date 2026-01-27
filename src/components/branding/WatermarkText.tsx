export const WatermarkText = ({ children }: { children: string }) => {
    return (
        <span
            className="
                font-extrabold
                uppercase
                tracking-tight
                leading-none
                select-none
                text-center
                text-[clamp(2.5rem,10vw,8rem)]
                md:text-[clamp(4rem,12vw,10rem)]
                text-primary/5
            "
        >
            {children}
        </span>
    )
}
