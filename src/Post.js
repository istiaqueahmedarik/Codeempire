import { Avatar, CardHeader, Modal } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
function Post() {
  const [message,setMessage] = useState('')
  const [pic,setPic] = useState('')
  
  const image = ()=>{
    axios.get("https://graph.facebook.com/v10.0/{API_KEY}?fields=posts.limit(10000){full_picture}&access_token=ACCESS_TOKEN")
    .then(function(response){
      // console.log(response.data.posts.data.length);
      for(var i=0;i<=response.data.posts.data.length;i++){
        
        setPic(response.data.posts)
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  const PostList=()=>{
    axios 
      .get("https://graph.facebook.com/v10.0/API_KEY?fields=posts.limit(10000)&access_token=ACCESS_TOKEN")
      .then(function(response){
        // console.log(response.data.posts.data.length);
        for(var i=0;i<=response.data.posts.data.length;i++){
          
          setMessage(response.data.posts)
          // console.log(response.data.posts)
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  var item = []
  const date = []
  const main = []
  const mainPic =[]
  var picItem = []
  var picId = []
  useEffect(() => {
    PostList();
    image();
  
  
  
  },[])
  
  if(message!==''){
   if(pic!==''){
    // console.log(message.data.length)
  
    for(var i=0;i<=message.data.length;i++){
      item.push(message.data[i])
      
      item = item.slice(0, message.data.length-2)
  
    }
    for(i=0;i<=pic.data.length;i++){
      picItem.push(pic.data[i])
      picItem = picItem.slice(0, pic.data.length-2)
  
    }
    for(i=0;i<item.length;i++){
      picId.push(picItem[i].id)
    }
    // console.log(message)
    // console.log(picItem)
    // console.log(picId)
    
    for(i=0;i<item.length;i++){
      if(typeof item[i].message!=='undefined'){
        main.push(item[i].message)
        date.push(item[i].created_time)
        var a = picId.indexOf(item[i].id)
        if(typeof picItem[a].full_picture!== 'undefined'){
          mainPic.push(picItem[a].full_picture)
        }else{
          mainPic.push("https://i.ibb.co/DMsCqGH/Blue-and-Orange-Illustrative-Arts-Culture-Podcast-Cover.png")
        }
        // if(typeof picItem[a].full_picture !== 'undefined'){
        //   mainPic.push(pic[a].full_picture)
        // }
      }
    }
   }
  }
  // console.log(main)
  // console.log(mainPic)
  // console.log(date)
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom: "2%",
      marginLeft: "2%",
      marginRight: "2%",
  
      
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();
  
  const [review,setReview] = useState("")
  const [open, setOpen] = useState(false);

  const handleOpen = (item) => {
    setOpen(true);
    setReview(item)
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="Post">
      
      {main.map((item)=>{
        
        return (
          // <div className="main">
          //   <div className="date">{Date(date[main.indexOf(item)])}</div> 
          // <div className="review">{item}</div>
          // <img className="picture" src={mainPic[main.indexOf(item)]} alt="book"/>
         
          // </div>

          
                      <Card className={classes.root}>
      <CardActionArea onClick={()=>handleOpen(item)}>
        <CardMedia
          className={classes.media}
          image={mainPic[main.indexOf(item)]}
          title="book pic"
        />
        <CardContent>
          
          <Typography variant="body2" color="textSecondary" component="p" >
            {item.substr(0,100)}...
          </Typography>
          <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            BR
          </Avatar>
        }
        
        title="Book Review"
        subheader={date[main.indexOf(item)].substr(0,10)}
      />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"onClick={()=>handleOpen(item)}>
          Read More
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="mothal">

        <h2 id="simple-modal-title">Full Review</h2><Button variant="contained" color="primary"  onClick={()=>setOpen(false)}>Cancel</Button> <Button variant="contained" color="inherit"><a style={{color:"black",textDecoration:"none"}} href="http://m.me/shortReviewBook/" target="_blank" rel="noreferrer" >Write your feelings</a></Button>
      <div className="mReview" >
        <div className="wrap">
        {review}
        </div>
      </div>
        </div>
        
      </Modal>   
      </CardActions>

      
    </Card>
                   
    

        )
          
          
        
       
        
      })
      
      }
      
    </div>
    
  );
}

export default Post;
