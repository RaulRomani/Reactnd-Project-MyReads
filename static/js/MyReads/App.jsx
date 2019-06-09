// App.jsx

import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import Home from './Home'
import * as BooksAPI from './BooksAPI'


require('../../css/App.css');
var $ = require('jquery');

class BooksApp extends Component {
  
  constructor(props) {
        super(props);
        
        this.state = {books: [] };
        this.onUpdateState = this.onUpdateState.bind(this);
        this.createBook = this.createBook.bind(this);
        
  }

  // move to another bookshell
  onUpdateState(j, event) {
    console.log(j);
    console.log(event.target.value);

    this.state.books[j].state = event.target.value 
    this.setState({ books : this.state.books })

    
    /*$.ajax({
            type: "POST",
            async: true,
            contentType: "application/json; charset=utf-8",
            url: "/book",
            data: JSON.stringify({"idBook" : this.state.books[j].idBook,
                                   "state" : event.target.value
                                  }),
            success: function (msg) { 
              console.log(msg)
           },
           dataType: "html"
        });*/

    $.ajax({
            type: "PUT",
            async: true,
            contentType: "application/json; charset=utf-8",
            url: "book/" + this.state.books[j].idBook,
            data: JSON.stringify({"state" : event.target.value }),
            success: function (msg) { 
              console.log(msg)
           },
           dataType: "html"
        });
  }
  
  
  createBook(book) {
    // BooksAPI.create(book).then(book => {
    //   this.setState(state => ({
    //     Books: state.Books.concat([ book ])
    //   }))
    // })
  }

  componentDidMount() {

    /*BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })*/

    $.get('book', (data) => {
        /*this.setState({  books: JSON.parse(data)[0]  })*/
        this.setState({  books: JSON.parse(data)  })
      });
  }

  render() {
    console.log("books")
    console.log(this.state.books)
    return (
      <div>
        <Route exact path='/' render={() => (
          <Home books={this.state.books} 
                onUpdateState={ (j, event) => {
                  this.onUpdateState(j, event)
                  {/*history.push('/')*/}
                }}
          />
        )}/>

        <Route path='/search' render={({ history }) => (
          <SearchBooks books={this.state.books} 
            onUpdateState={ (j, event) => { 
              this.onUpdateState(j, event);
              history.push('/'); } }

            onCreateBook={(book) => {
              this.createBook(book);
              history.push('/');
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;