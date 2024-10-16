import React from 'react';
import {getArticles} from "@/src/mock_api/article_api";
import {TArticle} from "@/src/types/article";
import Link from "next/link";

export const getStaticProps = async () => {
    const articles = await getArticles();
    return {
        props: {articles},
    };
};

interface IHomePageProps {
    articles: TArticle[];
}

const HomePage = ({articles}: IHomePageProps) => {
    return (
        <div className="w-2/3 h-full flex-center flex-col">
            <h1 className="text-xl font-bold mb-8 ">Список статей:</h1>
            <ul className="w-full flex-center flex-col">
                {articles.map((article) => (
                    <li key={article.id} className="w-2/3 p-2 border-b last:border-b-0 text-center">
                        <Link href={`/articles/${article.id}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;