import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

// import { getArtist } from '../../actions/artists';
import Artist from './Artist/';
import ArtistSimple from './ArtistSimple/';

const ArtistList = ({ festival }) => {
  const artists = festival.artists || [];

  return (
    !artists.length ? <CircularProgress /> : (
      <div>
        <ul style={{ float: "left" }}>
          {artists.map((artist, i) => (
            <ArtistSimple key={i} artist={artist} />
          ))}
        </ul>
        <img style={{ float: "right" }} src={festival.posterUrl} alt="lineup" width="700" height="900" />
        <Grid container display="flex" flex-direction="column" alignItems="center" spacing={2}>
          {artists.map((artist, j) => (
            <Grid key={j} item xs={4} sm={3} md={2}>
              <Artist artist={artist} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  );
}

export default ArtistList;
// import React from 'react';
// import axios from 'axios';

// import Artist from './Artist/';
// import useStyles from './styles';

// const ArtistList = ({ festival }) => {
//   const classes = useStyles();
//   const artists = festival.artists || [];

//   const loadArtists = () => {
//     for (let i = 0; i < artists.length; i++) {
//       axios.get('https://api.spotify.com/v1/search', {
//         headers: {
//           'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         params: {
//           q: artists[i].replace(' ','%20'),
//           type: 'artist',
//           limit: 1
//         }
//       })
//         .then((response) => axios.post('http://localhost:5000/artists', response))
//         .catch((error) => console.log(error));
//     }
//   }

//   return (
//     <div>
//       <h1>Lineup</h1>
//       <ul>
//         {artists.map((artist, i) => (
//           <Artist key={i} artist={artist} />
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default ArtistList;