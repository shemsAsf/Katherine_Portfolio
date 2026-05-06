// ─────────────────────────────────────────────────────────────────────────────
// ElementSchema.ts
// Defines the human-readable metadata and field definitions for every element
// in the ElementRegistry. This drives the builder UI automatically.
// ─────────────────────────────────────────────────────────────────────────────

export type FieldType =
    | "text"
    | "textarea"
    | "options"
    | "color"
    | "number"
    | "boolean"
    | "image"           // single image upload
    | "imageList"       // list of image URLs / uploads
    | "stringList"      // list of plain strings
    | "imageRowList"    // list of { url, width: { mobile, desktop } }
    | "video"
    | "toolsSelector"
    | "pigeonSelector"

export interface FieldDef {
    key: string;
    label: string;
    type: FieldType;
    required?: boolean;
    default?: unknown;
    placeholder?: string;
    options?: string[]
}

export interface ElementSchema {
    type: string;
    label: string;           // human readable name shown in the picker
    category: string;
    description: string;
    fields: FieldDef[];
}

export const CATEGORIES = [
    { id: "titles", label: "Titles & Headers" },
    { id: "text", label: "Text & Content" },
    { id: "details", label: "Project Details" },
    { id: "media", label: "Images & Media" },
    { id: "layout", label: "Layout & Spacing" },
    { id: "unique", label: "Unique Elements" },
] as const;


export const ELEMENT_SCHEMAS: ElementSchema[] = [

    // ----- TitleElements -----
    {
        type: "header",
        label: "Project Header",
        category: "titles",
        description: "Full hero section with background, paragraphs and tool logos",
        fields: [
            { key: "title", label: "Title", type: "stringList", required: true },
            { key: "subtitle", label: "Subtitle", type: "text", required: true },
            { key: "backgroundImage", label: "Background Image", type: "image", required: true },
            { key: "accentColor", label: "Accent Color", type: "color", default: "var(--primary-color)" },
            { key: "paragraphs", label: "Paragraphs", type: "stringList", required: true, placeholder: "Supports **bold** markdown" },
            { key: "components", label: "Components List", type: "stringList", placeholder: "e.g. **3D modeling** using Blender" },
            { key: "tools", label: "Tools", type: "toolsSelector" },
        ]
    },
    {
        type: "title",
        label: "Title",
        category: "titles",
        description: "Basic Title with no decorator",
        fields: [
            { key: "text", label: "Text", type: "text", required: true },
            { key: "color", label: "Color", type: "color", default: "var(--primary-color)" },
            { key: "backgroundColor", label: "BackgroundC olor", type: "color", default: "white" },
            { key: "alignMobile", label: "Align Mobile", type: "options", default: "center", options: ["left", "center", "right"] },
            { key: "alignDesktop", label: "Align Desktop", type: "options", default: "left", options: ["left", "center", "right"] },
        ]
    },
    {
        type: "pigeonTitle",
        label: "Pigeon Title",
        category: "titles",
        description: "Section title with a decorative pigeon illustration",
        fields: [
            { key: "text", label: "Text", type: "text", required: true },
            { key: "color", label: "Color", type: "color", default: "var(--primary-color)" },
            { key: "backgroundColor", label: "Background Color", type: "color", default: "white" },
            { key: "alignMobile", label: "Align Mobile", type: "options", default: "center", options: ["left", "center", "right"] },
            { key: "alignDesktop", label: "Align Desktop", type: "options", default: "left", options: ["left", "center", "right"] },
            { key: "index", label: "Decorated Letter Index", type: "number", default: 0 },
            { key: "pigeon", label: "Pigeon", type: "pigeonSelector", required: true },
        ]
    },

    // ----- TextElements -----
    {
        type: "textBlock",
        label: "Text Block",
        category: "text",
        description: "Multiple paragraphs grouped together, supports **bold** markdown",
        fields: [
            { key: "paragraphs", label: "Paragraphs", type: "stringList", required: true },
            { key: "color", label: "Text Color", type: "color", default: "black" },
            { key: "backgroundColor", label: "BackgroundC olor", type: "color", default: "white" },
            { key: "size", label: "Text Size", type: "options", default: "medium", options: ["tiny", "small", "medium", "large", "xlarge"] },
            { key: "widthMobile", label: "Width Mobile (%)", type: "number", default: 100 },
            { key: "widthDesktop", label: "Width Desktop (%)", type: "number", default: 45 },
            { key: "alignMobile", label: "Align Mobile", type: "options", default: "center", options: ["left", "center", "right"] },
            { key: "alignDesktop", label: "Align Desktop", type: "options", default: "left", options: ["left", "center", "right"] },
        ]
    },

    // ----- ProjectDetailElements -----
    {
        type: "projectDetailFan",
        label: "Detail With Spinning Fan",
        category: "details",
        description: "Project Detail part with Fan carousel",
        fields: [
            { key: "paragraphs", label: "Paragraphs", type: "stringList", required: true },
            { key: "images", label: "Images", type: "imageList", required: true },
            { key: "backgroundColor", label: "Background Color", type: "color", default: "var(--primary-color)" },
            { key: "textColor", label: "Text Color", type: "color", default: "white" },
        ]
    },

    // ----- ImageElements -----
    {
        type: "image",
        label: "Single Image",
        category: "media",
        description: "Full-width image",
        fields: [
            { key: "url", label: "Image", type: "image", required: true },
            { key: "alt", label: "Alt Text", type: "text", required: true },
            { key: "borderRadius", label: "Border Radius", type: "text", default: "var(--default-rounded-corner" },
        ]
    },
    {
        type: "imageRow",
        label: "Image Row",
        category: "media",
        description: "Horizontal row of images with responsive width control",
        fields: [
            { key: "images", label: "Images", type: "imageRowList", required: true },
            { key: "align", label: "Alignment", type: "options", default: "center", options: ["left", "center", "right", "between", "around"] },
            { key: "uniformHeight", label: "Uniform Height (vh)", type: "number", default: 0 },
        ]
    },
    {
        type: "gallery",
        label: "Gallery",
        category: "media",
        description: "Masonry-style image grid",
        fields: [
            { key: "images", label: "Images", type: "imageList", required: true },
            { key: "rowAmount", label: "Columns", type: "number", default: 3 },
        ]
    },
    {
        type: "caroussel",
        label: "Circular Carousel",
        category: "media",
        description: "circular carousel",
        fields: [
            { key: "images", label: "Images", type: "imageList", required: true },
            { key: "backgroundColor", label: "Background Color", type: "color", default: "var(--primary-color)" },
        ]
    },
    {
        type: "video",
        label: "Ambient Video",
        category: "media",
        description: "Looping autoplay video, no controls",
        fields: [
            { key: "url", label: "Video File", type: "image", required: true },
            { key: "poster", label: "Poster Image", type: "image" },
        ]
    },
    {
        type: "youtubeEmbed",
        label: "YouTube Embed",
        category: "media",
        description: "Row of embedded YouTube videos with a colored background",
        fields: [
            { key: "srcs", label: "Video URLs", type: "stringList", required: true, placeholder: "https://www.youtube.com/embed/..." },
            { key: "color", label: "Background Color", type: "color", default: "var(--primary-color)" },
            { key: "text_color", label: "Text Color", type: "color", default: "white" },
        ]
    },

    // ----- LayoutElements -----
    {
        type: "spacer",
        label: "Spacer",
        category: "layout",
        description: "Vertical whitespace",
        fields: [
            { key: "height", label: "Height (vh)", type: "number", default: 5 },
            { key: "backgroundColor", label: "Background Color", type: "color", default: "white" },
        ]
    },
    {
        type: "roundCover",
        label: "Round Cover",
        category: "layout",
        description: "Full-width coloured section divider",
        fields: [
            { key: "background", label: "Background Color", type: "color", default: "var(--primary-color)" },
            { key: "foreground", label: "Foreground Color", type: "color", default: "white" },
        ]
    },

    // ----- Unique Elements -----
    {
        type: "hseIcons",
        label: "HSE Project Icons",
        category: "unique",
        description: "The uniquely placed icons to showcase the HSE project",
        fields: []
    },
];


export const schemaByType = Object.fromEntries(
    ELEMENT_SCHEMAS.map(s => [s.type, s])
) as Record<string, ElementSchema>;

export const schemasByCategory = CATEGORIES.map(cat => ({
    ...cat,
    elements: ELEMENT_SCHEMAS.filter(s => s.category === cat.id),
}));

export function buildDefaultProps(schema: ElementSchema): Record<string, unknown> {
    return Object.fromEntries(
        schema.fields.map(f => {
            if (f.default !== undefined) return [f.key, f.default];
            switch (f.type) {
                case "stringList":
                case "imageList":
                case "imageRowList": return [f.key, []];
                case "boolean": return [f.key, false];
                case "number": return [f.key, 0];
                case "pigeonSelector": return [f.key, { url: "", translation: { x: 0, y: 0 } }];
                default: return [f.key, ""];
            }
        })
    );
}