import React from "react";
import VideoCard from "./VideoCard";
// import {BrowserRouter,Routes,Router} from "react-router-dom";



const VIDEOS = [{
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}, {
    title: "Bahara full song with Lyrics | Romantic song for Couples",
    thumbnail: "./thumbnail.jpg",
    Author_photo: "./author_profile.jpg",
    Author_name: "Mohit Sahani",
    Views: "200k",
    Timestamp: "2 Days ago"
}]


export default function VideoGrid() {
    return <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-fit rounded-lg justify-items-end gap-1 ">
        {VIDEOS.map((video,index) =>
            <div key={index}>
                <VideoCard
                
                    title={video.title}
                    thumbnail={video.thumbnail}
                    Author_photo={video.Author_photo} 
                    Author_name={video.Author_name}
                    Views={video.Views}
                    Timestamp={video.Timestamp}>
                </VideoCard>
            </div>)}
    </div>
}