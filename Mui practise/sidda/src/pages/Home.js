import Container from '@mui/material/Container';
import Tourcard from '../components/Tourcard';
import Grid from '@mui/material/Grid';
import cities from "../data.json";
import { Typography } from '@mui/material';


const Home=()=>{
    return (
        <div className="App">
    <Container sx={{marginY: 5}}>
      {cities.map((city)=>(
          <>
          <Typography
           variant='h4'
           component='h2'
           marginTop={5}
           marginBottom={3}
          >
            Top {city.name} tours
          </Typography>
           <Grid container spacing={2}>
            {city.tours.map((tour,index)=>
            <Tourcard tour={tour} key={index}/>
            )}
            </Grid> 
          </>
          ))}
    </Container>
    </div>
    )

}
export default Home;