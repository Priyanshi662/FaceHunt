import { Grid, Typography } from '@mui/material';
import './App.css';
import Logo from './components/Logo/Logo';
import NavBar from './components/NavBar/NavBar';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import {useEffect, useState} from 'react';
import 'tachyons';
import { Button, colors } from "@mui/material";
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognitionBox from './components/FaceRecognitionBox/FaceRecognitionBox';
const App=()=> {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: 'Priyanshi',
    email: '',
    entries: 0,
    joined: ''
  });
  const [ImageURL,setImageURL]=useState("");
  const [Boxes,setBoxes]=useState([]);
// `https://api.clarifai.com/v2/workflows/Face/results`

  const handleInputChange=(e)=>{
      setImageURL(e.target.value);
  }
  const displayFaceBox =( Boxes )=>{
    setBoxes(Boxes);
  }
  
  const calculateFaceLocation=(data)=>
  {
      const image=document.getElementById('inputimage');
      const width=Number(image.width)/2;//to make sure it is a number
      const height=Number(image.height)/2;
      console.log(data);
      return data.results[0].outputs[0].data.regions.map(face => {
        const clarifaiFace = face.region_info.bounding_box;
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    })
  }
  const handleSubmit=()=>
  {
    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "alcrgjg4xc03",
        "app_id": "Pri-123"
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": ImageURL
            }
          }
        }
      ]
  });

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key ' + '69de731c509c4167b5fd658af2b03b52'
  },
  body: raw
};

fetch(`https://api.clarifai.com/v2/workflows/Face/results`, requestOptions)
  .then(response => response.json())
  .then(result => 
  {
    displayFaceBox(calculateFaceLocation(result));
  })
  .catch(error => console.log('error', error));
}
  return (
    <>
      <div>
        <ParticlesBg type="cobweb" bg={true}  />
        {/* <NavBar isSignedIn={isSignedIn}/> */}
        <div>
        <Logo />
        <Rank name={user.name} entries={user.entries}/>
        <Typography sx={{fontWeight:"bold", marginLeft:"400px",width:"500px",fontSize:"25px" , fontFamily:"monospace"}}>Input an Image url to hunt a Face!</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={10}>
            <input
            type="text"
            value={ImageURL}
            onChange={handleInputChange}
            sx={{
              border: "none",
              borderBottom: "2px solid",
              borderColor: colors.grey[400],
              borderRadius: "0px",
              m: "10px",
              p: "20px",
              width: "100%",
              "&::placeholder": {
                color: colors.grey[500],
              },
              "&:focus": {
                outline: "none",
                borderBottom: `1px solid ${colors.blue[500]}`,
              },
            }}
            placeholder="Enter Image URL"
          />
            <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: colors.blue[500],
              color: colors.common.white,
              marginLeft: "5px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: colors.blue[600],
              },
            }}> 
            Detect 
            </Button>
            </Grid>
          </Grid>
        </form>
        {ImageURL===''?(<div></div>):<FaceRecognitionBox Boxes={Boxes} ImageURL={ImageURL}/>}
        </div>
      </div>
    </>
  )
}

export default App
