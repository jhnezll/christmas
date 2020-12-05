import React from "react";

export default function ImgBox({url, key}) {
    return(
        <div className="max-w-6xl max-h-6xl bg-white p-8 rounded-lg">
            <img src={url} key={key} alt=""/>
        </div>

    )
}