import React from 'react';
import {getArticles} from "@/src/mock_api/article_api";
import Image from "next/image";
import {TArticle} from "@/src/types/article";

export const getStaticPaths = async () => {
    const articles = await getArticles();
    const paths = articles.map((article) => ({
        params: { id: article.id.toString() },
    }));
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
    const articles = await getArticles();
    const article = articles.find((article) => article.id === Number(params.id));
    return {
        props: {
            article,
        },
    };
};

interface IArticlePageProps {
    article: TArticle;
}

const ArticlePage = ({article}:IArticlePageProps) => {
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
                    <div className="w-full mb-16">
                        <span className="">{article.body}</span>
                    </div>
                </div>
            }
        </div>
    );
};

export default ArticlePage;