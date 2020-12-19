import React from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import Card from "../../components/Card";
import forecast from "../../images/forecast.png";
import quotesQuiz from "../../images/quote-quiz.png";
import noteTaker from "../../images/note-taker.png"
import furLodge from "../../images/furlodge.png";
import secretFormula from "../../images/secret-formula.png";

const Portfolio = () => {
return (
<MDBContainer>
    <MDBRow>
        <Card
            img={forecast}
            title="Weather Dashboard"
            desc="This was a great learning experience and the perfect opportunity to experiment with various different coding concepts. I built the styling using uikit framework. I also created an object with methods to help dynamically create html elements to append to the DOM using jquery. I used Open Weather API to populate the current weather and forecasting data. jQuery was used to make the API calls. Although uikit is a great framework and has excellent documentation, it was a challenge working with nested HTML elements and jQuery to dynamically manipulate the DOM; however, it was extremely rewarding once I got it working!"
            github="https://github.com/vivid-green/weather-dashboard"
            website="https://vivid-green.github.io/weather-dashboard/"
        />
    </MDBRow>
    <MDBRow>
        <Card
            img={quotesQuiz}
            title="Quotes Quiz"
            desc="I learned a lot from this project. One of the main takeaways is dynamically creating html elements and event listeners and appending to the DOM. Placement of functions was crucial in obtaining the end result; specifically clearing intervals and resetting DOM elements. I would really like to revisit this project in the near future to refactor and condense lines of code. I'd like to practice jQuery and this project would be the perfect opportunity to do that. I spent a lot more time than I had anticipated to achieve a functioning site. Traversing the DOM object was tedious in the beginning but I developed somewhat of a flow towards the end of development."
            github="https://github.com/vivid-green/quote-quiz"
            website="https://vivid-green.github.io/quote-quiz/quotes-quiz"
        />
    </MDBRow>
    <MDBRow>
        <Card
            img={noteTaker}
            title="Note Taker"
            desc="This app uses express to serve up html and handle routes for CRUD operations. jQuery is used to dynamically create and append to the DOM. Bootstrap, Font-Awesome and Paper CSS were used to compose the styling."
            github="https://github.com/vivid-green/note-taker/"
            website="https://hidden-wildwood-41050.herokuapp.com/"
        />
    </MDBRow>
    <MDBRow>
        <Card
                img={furLodge}
                title="Fur Lodge"
                desc="Fur Lodge was my second collaborative project with 3 others to create a pet boarding application. It was extremely fun working in a group to create a fullstack application. We used Foundation CSS framework, express-handlebars, express, jQuery, MySql, Sequelize, MySql2 and handlebars"
                github="https://github.com/imbingz/fur-lodge/"
                website="https://glacial-gorge-49813.herokuapp.com/"
        />
    </MDBRow>
    <MDBRow style={{marginBottom: "10rem"}}>
        <Card
            img={secretFormula}
            title="Secret Formula"
            desc="Secret Formula is my first fullstack application using handlebars, express-handlebars, MySql, MySql2, express and node. It was challenging working with handlebars js to begin with; however, towards the end of the project I started getting a feel for it. I had fun designing a Sponge Bob theme and playing around with modals."
            github="https://github.com/vivid-green/secret-formula/"
            website="https://polar-brushlands-85699.herokuapp.com/"
        />
    </MDBRow>

    {/* <Card
        img={}
        title=""
        desc=""
        github=""
        website=""
    />
    <Card
        img={}
        title=""
        desc=""
        github=""
        website=""
    />                     */}
</MDBContainer>
);
}

export default Portfolio;