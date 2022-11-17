export interface BlogDataInterface{
    theme: string,
    date: string,
    time?: string,
    title: string,
    text: string,
    type: string,
}

export const blogCards: BlogDataInterface[] = [
    {theme: 'Design', date: "July 28, 2020", time: '36 min',
        title: "What are color profiles and how they work in graphic design",
        text: "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend",
        type: 'podcast'
    },
    {theme: 'Development', date: "September 1, 2020", time: '36 min',
        title: "How to choose the first programming language for a beginner",
        text: "Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui",
        type: 'article'
    },
    {theme: 'Design', date: "August 8, 2020", time: '36 min',
        title: "Should you choose a creative profession if you are attracted to creativity?",
        text: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices",
        type: 'article'
    },
]