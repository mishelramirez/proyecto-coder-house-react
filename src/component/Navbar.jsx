

/*import React from "react";

export default function Navbar({ }) {
 
  return (
    <div className="nav">
      <h1>nails Sandra</h1>
      <ul>
        <li>
          <a href="https://co.pinterest.com/mariavelezres/u%C3%B1as/">Sobre nosotros</a>
          <i class="bi bi-person-circle"></i>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=LOV99IaYuJ8&t=23s">Tienda</a>
          <i class="bi bi-shop"></i>
        </li>
        <li>
          <a href="https://www.amazon.com/s?k=esmaltes+rosalind&language=es_US&adgrpid=107479839528&gclid=Cj0KCQjwteOaBhDuARIsADBqRehs4J-sSzVEoLo9raEZKq7BEpRnMJYB_jHd5Ulp88BEjg5U1vcsBMEaAjVsEALw_wcB&hvadid=602476690964&hvdev=c&hvlocphy=1029279&hvnetw=g&hvqmt=b&hvrand=7336079301124411355&hvtargid=kwd-440206677741&hydadcr=19359_13427090&tag=googleuscolom-20&ref=pd_sl_3n3v5smn8_b">Estilos</a>
          <i class="bi bi-images"></i>
        </li>
        <li>
          <a href="https://www.amazon.com/s?k=esmaltes+rosalind&language=es_US&adgrpid=107479839528&gclid=Cj0KCQjwteOaBhDuARIsADBqRehs4J-sSzVEoLo9raEZKq7BEpRnMJYB_jHd5Ulp88BEjg5U1vcsBMEaAjVsEALw_wcB&hvadid=602476690964&hvdev=c&hvlocphy=1029279&hvnetw=g&hvqmt=b&hvrand=7336079301124411355&hvtargid=kwd-440206677741&hydadcr=19359_13427090&tag=googleuscolom-20&ref=pd_sl_3n3v5smn8_b">Contactanos</a>
          <i class="bi bi-phone-vibrate"></i>
        </li>
      </ul>
     
    </div>
  );
}
*/
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Logo from "./Logo";


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Logo/>
          <Navbar.Brand href="#home">logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.masglo.com/?gclid=Cj0KCQjwteOaBhDuARIsADBqRejkH8et9BpW6cs1KbsxA_CkArlDK-P_Sa3vdsv8IH3KuE27C6tA9ooaAuCSEALw_wcB">Sobre nosotros   <i class="bi bi-person-circle"></i></Nav.Link>
            <Nav.Link href="https://www.masglo.com/?gclid=Cj0KCQjwteOaBhDuARIsADBqRejkH8et9BpW6cs1KbsxA_CkArlDK-P_Sa3vdsv8IH3KuE27C6tA9ooaAuCSEALw_wcB">Tienda    <i class="bi bi-shop"></i></Nav.Link>
            <Nav.Link href="https://www.masglo.com/?gclid=Cj0KCQjwteOaBhDuARIsADBqRejkH8et9BpW6cs1KbsxA_CkArlDK-P_Sa3vdsv8IH3KuE27C6tA9ooaAuCSEALw_wcB">Contactanos     <i class="bi bi-phone-vibrate"></i></Nav.Link>
          </Nav> 
          
          <CartWidget/>
        </Container>
      </Navbar>
     
    
    </>
  );
}

export default ColorSchemesExample;

