//change these to change the background image of projects
import Pro1 from "../Assets/Pro1.jpg";
import Drumkit from "../Assets/Drumkit.jpg"
import prop3 from "../Assets/pro3.jpg"

const ProjectCardData=[
    {
        imgsrc:Drumkit,// after importing put the like this to get the images 
        title:"Drum Kit.",
        text:"It is a simple and usable drum kit made with the help of simple HTML,CSS and Javascript",
        view:"https://drumkit-eight-psi.vercel.app/",
        source:"https://github.com/pinakmoharir/Drums.git "
    },
    //just by pasting and entering the info we can create differnt cards for projects
    {
        imgsrc:Pro1,// after importing put the like this to get the images 
        title:"Example of the project website that is going to be shown.",
        text:"it is the information about the specific project",
        view:"here paste the like for view button",
        source:"here paste the different url for source button. "
    },
    {
        imgsrc:prop3,// after importing put the like this to get the images 
        title:"Example of the project website that is going to be shown.",
        text:"it is the information about the specific project",
        view:"here paste the like for view button",
        source:"here paste the different url for source button. ",
    },
];

export default ProjectCardData; 

