import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import InfoIcon from '../../assets/InfoIcon.png';
import { Link } from "react-router-dom";
import { useState } from 'react';

const AllStateItem = ({itemName, status, description}) => {

const [infoOpen, setInfoOpen] = useState(false)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box height='40px' ml='40%' display='flex' flexDirection='row' key={itemName} className="Item">
            <Checkbox checked={status} {...label} />
            <Box color={status ? 'primary.main' : 'white'} mt={1}>
                <Typography> {itemName} </Typography>
            </Box>
            <Box width='10px' onClick={() => setInfoOpen(!infoOpen)} color='secondary.main' m={1}>
              <img width="20px" src={InfoIcon} alt="logo" />
            </Box>
            {infoOpen && <Box>{description}</Box>  }

    </Box>
  );
}

export default AllStateItem;
