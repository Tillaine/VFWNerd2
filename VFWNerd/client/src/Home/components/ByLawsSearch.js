import Button from '@mui/material/Button';
import LandingPageCard from './LandingPageCard';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

function ByLawsSearch() {
  return (
    <div className="ByLawsSearch">
         <LandingPageCard>
            <Typography> Bylaws Question </Typography>
            <Link to='Search' ><Button>Play</Button></Link>
          </LandingPageCard>
    </div>
  );
}

export default ByLawsSearch;
