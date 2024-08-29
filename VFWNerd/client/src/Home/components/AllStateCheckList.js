import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LandingPageCard from './LandingPageCard';
import { Link } from "react-router-dom";

const AllStateChecklist = () =>  {
  

  return (
    <div className="ByLawsSearch">
         <LandingPageCard>
            <Typography> All State Check List </Typography>
            <Link to='AllState' ><Button>Play</Button></Link>
          </LandingPageCard>
    </div>
  );
}

export default AllStateChecklist;
