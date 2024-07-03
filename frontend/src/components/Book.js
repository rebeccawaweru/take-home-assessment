import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material'
export default function Book (props){
    const {title, author, imgUrl, btnDelete } = props;
    return (
        <Card>
         <CardActionArea>
            <CardMedia
            component="img"
            height="170"
            src={imgUrl}
            alt="book assignment"/>
            <CardContent>
                <Typography color="primary" gutterBottom variant='h6' component="div">
                    {title}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    by {author} {btnDelete}
                </Typography>
            </CardContent>
         </CardActionArea>
        </Card>
    )
    
}