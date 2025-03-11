"use client"
import Tab from "../SectionTab";
import Container from "../SectionTabsContainer";
import { motion } from "framer-motion";
import { TabType } from "@/types/contents";
import { useState } from "react";

type SectionTabsProps = {
    tabs: TabType[];
}

function SectionTabs({ tabs }: SectionTabsProps) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <Container>
            {tabs.map((tab) => (
                <Tab
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${activeTab === tab.id ? "" : "hover:text-white/60"}`}
                >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-10 bg-green-60 px-[24px] py-[14px]"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 1 }}
                        />
                    )}
                    <span className={`relative z-20 ${activeTab === tab.id ? "text-grey-11" : "text-white"}`}>
                        {tab.label}
                    </span>
                </Tab>
            ))}
        </Container>
    )
}

export default SectionTabs