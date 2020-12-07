import React from "react";

export default function ImgBox({url, key, name}) {
    return(
        <div className="max-w-6xl max-h-4xl bg-white p-8 rounded-lg">
            <img src={url} key={key} alt=""/>
            <h1 className="text-center text-2xl md:text-5xl pt-6 font-serif">Merry Christmas from {name}</h1>
        </div>

    )
}