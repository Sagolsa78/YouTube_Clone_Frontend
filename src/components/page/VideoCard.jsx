import React from "react";

function VideoCard(props){

    return <div className=" max-w-sm p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-200">
        <div>
            <img className="rounded-lg w-full h-48 object-cover"
            
            src={props.thumbnail} alt="video Thumbnail" />
        </div>
        <div className="flex    grid-cols-12 pt-2 gap-y-1">
            <div className="col-span-1">

                <img className="rounded-full w-11 h-10" 

                src={props.Author_photo} alt="author_photo" />
            </div>

            <div className="col-span-11 pl-2">
                <h3 className=" text-sm text-black-400 font-semibold line-clamp-2"
                >{props.title}</h3>
                <div className="cols-span-1 text-gray-600 text-base ">
                    <p>{props.Author_name}</p>
                </div>

                <div className="cols-span-1 text-gray-600 text-base ">
                    <p className="text-gray-500 text-xs"
                    >{props.Views} | {props.Timestamp} </p>
                </div>
            </div>

            
        </div>
    </div>
}

export default VideoCard;
