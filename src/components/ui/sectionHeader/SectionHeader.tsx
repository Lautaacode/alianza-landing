import type { SectionHeaderProps } from "./sectionHeader.types"

export const SectionHeader = ({
    title,
    description,
    className,
}: SectionHeaderProps) => {
    return (
        <header className={`mx-auto ${className ?? ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-lg text-text-muted">
                    {description}
                </p>
            )}
        </header>
    )
}
