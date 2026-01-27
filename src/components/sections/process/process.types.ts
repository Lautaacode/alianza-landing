export interface ProcessStep {
    title: string
    description: string
}

export interface ProcessContent {
    title: string
    steps: ProcessStep[]
}
