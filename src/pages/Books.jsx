import React, { useEffect } from 'react'
import PageLayout from '../components/Layout/PageLayout'
import { useState } from 'react';
import { Button } from 'antd';
export default function Books() {
    const [books, setBooks] = useState([]);


    //UseEffect to fetch the books
    useEffect(() => {
        getBooks();
    }, []);


    const getBooks = async () => {
        const response = await fetch('http://localhost:8000/bookList');
        const data = await response.json();
        setBooks(data);
    }


console.log(books);

  return (
    <>
        <PageLayout></PageLayout>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Books</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Published Date</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.date}</td>
                                    <td>{book.price}</td>
                                    <td><Button>Update</Button></td>
                                     <td><Button>Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    
    </>
   
  )
}
