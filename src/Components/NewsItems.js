import React, { Component } from 'react'
export class NewsItems extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (

            <div className="container-fluid my-3 mx-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }></div>

 
                    <div className="card" style={{ width: '18rem' }}>
                        <span className="badge roundded-pill bg-danger">{source} </span>
                    </div>

                    <img src={!imageUrl ? "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=170&q=50" : imageUrl}
                        className="card-img" alt="default" />
                    <div className="card-body ">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted"> By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark" >Read More</a>
                    </div>

                </div>
            </div>

        )
    }
}

export default NewsItems;
