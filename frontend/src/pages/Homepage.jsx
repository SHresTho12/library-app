import React from 'react'
import PageLayout from '../components/Layout/PageLayout'
import { Carousel,Image , Button } from 'antd';
import { Card, Col, Row  } from 'antd';
import './CSS/body.css';

export default function Homepage() {

     const settings = {
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      autoplay:true
    };
  return (
  
<><PageLayout></PageLayout>
<body className="container-body">
<Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
       Explore Books
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
       Borrow Books
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Return Books
        <Button> R</Button>
      </Card>
    </Col>
  </Row>

</body>

</>
   
  
  )
}
