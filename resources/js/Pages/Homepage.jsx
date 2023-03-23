import { Link, Head } from "@inertiajs/react";
import React from "react";

export default function Homepage(props) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#efefef] text-white">
            <Head title={props.title} />
            <div>
                <p>{props.description}</p>
                {props.news ? (
                    props.news.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="p-4 m-2 bg-white text-slate-800 shadow-md border rounded-md"
                            >
                                <p className="text-2xl">{data.title}</p>
                                <p className="text-sm">{data.description}</p>
                                <p>{data.category}</p>
                                <p className="text-sm">{data.author}</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Belum ada Berita Saat ini</p>
                )}
            </div>
        </div>
    );
}
