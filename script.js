/* Base Styles */
* { margin:0; padding:0; box-sizing:border-box; font-family:'Roboto', sans-serif; }
body { background:#ffffff; color:#121212; line-height:1.6; scroll-behavior:smooth; }
section { padding:60px 40px; text-align:center; }

/* Header */
header { position:fixed; top:0; width:100%; display:flex; justify-content:space-between; align-items:center; padding:15px 40px; background:#fff; box-shadow:0 2px 5px rgba(0,0,0,0.08); z-index:1000; }
header .logo { font-weight:bold; font-size:18px; }
header nav a { margin-left:20px; text-decoration:none; color:#121212; font-weight:500; transition:0.3s; }
header nav a:hover, header nav a.active { color:#e91e63; }

/* Hero Section */
.hero { padding-top:100px; padding-bottom:50px; }
.hero h1 { font-size:2.2rem; background: linear-gradient(135deg,#e91e63,#9c27b0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 15px;}
.hero p { font-size:1.2rem; margin-bottom: 20px; }
.btn { display:inline-block; padding:12px 25px; background: linear-gradient(135deg,#e91e63,#9c27b0); color:#fff; border-radius:25px; text-decoration:none; font-weight:500; transition:0.3s;}
.btn:hover { opacity:0.85; }

/* Section Titles */
section h2 { font-size:2rem; margin-bottom:40px; background: linear-gradient(135deg,#e91e63,#9c27b0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;}

/* About Cards */
.about-container { max-width:900px; margin:0 auto; }
.about-card { background:#f9f9f9; padding:30px; border-radius:12px; text-align:left; box-shadow:0 4px 10px rgba(0,0,0,0.05); margin-bottom:40px;}

/* Skills */
.skills-container { max-width:1100px; margin:0 auto; }
.skills-row { display:flex; justify-content:space-around; flex-wrap:wrap; }
.skill-category { margin:15px; flex:1 1 250px; }
.skill-category h4 { font-size:1.3rem; color:#e91e63; margin-bottom:10px; }
.skill
