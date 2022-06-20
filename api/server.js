const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios').default;
require('dotenv').config();

const app = express();
const port = 4000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// route to get top anime list data
app.get('/top-anime', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=500',
      {
        headers: {
          'X-MAL-CLIENT-ID': process.env.MAL_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

// route to get single anime data
app.get('/single-anime/:id', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.myanimelist.net/v2/anime/${req.params.id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,
      {
        headers: {
          'X-MAL-CLIENT-ID': process.env.MAL_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
