import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../assets/images/eclipse.webp';

export function ProjectCard() {
    return (
        <Card sx={{ maxWidth: 345, mt: 0 }}>
          <CardMedia
            sx={{ height: 150, mt: 16 }}
            image={image}
            title="cool pic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Project Description -- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur unde reiciendis nisi. Fuga quia assumenda sunt a labore mollitia!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    );
  }