export interface ReleaseCardItem {
    imgURL: string;
    title: string;
    location: string;
    date: string;
    description: string;
}

// File path: data/contents.ts

export const headerContent = {
    Heading: "Press Releases",
    Description: "Stay updated with the latest happenings and exciting developments at YourBank through our press releases.",
}
export const releaseCardContent: ReleaseCardItem[] = [
    {
        imgURL: "/release1.svg",
        title: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
        location: "India",
        date: "06/11/2024",
        description: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",

    },
    {
        imgURL: "/release2.svg",
        title: "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
        location: "Japon",
        date: "24/12/2024",
        description: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",

    },
    {
        imgURL: "/release3.svg",
        title: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
        location: "Italy",
        date: "06/11/2024",
        description: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",

    },
    {
        imgURL: "/release4.svg",
        title: "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
        location: "Azerbaijan",
        date: "28/12/2024",
        description: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",

    },
]