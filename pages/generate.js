import React from "react";
import Header from "../components/Generator/Header"
import Loader from "../components/Generator/Loader";
import UnsplashImage from "../components/Generator/UnsplashImage";

export default function Generate() {

    const API_KEY = process.env.UNSPLASH_ACCESSKEY

    return(
        <div>
            <Header/>
            <Loader/>
            <UnsplashImage/>
        </div>
    )
}