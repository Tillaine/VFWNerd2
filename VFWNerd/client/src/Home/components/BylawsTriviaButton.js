import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LandingPageCard from './LandingPageCard';
import { Link } from "react-router-dom";


function BylawsTriviaButton() {
  return (
    <div className="ByLawsSearch">
         <LandingPageCard>
            <Typography> Bylaws Trivia </Typography>
            <Link to='Trivia' ><Button>Play</Button></Link>
            
          </LandingPageCard>
    </div>
  );
}

export default BylawsTriviaButton;
