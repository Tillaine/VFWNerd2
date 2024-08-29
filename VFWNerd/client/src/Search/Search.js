import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';




const Search = () => {
  return (
    <div className="App">
        <Box display='flex' flexDirection='column' alignItems="center" color='secondary.light' height="100%" bgcolor='primary.light'>
            <Typography variant="h1" >Ask a Nerd</Typography>
            <Typography variant="h3"> Bylaws Question </Typography>
            <Box sx={{ borderRadius: '2%' }} alignItems="center"  bgcolor='white' p={2} m={2}>
            <TextField id="outlined-basic" label="Question" variant="outlined" />
            </Box>
        </Box>
    </div>
  );
}

export default Search;

