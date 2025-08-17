import {Col, Row, Dropdown, Button} from 'react-bootstrap';
import {useState, useRef} from 'react';



export default function LabelMaker()
{
  const [productName, setProductName] = useState('Product Name');
  const [destination, setDestination] = useState('Destination');

  
    return(
    <>
    
      <h5>Printable Section</h5>
      <section id='printedLabel' className='border border-5 border-black m-5 p-auto'>
        <div id='customerInfoSection' className='border border-2 border-black m-3 p-4'>
          <h1>Product.name</h1>
          <p id='productIngredientListSection'>Product.ingredients</p>
          <p id='advisorySection'>Product.useByAdvice</p>
          <p id='tipSection'>Product.usageTip</p>
          <p id='sellByDateSection'><b>Sell By Date: sellByDate</b></p>
        </div>
        <div id='bakeryInfoSection'>
          <h1>BAKE THAT DOUGH</h1>
          <p>
            10700 Virginia Pine Way, Suite 106<br/>
            Knoxville, TN 37932<br/>
          </p>
        </div>
        <div id='salerInfoSection'>
          <Row>
            <Col>
            <b>Wholesaler.product.price</b>
            </Col>
            <Col>
            <b>Lot#: ######</b>
            </Col>
          </Row>
          <p>
            <b>Wholesaler.product.productCode</b>
          </p>
        </div>
      </section>


      <h5>Darien's Section</h5>
      <section>
        <h3>Select a product:</h3>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='productMenu'>
            Select a product
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='set on on click calls to set the value of productName onClick(setProductName(New Product))'>Product 1</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

                <h3>Select a wholesaler:</h3>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='productMenu'>
            Select a wholesaler
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='set on on click calls to set the value of productName onClick(setProductName(New Product))'>Wholesaler 1</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
      <Button variant='secondary'>Print Labels</Button>
    </>
    )
}
/*
<p id=''></p>
style={{height:'4in', width:'2in'}}
<section className='m-auto p-auto'>
<Card className='m-auto p-auto h-100 w-50'>
<Card.Body className='m-auto p-auto'>
<Card.Title>Product Name</Card.Title>
<Card.Text>
<div>
<p>
Product Ingredient list
</p>
<p>
NO PRESERVATIVES. USE OR FREEZE BY BEST BY DATE<br/>
Crafted by: <b>BAKE THAT DOUGH LLC</b><br/>
10700 Virginia Pine Way, Suite 106<br/>
Knoxville, TN 37932<br/>            
</p>
<p>
<Row>
<Col>
$X.xx
</Col>
<Col>
Lot Number
</Col>
</Row>
Product Code for Three Rivers Market<br/>
</p>            
</div>
</Card.Text>
</Card.Body>
</Card>        
</section>
*/

