export const buttonList = [
  "All",
  "Live",
  "Gaming",
  "Movies",
  "Songs",
  "Cricket",
];

export const OFFSET_LIVE_CHAT = 10;

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}
`;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_LIVE_CHAT =
  "https://www.youtube.com/youtubei/v1/live_chat/get_live_chat?prettyPrint=false";
