let accessToken;
let clientID = "36e6dd5dba464479a975b19cbf5d1dcf";

//hosted on
let redirectURI = "https://pressplay.vitormnoel.dev"; 

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expires = Number(expiresInMatch[1]);

      //new acess token
      window.setTimeout(() => (accessToken = ""), expires * 1000);
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = accessUrl;
    }
  },

  async profile() {
    try {
      const accessToken = Spotify.getAccessToken();
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const jsonResponse = await response.json();

      const photo = jsonResponse.images[0].url;
      
      // console.log(`photo: ${String(photo)}`)

      return photo;
    } catch (error) {
      return 'https://i.imgur.com/4Z0wZQx.png';
    }
  },

  //search method
  async searchRecommendation(term) {
    this.profile();
    return this.recommendationData(term);
  },

  //recommendation method
  async recommendation(artist, genres) {
    const responseRecommendation = await fetch(
      `https://api.spotify.com/v1/recommendations?limit=30&seed_artists=${artist}&seed_genres=${genres}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const jsonResponseRecommendation = await responseRecommendation.json();

    return jsonResponseRecommendation.tracks.map((track) => ({
      id: track.id,
      name: track.album.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },

  //data for recommendation method
  async recommendationData(term) {
    const accessToken = Spotify.getAccessToken();
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=artist&q=artist:${term}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const jsonResponse = await response.json();
    const items = jsonResponse.artists.items[0];

    const artist = items["id"];

    const genres = items["genres"];

    return this.recommendation(artist, genres);
  },

  //save playlist method
  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    } else {
      const accessToken = Spotify.getAccessToken();
      const headers = { Authorization: `Bearer ${accessToken}` };
      let userId;
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: headers,
      });
      const jsonResponse = await response.json();
      userId = jsonResponse.id;
      const response2 = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        }
      );
      const jsonResponse2 = await response2.json();
      const playlistId = jsonResponse2.id;
      return fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
        {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ uris: trackUris }),
        }
      );
    }
  },

  //normal search
  async searchWithTerm(term) {
    const accessToken = Spotify.getAccessToken();
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}$limit=20`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const jsonResponse = await response.json();

    if (!jsonResponse.tracks) {
      return [];
    }

    jsonResponse.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },
};

export default Spotify;
