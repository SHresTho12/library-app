import React, { useEffect } from 'react'
import PageLayout from '../components/Layout/PageLayout'
import { useState } from 'react';
import { Button , Table,Tag,Space ,Typography} from 'antd';
const { Column, ColumnGroup } = Table;
const { Text, Title } = Typography;
export default function Books() {
    const [books, setBooks] = useState([]);


    //UseEffect to fetch the books
    useEffect(() => {
        getBooks();
    }, []);


    const getBooks = async () => {
        const response = await fetch('http://localhost:8000/api/books/bookList');
        const data = await response.json();
        setBooks(data);
    }


console.log(books);

  return (
    <>
        <PageLayout></PageLayout>
           <Title level={3} mark> Books</Title>
        {/* <div className="container">
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
        </div> */}

<Table  dataSource={books} >


      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Author" dataIndex="author" key="author" />
  
    <Column title="Genre" dataIndex="genre" key="genre" />
    <Column title="Description" dataIndex="description" key="description" />
    {/* <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    /> */}
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="large">
          <a>Update {record.name}</a>
          <a>Delete</a>
        </Space>
      )}
    />
</Table>

    
    </>
   
  )
}
