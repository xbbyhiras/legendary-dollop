type TPathItem<TAdditional = Record<string, never>> = {
    value: string;
} & TAdditional;
export type TBreadcrumbsProps<TAdditional = Record<string, never>> = {
    /**
     * The items to display in the breadcrumbs
     */
    items: TPathItem<TAdditional>[];
    /**
     * If true, the root item will be included in the breadcrumbs
     */
    includeRoot?: boolean;
    /**
     * Callback for when an item is clicked
     */
    onClick?: (clickedItem: TPathItem<TAdditional>) => void;
};
export declare const Breadcrumbs: <TAdditional = Record<string, never>>({ items, onClick, includeRoot, }: TBreadcrumbsProps<TAdditional>) => import("react/jsx-runtime").JSX.Element;
export {};
