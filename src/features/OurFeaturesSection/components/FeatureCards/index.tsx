import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Mapper from '@/components/Mapper';
import ContentCard from '@/components/ContentCard';
import { featureCardsContents } from '../../data/contents';
import { RootState } from '@/store/store';

interface FeatureItem {
    title: string;
    description: string;
    link: string;
}


function FeatureCards() {
    const renderedFeatures = useSelector((state: RootState) => state.renderedFutures.renderedFutures);

    const typedFeatureCardsContents = featureCardsContents as Record<string, FeatureItem[]>;



    const featureItems = useMemo(() => {
        return typedFeatureCardsContents[renderedFeatures] || [];
    }, [renderedFeatures, typedFeatureCardsContents]);


    if (featureItems.length === 0) {
        return null;
    }

    return (
        <section className="feature-cards-container">
            <Mapper
                array={featureItems}
                ulStyle="grid lg:grid-cols-2 gap-[clamp(20px,4vw,30px)]"
            >
                {(item: FeatureItem) => (
                    <ContentCard
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        className="feature-card-item"
                    />
                )}
            </Mapper>
        </section>
    );
}

export default FeatureCards;