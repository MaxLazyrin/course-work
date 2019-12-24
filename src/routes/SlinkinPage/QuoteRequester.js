import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuoteRequester.css'

class QuoteRequester extends Component
{
  constructor() {
    super();
    this.state = {
      quote: ''
    };
    this.requestQuote = this.requestQuote.bind(this);
    this.requestQuote();
  }

  requestQuote() {
    fetch('https://api.kanye.rest').then(response => response.json()).then(result => { this.setState({ quote: result.quote })}).catch(console.log);
  }
  
  render() {
    return(
      <div className="QuoteRequester-header">
        <text data-testid="header-text">Wisdom of the Day</text>
        <p/>
        <div className="QuoteRequester-quote">
          <text data-testid="quote-text">{this.state.quote}</text>
        </div>
        <p/>
        <div className="QuoteRequester-button">
            <p/>
            <Button variant="primary" size="lg" onClick={this.requestQuote} data-testid="query-btn">Bless me with Wisdom</Button>
            <p/>
        </div>
      </div>
    );
  }
}

export default QuoteRequester;
