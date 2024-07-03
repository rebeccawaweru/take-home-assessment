import { FormControl, TextField} from "@mui/material";

export default function SearchInput(props){
    return <FormControl sx={{width:'50%'}}>
        <TextField placeholder="Book" {...props}/>
        {props.children}
    </FormControl>
}