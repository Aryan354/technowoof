import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import blog from "../images/blog_photo.jpg";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: "9rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function Blog() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
      </AppBar>
      <div className= "for_hero"> 
      <Box className={classes.hero}>
          
        <Box className= "woof_blog">The Woof Blogs</Box>
      </Box> 
      </div>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          The Latest Issues
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.gadgets360cdn.com/large/oneplus_9rt_image_1633774819914.jpg?downsize=950:*"
                  title="One Plus: The new Kings?"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    One Plus: The new kings?
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   A decent graphics card is really an integral part of the modern computer
            requirements.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Ayush Agrawal
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      November  26, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ytimg.com/vi/8FXhDZ5Upks/maxresdefault.jpg"
                  title="IOS 15: Update or Wait?"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    IOS 15: Update or Wait?
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   A decent graphics card is really an integral part of the modern computer
            requirements.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Priyanshu Khetan
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      January  14, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="http://www.extremetech.com/wp-content/uploads/2015/09/asusgx700handson1_1020.0.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Liquid Cooled Gaming Laptops
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    A decent graphics card is really an integral part of the modern computer
            requirements.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Aryan Karki
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Processors with Greener Tomorrow
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    A decent graphics card is really an integral part of the modern computer
            requirements.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Ahmed Azeem Khan
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      December 11, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default Blog;

