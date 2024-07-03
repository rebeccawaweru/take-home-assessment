import {  useState } from 'react';
import { Box, Grid, ListItem, Typography, Stack, Button} from '@mui/material';
import { Book, SearchInput, CustomDropDown } from './components';
import CustomTheme from './ThemeProvider';
import { useCustomState } from './reducers/reducer';
function App() {
  const { state, dispatch, data, loading, error } = useCustomState();
  const [search, setSearch] = useState('')
 const [result, setResult] = useState(data ? data.books : [])
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const handleChange = (e) => {
        setSearch(e.target.value)
        const words = e.target.value.toLowerCase().split(' ')
        const final = data.books.filter(item => words.every(word => item.title.toLowerCase().includes(word))) || []
        setResult(final)
    }
  return (
    <CustomTheme>
    <Box component={Grid} container gap={4} paddingY={4} justifyContent="center" alignItems="center" position="relative">
     <SearchInput name="search" value={search} onFocus={()=>dispatch({type:'FOCUS'})} onChange={handleChange}>
      {(state.focus && result.length > 0) ? <CustomDropDown>
        {result.map((book,index) => {
          return <Stack key={index} component={ListItem} direction="row" onMouseEnter={()=>dispatch({type:'FOCUS'})} onMouseLeave={()=>dispatch({type:'BLUR'})} spacing={4} sx={{cursor:"pointer",position:"relative"}} >
            <img src={`http://localhost:4001/${book.coverPhotoURL}`} alt={book.title} width={100} height={100}/>
             <div>
             <Typography color="primary" textAlign="center">{book.title}</Typography>
             <Typography variant="body2" color="text.secondary">by {book.author}</Typography>
             </div>
             {state.reading.includes(book.title) ? <Typography variant="body2" color="text.secondary">Added</Typography> :  <Button variant="contained" color='primary' onClick={()=>dispatch({type:"TITLES",payload:book.title})}>+</Button>}
            </Stack>
        })}
      </CustomDropDown> : null}
     </SearchInput>
     {state.readview ?   <Button variant='text' onClick={()=>dispatch({type:'HOME'})}>Back Home</Button> : <Button variant='text' onClick={()=>dispatch({type:"READ"})}>View Reading List</Button>}
     <Grid container gap={2} justifyContent="center">
     {(state.readview && state.reading.length > 0)  ?  <>
       {state.reading.map((book, index) => {
        return <Grid item xs={12} sm={4} md={3} key={index}><Book title={book.title} author={book.author} imgUrl={`http://localhost:4001/${book.coverPhotoURL}`} btnDelete={<Button onClick={()=>dispatch({type:"REMOVE",payload:book.title})}>Remove</Button>}/></Grid>
      })} </> : state.readview && <p>No books in reading lists</p>} 
      {!state.readview &&   data.books.length > 0 && data.books.map((book, index) => {
        return <Grid item xs={12} sm={4} md={3} key={index}><Book title={book.title} author={book.author} imgUrl={`http://localhost:4001/${book.coverPhotoURL}`}/></Grid>
      })}
     </Grid>
   </Box>
    </CustomTheme>

  );
}

export default App;
