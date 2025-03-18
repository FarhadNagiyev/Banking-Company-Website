import { ContentItem } from "../types/types";

export const headerContent = {
    SectionHeading: "Our Benefits",
    SectionDescription: "At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.",
}

export const firstLineContent: {
    left: ContentItem;
    right: ContentItem;
} = {
    left: {
        icon: "/statistics.svg",
        title: "Competitive Compensation",
        description: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
        variant: "left"
    },
    right: {
        icon: "/lamp.svg",
        title: "Health and Wellness",
        description: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
        variant: "right"
    },

}

export const secondLineContent: {
    left: ContentItem;
    right: ContentItem;
} = {
    left: {
        icon: "/statistics.svg",
        title: "Competitive Compensation",
        description: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
        variant: "right"
    },
    right: {
        icon: "/lamp.svg",
        title: "Health and Wellness",
        description: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
        variant: "left"
    },

}