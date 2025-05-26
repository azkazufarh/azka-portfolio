export interface Tool {
    id: number,
    title: string,
    item: ToolItem[]
};

export interface ToolItem {
    id: number;
    title: string;
    image: string;
};