import React from "react";

const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div
                key={i}
                className="card w-96 bg-white text-slate-800 shadow-xl"
            >
                <figure>
                    <img
                        className="w-full"
                        src="https://source.unsplash.com/360x200?shoes"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return (
        <div className="text-2xl text-slate-800 font-semibold p-6">
            Saat ini berita tidak tersedia
        </div>
    );
};

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsList;
