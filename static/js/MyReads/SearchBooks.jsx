import React from 'react'

import  PropTypes from 'prop-types' 
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import { Route } from 'react-router-dom'


class SearchBooks extends React.Component {

  constructor(props) {
    super(props);
        this.state = {query: ""};  //state of the input_text search_books
        this.updateQuery = this.updateQuery.bind(this);

        this.updateQuery = this.updateQuery.bind(this);
        this.clearQuery = this.clearQuery.bind(this);
      }

  updateQuery (query) {
    this.setState({ query: query.trim() })
  }

  clearQuery () {
    this.setState({ query: '' })
  } 

  render() {

  	//All books
    const { books, onUpdateState } = this.props
    const { query } = this.state


    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.tittle))
    } else {
      showingBooks = books
    }

    // showingBooks.sort(sortBy('tittle'))

    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link className='close-search' to='/'>Close</Link>


              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  className='search-books'
                  type='text'
                  placeholder='Search by title or author'
                  value={query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>

              
            </div>


            <div className="search-books-results">

              {showingBooks.length !== books.length && (
                <div className='showing-books'>
                  <span>Now showing {showingBooks.length} of {books.length} total </span>
                  <a onClick={this.clearQuery}>Show all</a>
                </div>
              )}

              <ol className='books-grid'>
                {showingBooks.map((book, j) => (
                        <li>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.cover_url + ')' }}></div>
                              <div className="book-shelf-changer">
                                <select onChange={onUpdateState.bind(this, j) } value={book.state}>
                                  <option value="move" disabled>Move to...</option>
                                  <option value="READING">Currently Reading</option>
                                  <option value="TO_READ">Want to READ</option>
                                  <option value="READ">Read</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.tittle}</div>
                            <div className="book-authors">{book.authours}</div>
                          </div>
                        </li>
                ))}
              </ol>
            </div>
        </div>
    )
  }
}

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateState: PropTypes.func.isRequired,
    onCreateBook: PropTypes.func.isRequired
  }

export default SearchBooks;
