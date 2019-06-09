//*************** Home.jsx

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'

class Home extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    //All books
    const { books, onUpdateState } = this.props


  	console.log(books[1])

    var to_read_list = [];
    var reading_list = [];
    var read_list = [];

    for (var j = 0; j < books.length; j++) {
      if ( books[j].state == 'READING')
        reading_list.push(<li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + books[j].cover_url + ')' }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={onUpdateState.bind(this, j) } value={books[j].state}>
                                <option value="move" disabled>Move to...</option>
                                <option value="READING">Currently Reading</option>
                                <option value="TO_READ">Want to READ</option>
                                <option value="READ">Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{books[j].tittle}</div>
                          <div className="book-authors">{books[j].authours}</div>
                        </div>
                      </li>)

      if ( books[j].state == 'TO_READ')
        to_read_list.push(<li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + books[j].cover_url + ')' }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={onUpdateState.bind(this, j) } value={books[j].state}>
                                <option value="move" disabled>Move to...</option>
                                <option value="READING">Currently Reading</option>
                                <option value="TO_READ">Want to READ</option>
                                <option value="READ">Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{books[j].tittle}</div>
                          <div className="book-authors">{books[j].authours}</div>
                        </div>
                      </li>)

      if ( books[j].state == 'READ')
        read_list.push(<li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + books[j].cover_url + ')' }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={onUpdateState.bind(this, j) } value={books[j].state}>
                                <option value="move" disabled>Move to...</option>
                                <option value="READING">Currently Reading</option>
                                <option value="TO_READ">Want to READ</option>
                                <option value="READ">Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{books[j].tittle}</div>
                          <div className="book-authors">{books[j].authours}</div>
                        </div>
                      </li>)
    }


    return (

     


      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {reading_list}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to READ</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {to_read_list}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">READ</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {read_list}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link
                  to='/search'
                  className='search-book'
                >Search Book</Link>

              {/*<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>*/}
            </div>
          </div>

      
      </div>
    )

  }
}



/*Home.propTypes = {
    contacts: PropTypes.array.isRequired,
    onUpdateState: PropTypes.func.isRequired
  }
*/
export default Home
