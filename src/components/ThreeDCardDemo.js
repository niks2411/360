import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
    const cards = [
        {
            title: "AI Search Engine Optimization",
            description: "Be discoverable where users are searching next. We optimize your brand for AI search engines and chatbots, making your business ready for the future of search.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2560&auto=format&fit=crop",
            buttonText: "Get AI Visibility",
            link: "/ai-search-visibility"
        },
        {
            title: "GMB Optimization",
            description: "Dominate local search with Google Business Profile optimization. From keywords to reviews, we help your business stand out on Google Maps and local search.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            buttonText: "Optimize Now",
            link: "/gmb-optimization"
        },
        {
            title: "AI & Automation Tools",
            description: "Work smarter, not harder. We set up custom AI and automation solutions to streamline workflows, generate leads, and enhance customer engagement 24/7.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2560&auto=format&fit=crop",
            buttonText: "Automate Now",
            link: "/ai-automation-tools"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {cards.map((card, index) => (
                <CardContainer key={index} className="inter-var" containerClassName="py-4">
                    <CardBody
                        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white">
                            {card.title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            {card.description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src={card.image}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt={card.title} />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as="a"
                                href={card.link}
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                                Learn more →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                                {card.buttonText}
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    );
}
