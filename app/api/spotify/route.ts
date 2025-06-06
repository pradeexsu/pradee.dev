import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const token = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const res = await axios.post<{ access_token: string }>(
    TOKEN_ENDPOINT,
    querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
    {
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return res.data.access_token;
};

const getNowPlaying = async () => {
  const access_token = await getAccessToken();

  return axios.get<SpotifyData>(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function GET(_: NextRequest, __: NextResponse) {
  const response = await getNowPlaying();
  console.log(response.data)
  if (
    response.status === 204 ||
    response.status > 400 ||
    response.data.currently_playing_type !== "track"
  ) {

    return new Response(JSON.stringify({ isPlaying: false }), {
      // headers: {
      //   "Cache-Control": "public, s-maxage=180, stale-while-revalidate=90",
      // },
    });
  }

  const data = {
    isPlaying: response.data.is_playing,
    title: response.data.item.name,
    album: response.data.item.album.name,
    artist: response.data.item.album.artists
      .map((artist) => artist.name)
      .join(", "),
    albumImageUrl: response.data.item.album.images[0].url,
    songUrl: response.data.item.external_urls.spotify,
  };

  return new Response(JSON.stringify(data), {
    // headers: {
    //   "Cache-Control": "public, s-maxage=180, stale-while-revalidate=90",
    // },
  });
}
