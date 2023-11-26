import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}