import React, { Component } from 'react';

import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
{
    books {
      name
      id
    }
  }  
`;

class BookList extends Component {


    displaybooks(){
        var data = this.props.data;

        if(data.loading){
            return( <div>Loading books...</div> );
        }else{
            return(
                data.books.map(book => {
                    return <ul>{ book.name }</ul>;
                })
            )
        }

    }
  
    render() {

        console.log(this.props);
        return(
            <div>

                <ul>
                    { this.displaybooks() }
                </ul>
                
            </div>
        )
      };
}

export default graphql(getBooksQuery)(BookList);
