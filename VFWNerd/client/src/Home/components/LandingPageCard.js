import Box from '@mui/material/Box';


const LandingPageCard = ({children}) => {
  return (
    <div className="LandingPageCard">
         <Box mr={1} height="90%" p={2} sx={{ borderRadius: '2%' }} color="black" bgcolor={'white'}>
         {children}
         </Box>
    </div>
  );
}

export default LandingPageCard;
