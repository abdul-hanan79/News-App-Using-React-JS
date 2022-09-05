import React from 'react'


const NewsItem=(props)=> {
   
        let { title, description, imageUrl, newsUrl, author, date,source,color } = props
        return (
            <div>
                <div className="card m-2" >
                    <span className={` badge bg-${color} rounded-pill`}  style={{display: "flex", justiftyContent: 'flex-end',position: "absolute", right: "0"}}>
                                  {source}             
                    </span>
                    <img src={imageUrl ? imageUrl : "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnxlbnwwfHwwfHw%3D&w=1000&q=80"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {date ? new Date(date).toGMTString() : "earlier time"}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
   
}

export default NewsItem





// export class NewItem extends Component {
//     render() {
//         let { title, description, imageUrl, newsUrl, author, date,source,color } = this.props
//         return (
//             <div>
//                 <div className="card m-2" >
//                     <span className={` badge bg-${color} rounded-pill`}  style={{display: "flex", justiftyContent: 'flex-end',position: "absolute", right: "0"}}>
//                                   {source}             
//                     </span>
//                     <img src={imageUrl ? imageUrl : "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnxlbnwwfHwwfHw%3D&w=1000&q=80"} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}...</h5>
//                         <p className="card-text">{description}...</p>
//                         <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {date ? new Date(date).toGMTString() : "earlier time"}</small></p>
//                         <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NewItem
