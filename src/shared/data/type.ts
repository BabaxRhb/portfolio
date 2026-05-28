interface ChildrenProps {
    children: React.ReactNode;
}

export type {
    ChildrenProps
}

export type projectType = {
    title: string;
    shortDescription: string;
    description: string;
    techno: string[];
    imgUrl?: string;
    contribution?: string;
    link?: string;
    type?: string;
}