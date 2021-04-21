import React from "react";

import { Row,Col, Card, CardDeck } from "react-bootstrap";
import './css/style.css';

export default function App() {
  return (
  <>
  <h3 className="text-center">Topic</h3>
  <Row>
  <CardDeck>
  <Col xs={12} md={6} lg={4}>
  <Card>
    
    <Card.Body className="custom-body">
      <Card.Title className="custom-title1">HTML</Card.Title>
      <Card.Text className="custom-text">
      <ul>
		<strong> HTML- HyperText Markup Language.</strong>
		<li>Hypertext means that the document contains links that allow the reader to jump to other places in the document or to another document altogether. The latest version is known as HTML5. </li>
		<li> A Markup Language is a way that computers speak to each other to control how text is processed and presented. To do this HTML uses two things: tags and attributes.</li>
		<li>Tags are used to mark up the start of an HTML element and they are usually enclosed in angle brackets. An example of a tag is: &lt;h1&gt;.</li>
		<li>Many HTML tags have semantic meaning. That is, the element itself conveys some information about the type of content contained between the opening and closing tags.</li>
    <li>The purpose of a web browser is to read HTML documents and display them.A browser does not display the HTML tags, but uses them to determine how to display the document:</li>		
	</ul>
      </Card.Text>
    </Card.Body>
    
  </Card>
  </Col>
  <Col xs={12} md={6} lg={4}>
  <Card>
    
    <Card.Body className="custom-body">
      <Card.Title  className="custom-title2">CSS</Card.Title>
      <Card.Text className="custom-text">
      <ul>
	<strong>CSS is Cascading StyleSheet that add style.</strong>
	<li>Same style rules can be applied on multiple elements. Can control the presentation of multiple pages of a website with a single style sheet.
        Used to style dynamic states of elements such as hover, focus, etc. that isn't possible otherwise.</li>
	<li>Used to change the position of an element on a web page without changing the markup. </li>
	<li> Used to create animations and transitions effects without using any JavaScript.</li><li>
        Used to create print friendly version of your web pages.CSS uses &lt;link&gt; elements to apply external stylesheets and &lt;style&gt; elements to apply internal stylesheets to HTML.</li>
	<li>Used to alter the display of existing HTML elements. Used to transform elements like scale, rotate, skew, etc. in 2D or 3D space.</li>
  <br/>
  
</ul>
      </Card.Text>
    </Card.Body>
    
  </Card>
  </Col>
  <Col xs={12} md={12} lg={4}>
  <Card>
    
    <Card.Body className="custom-body">
      <Card.Title className="custom-title3">JAVASCRIPT</Card.Title>
      <Card.Text className="custom-text">
      <ul><strong>JavaScript is a scripting language that makes the webpage interactive.</strong>
		<li> JavaScript can be connected to the objects of its environment to provide programmatic control over them.</li>
		<li>Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.</li>
		<li>Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.</li>

	</ul>
      </Card.Text>
    </Card.Body>
    
  </Card>
  </Col>
</CardDeck>

</Row>
</>
  );
}
