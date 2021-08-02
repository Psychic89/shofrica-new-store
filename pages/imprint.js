import React from 'react';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
<Root>
<div className="about-container">
  {/* Row */}
  <div className="row mt-5 pt-5 about-hero">
  <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
  <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
  <h2 className="font-size-header mb-4">
  Der Internetmarktplatz Shofrica wird betrieben von:
  </h2>
<h4 className="font-size-subheader mb-4"> Shofrica e.K.
</h4>
<h4 className="font-size-subheader mb-4"> Taunusstraße 66 </h4>
<h4 className="font-size-subheader mb-4"> 63067 Offenbach am Main </h4>
<h4 className="font-size-subheader mb-4"> Telefon: +49-176-21483866 </h4>
<h4 className="font-size-subheader mb-4"> Email: support(at)shofrica.com </h4>
<h4 className="font-size-subheader mb-4"> Geschäftsführung: Robert Mutua </h4>
<h4 className="font-size-subheader mb-4"> Registergericht: Amtsgericht Darmstadt </h4>
<h4 className="font-size-subheader mb-4"> Registriernummer: HRB 86725 </h4>
<h4 className="font-size-subheader mb-4"> Umstatzsteuer-Identifikationsnummer: DE 333466057 </h4>
<h4 className="font-size-subheader mb-4"> Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie <a href="https://ec.europa.eu/consumers/odr/" target="_blank" className="cjs-link" rel="noopener noreferrer">hier</a> finden. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit. </h4>
</div>
</div>

<div className="col-12 col-lg-6">
  <div className="about-image h-100">
  <div className="d-flex align-items-center justify-content-center h-100">
  <img src="/wavy-illustration.jpg" alt="Commerce.js illustration"/>
  </div>
  </div>
  </div>
  </div>

  </div>
  <Footer />
  </Root>
);

export default About;
