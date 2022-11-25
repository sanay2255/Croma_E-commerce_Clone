var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

  res.render('login',{error:req.session.loginError});
  req.session.loginError=false
});


/* GET home page. */
router.get('/home', function (req, res, next) {

  let products = [{
    name: "Iphone 11 pro",
    description:"64GB",
    image: "https://www.reliancedigital.in/medias/iPhone-11-128GB-Black-491901644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2g1NS85NDIxOTE4NDcwMTc0LmpwZ3w1OGQ0YWJiYzI2ZjljZjA4Nzg5ZGIwYzA3MWRiMmIyMDA2MjQ1NDhjYTM1MTI3YWQ2ODY3YThhNDBiMzM1Nzk2"

  },
  {
    name: "Iphone 12 ",
    description:"128GB",
    image: "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901536-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzUwODd8aW1hZ2UvanBlZ3xpbWFnZXMvaDEyL2g2My85NDA3NzQ2MjQ0NjM4LmpwZ3w0OTc2MTIyMWJlODAwMmE1ZDcyY2VlZGQxZGEwMTIxNTJkZDM2NWUyZjM2OWZlMmNiMTRjN2FkMTE5YWE0ZjVj"
  },
  {
    name: "Iphone 13",
    description:"212GB",
    image: "https://www.reliancedigital.in/medias/Apple-iPhone-13-Smartphones-491997702-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDkzMTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGI5L2gxMS85ODc4MTAyNjA1ODU0LmpwZ3w5NGFjNjk3MDQ1ZmU2Y2Q1YmY0ZTljZWM4N2JkMjdhNzE0ZmVlZDQxYzJhNjExNDdkZjY1MmQwYjQ2YTc0NWJm"
  },
  {
    name: "Iphone 14 pro",
    description:"128GB",
    image: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Mobile-Phone-493177779-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MDkwNHxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaGFkLzk4OTA0NTA2MDQwNjIuanBnfGZkNjFlNDBlOWFiNmYxZjI3M2Q2ZTg5Y2RiOGQxN2RhOTg4NmUxZGVlNzc0NjZjMGU1YmQ1MDZmMzU5ODhiYTk"
  }
  ]
  let categories = [{
    image: "/images/mobile.avif"
  },
  {
    image: "/images/tv.avif"
  },
  {
    image: "/images/lap.avif"
  },
  {
    image: "/images/audio.avif"
  },
  {
    image: "/images/ac.avif"
  },
  {
    image: "/images/fridge.avif"
  }, {
    image: "/images/wm.avif"
  },
  {
    image: "/images/ka.avif"
  },
  {
    image: "/images/watch.avif"
  },
  ]
  let highlights=[{
    image:"/images/high1.avif"
  },
  {
    image:"/images/high2.avif"
  },
  {
    image:"/images/high3.avif"
  },
  {
    image:"/images/high4.avif"
  },
  {
    image:"/images/high5.avif"
  },
  {
    image:"/images/high6.avif"
  }
]
// console.log(req.session.user);
let more=[{
  image:"",
  text:"Perferencee"
},
{
  text:"Customer Care"
},
{
  text:"Advertise"
},
{
  text:"Download App"
}
]
  res.render('index', { products ,more,categories,highlights,user:req.session.user});
});




router.post('/login', function (req, res, next) {
  const details = {
    username: "sanayuj2255@gmail.com",
    name:"Sanay",
    password: "123"
  }
  if (details.username === req.body.username && details.password === req.body.password) {
   n=true;
    req.session.user=details
    res.redirect('home');

  } else {
    req.session.loggedIn=true
    req.session.loginError=true
    res.redirect('/')
  } 
});

router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect('/')
})




module.exports = router;
