import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About () {
    return (
        <section className="my-5">
  <h1 id="about">Who am I?</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
  <p>Bacon ipsum dolor amet chicken turducken bacon, flank ball tip tri-tip andouille ham hock. Leberkas kevin sirloin, ribeye tenderloin flank frankfurter. Sirloin pig tail doner, chislic ribeye sausage bacon turkey strip steak. Tail buffalo pancetta pig strip steak brisket kevin, capicola ham hock. Pork loin ribeye landjaeger sausage cupim meatball swine turducken shank. Hamburger meatball filet mignon strip steak, pork chop ribeye doner sirloin swine turkey chislic. </p>
</section>

        
    );
}

export default About;