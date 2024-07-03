import { List } from "@mui/material"
export default function CustomDropDown(props) {
    return  <List  sx={{position:"absolute",top:60,overflowY:"scroll",width:"100%",height:"50vh", zIndex:100,backgroundColor:"white" }}>
        {props.children}
    </List>
}