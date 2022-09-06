import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="aboutUs">
        <div className="aboutUsItemSm">
          <div className="aboutImgItem div1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeFvemQoSczl617Omfgg2Snoh0tfYLoObeOMerhA5Ejcn4f53TY68cKSMU6W1k76dQXA&usqp=CAU"
              alt=""
              className="img1"
            />
          </div>
          <div className="aboutImgItem div2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWVWUiMRdBgvV-T9CXr4Dyw4jWFhU-wfnDjaok-o_xq_NA62NpLeaPUehLfJaA8Jrvu0s&usqp=CAU"
              alt=""
              className="img2"
            />
          </div>
          <div className="aboutImgItem div3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMC8T2ybj8WCpXsgY4f1hBpi4SnXuoGR0JUTHavFN94T_5KiZhOVluheuWF5jeOZICiDk&usqp=CAU"
              alt=""
              className="img3"
            />
          </div>
        </div>
        <div className="aboutUsItems">
          <h1 className="aboutUsItem">About Us</h1>
          <p className="aboutUsItemParagraph">
            Professional iOS Developer,Fluent in Swift and Objective C
            Programming languages. I am also a fullstack web developer with
            strong knowledge of MongoDB, node.js, Javascript and front end
            technologies such react, jquery, Ejs and and counting. Graduated
            University with degree in Electrical & Electronics Engineering.
            Strong mathematics and programming <hr />
            Professional iOS Developer,Fluent in Swift and Objective C
            Programming languages. I am also a fullstack web developer with
            strong knowledge of MongoDB, node.js, <hr />
            Professional iOS Developer,Fluent in Swift and Objective C
            Programming languages. I am also a fullstack web developer with
            strong knowledge of MongoDB, node.js, Javascript and front end
            technologies such react, jquery, Ejs and and counting.
          </p>
        </div>
      </div>
      <div className="teamDiv">
        <div className="teamHeading">
          <h1 className="heading">Licenses</h1>
          <p className="teamParagraph">
            I am a full-stack web developer with strong knowledge of MongoDB,
            node.js, Javascript and front end technologies such react, jquery,
            Ejs and counting.Graduated University with degree in science of
            information technology. Strong mathematics and programming
            background.
          </p>
        </div>
        <div className="teamImg">
          <img
            src="https://media.istockphoto.com/photos/cropped-shot-of-elderly-females-hands-picture-id1269847328?k=20&m=1269847328&s=612x612&w=0&h=1ql69bSb6GAwrsggPYsy_Fnw1YgL9k_8La0hNMa0SzI="
            alt=""
            className="teamImgItem"
          />
        </div>
      </div>
    </div>
  );
}
