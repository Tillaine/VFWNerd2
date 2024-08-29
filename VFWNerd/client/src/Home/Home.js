import Typography from '@mui/material/Typography';
import logo from '../assets/VFWNerdLogo.png';
import Box from '@mui/material/Box';
import ByLawsSearch from './components/ByLawsSearch'
import ByawsTriviaButton from './components/BylawsTriviaButton'
import AllStateChecklist from './components/AllStateCheckList'


const Home = () => {
  return (
    <Box bgcolor='primary.light'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Typography variant='h2' color={'White'} fontFamily={'Roboto'}>
              <Box display='flex' flexDirection='row'>
              VFW
               <a> 
                <Box color="primary.main" > Nerd </Box>
              </a>
              </Box> 
              </Typography>
          <Box display="flex" flexDirection="row">
            <ByLawsSearch/>
            <ByawsTriviaButton/>
            <AllStateChecklist/>
          </Box>
        </header>
        </Box>
  );
}

export default Home;
