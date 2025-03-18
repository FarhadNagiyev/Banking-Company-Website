export type ContentItem = {
    icon: string;
    title: string;
    description: string;
    variant: "left" | "right";
};
export interface LineContent {
    left: ContentItem;
    right: ContentItem;
}