import React from 'react';

interface ChapterProps {
    title: string,
    date: Date
}

export default function Chapter(props:ChapterProps) {
    const {title, date} = props
    const dateString = date.toString().split(' ').slice(1, 4).join(" ");
    return <button id="chapter">
        <h2 id="title">{title}</h2>
        <h3 id="date">{dateString}</h3>
    </button>
}
