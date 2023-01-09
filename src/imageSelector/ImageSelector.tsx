import React from "react";
import "./ImageSelector.css";

interface ImageSelectorProps {
    images: string[];
    setSelectedUrl: React.Dispatch<React.SetStateAction<string>>;
}

export function ImageSelector({images, setSelectedUrl}: ImageSelectorProps) {
    const imageList = images.map(image => {
        return <img src={image} onClick={() => setSelectedUrl(image)}/>
    })

    return (
        <div className="images-container">
            {imageList}
        </div>
    );
}