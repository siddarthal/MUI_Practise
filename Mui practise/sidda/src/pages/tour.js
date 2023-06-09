import { Box, Container, Typography ,Paper,BottomNavigation} from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import BasicModal from "../components/Modal";
const Tour = () => <Container sx={{ width: 900 }}>
    <Typography variant="h3" component='h1' marginTop='3'>
        Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
        <img src="https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?cs=srgb&dl=pexels-pixabay-415999.jpg&fm=jpg" height={350} width={600} />
        <ImageCollage />

    </Box>
    <Box>
        <Typography variant="h4" component='h2' marginTop={3}>
            About this ticket
        </Typography>
        <Typography variant="h6" component='p' marginTop={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, odit dignissimos consectetur reiciendis eligendi cum labore doloremque aperiam ducimus quidem dolore dolores, harum inventore expedita est, vitae hic. Quibusdam repellat repudiandae maxime! Pariatur recusandae nihil accusantium totam, molestias nostrum commodi!
        </Typography>
    </Box>
    <Box>
        <Typography variant="h4" component='h2' marginTop={3}>
            Frequently asked questions
        </Typography>
        <CustomizedAccordions/>
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal/>
        </BottomNavigation>
      </Paper>

</Container>



export default Tour;