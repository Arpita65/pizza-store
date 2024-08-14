import {Component} from 'react';
class About extends Component{
    render(){
        return (
            <>
            <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src=" https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Pizza Hut</h1>
        <p className="lead">Pizza Hut offers a variety of pizzas, from classic favorites like Pepperoni and Margherita to specialty creations such as the Supreme and Meat Lover's. Beyond pizza, the menu includes delectable sides like garlic bread, chicken wings, and a range of pasta dishes and desserts. Each Pizza Hut restaurant is designed to provide a warm and inviting atmosphere, making it an ideal spot for family gatherings, casual outings with friends, or a quick and satisfying meal. Whether dining in, ordering takeout, or opting for delivery, Pizza Hut ensures a delightful experience with every bite, maintaining a tradition of excellent customer service and culinary delight.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Pizza</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact</button>
          </div>
      </div>
    </div>
  </div>

  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/5056849/pexels-photo-5056849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={350} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/6068717/pexels-photo-6068717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={350} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/5902964/pexels-photo-5902964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={350} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
  </>
    
        )
    }
}        

  export default About;