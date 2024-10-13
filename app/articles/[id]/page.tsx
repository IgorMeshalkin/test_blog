import React from 'react';
import {getArticles} from "@/src/mock_api/article_api";
import Image from "next/image";
import ScrollDownButton from "@/src/components/ui/scroll-down-button/scroll-down-button";


export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((article) => ({
        id: article.id.toString(),
    }));
}


const Article = async ({params}: { params: { id: string } }) => {
    const articles = await getArticles();
    const article = articles.find((article) => article.id === Number(params.id));

    return (
        <div className="w-full max-w-full h-full flex items-center flex-col">
            {
                article &&
                <div className="w-2/3 flex-center flex-col text-center mt-8 gap-8">
                    <span className="w-full text-xl font-bold ">{article.title}</span>
                    <Image src={article.image} alt={article.title}
                           height={300}
                           width={500}
                           className="max-w-full h-auto"
                    />
                    <div className="w-full">
                        <span className="">{article.body}</span>
                    </div>
                </div>
            }
            <div className="fixed bottom-8 right-8">
                <ScrollDownButton/>
            </div>
        </div>
    );
};

export default Article;