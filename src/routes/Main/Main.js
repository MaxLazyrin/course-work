import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <>
      <section>
        <nav>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Link to="/slinkin">
            <Button variant="primary" size="lg" title="">Слинкин</Button>
          </Link>  
          
            <Button variant="primary" size="lg" title="Булгару" to="/slinkin"/>
            <Button variant="primary" size="lg" title="Мокрушин" to="/slinkin"/>
            <Button variant="primary" size="lg" title="Гайфулин" to="/slinkin"/>
            <Button variant="primary" size="lg" title="Дудаков" to="/slinkin"/>
            <Button variant="primary" size="lg" title="Евтушенко" to="/slinkin"/>
            <Button variant="primary" size="lg" title="Литвиненко" to="/slinkin"/>
            <Button variant="primary" size="lg" title="Качалов" to="/slinkin"/>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Main;
