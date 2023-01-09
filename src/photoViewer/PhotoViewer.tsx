import React from "react";
import "./PhotoViewer.css";

interface PhotoViewerProps {
    src: string
}

export function PhotoViewer({src}: PhotoViewerProps) {
    return (
        <div className="image-container">
            <img src={src}/>
        </div>
    );
}