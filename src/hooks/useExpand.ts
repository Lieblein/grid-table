import React from 'react';

export default function useExpand(): [Set<number>, (item: number) => void] {
    const [expandedItems, setExpandedItems] = React.useState(new Set<number>());

    const toggleItem = (item: number) => {
        const newExpandedItems = new Set(Array.from(expandedItems));

        if (newExpandedItems.has(item)) {
            newExpandedItems.delete(item);
        } else {
            newExpandedItems.add(item);
        }

        setExpandedItems(newExpandedItems);
    };

    return [expandedItems, toggleItem];
}
