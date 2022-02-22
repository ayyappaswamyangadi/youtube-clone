/*
need two things
1)show videos on homepage
2) search when typed something in search box;

*/

let div = document.getElementById("videodiv");
// 1)show videos on homepage
/*
- based upon most popular videos
- should be rendered without any explicit actions
-on page load
*/

async function display(){
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=kannada%20coding%20videos&key=AIzaSyBvVKz4eQauET8s_hqpqvAfZfx8-XQc4hs&maxResults=25`);
    let data = await res.json();
    
    for({
    id:{videoId}}of data.items){
    let videodiv= document.createElement("iframe")
    videodiv.setAttribute("class","mons")
    videodiv.src = `https://www.youtube.com/embed/${videoId}`;
    videodiv.allow = 'fullscreen'
    div.append(videodiv)
    
    }
}
display();//calling here because we are not calling explicitly in html

// 2) search when typed something in search box;
/*
- take the string entered in search box
- 
*/
async function searchVideos(){
    document.getElementById("videodiv").innerHTML=""; // Empty 

    let query = document.getElementById("video").value; // Search String/ Query String

//search for videos
let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyBvVKz4eQauET8s_hqpqvAfZfx8-XQc4hs&maxResults=25`)
let data = await res.json();

for({
id:{videoId}}of data.items){
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)

}
}

//no need to call because we are calling it explicitly in html

//search for videos
// let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`);
// let data = await res.json();

/**
 * 
 * 
 * //https://www.googleapis.com/youtube/v3/videos
//AIzaSyBvVKz4eQauET8s_hqpqvAfZfx8-XQc4hs
//https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8
//https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`)
 */