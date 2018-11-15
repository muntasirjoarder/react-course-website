import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import StripeChecout from 'react-stripe-checkout'

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    
    if(scrollTop > 50)
    {
      console.log('scrollTop');
      this.setState({hasScrolled: true});
    }
    else{
      this.setState({hasScrolled: false})
    }
  }
  handlePurchase = (token)=>{
    const amount = 5000
    const description = "Product 1"
    const bodyObject = {
      tokenId : token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }

    fetch('', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }
  render(){
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled': 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link> 
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <StripeChecout 
                amount = {5000}
                image = "https://cl.ly/0K2f1V3K3h0D/download/Logo.jpg"
                token = {this.handlePurchase}
                stripeKey = {'pk_test_Bnp92KyJ6e2QJvS1QrMCtIlW'}
                >
              <button>Buy</button>
          </StripeChecout>
        </div>
    </div>
    )
  }
}
export default Header
