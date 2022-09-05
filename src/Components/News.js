import React, { useEffect, useState } from 'react'
import NewsItem from './NewItem'
import Spinner from './Spinner'
import { PropTypes } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    

    const capitalizefirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)

        let parseData = await data.json()

        props.setProgress(70)
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100)


    }
    useEffect(() => {
        document.title = `${capitalizefirstLetter(props.category)} -NewsMonkey`
        updateNews();
    }, [])
  

    
    const fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
      
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=ed65fb6d855740b7b5efbb3d9943ea5b&page=${page}&pageSize=${props.pageSize}`


        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData);
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setLoading(false)
   
    }
   

        return (
            <>
                <h1 className='text-center ' style={{marginTop: '90px'}} >News Monkey-Top {capitalizefirstLetter(props.category)} Headlines</h1>

                {loading && <Spinner />}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !==totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row justify-content-center">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} color={props.color} />
                                </div>

                            })}

                        </div>

                    </div>
                </InfiniteScroll>
               


            </>
        )
 
}
News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
    color: "danger"

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    color: PropTypes.string,
    heading: PropTypes.string

}

export default News




// export class News extends Component {

//     static defaultProps = {
//         country: "in",
//         pageSize: 5,
//         category: "general",
//         color: "danger"

//     }
//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//         color: PropTypes.string,
//         heading: PropTypes.string

//     }
//     // articles = [
//     //     {
//     //         "source": {
//     //             "id": "bbc-sport",
//     //             "name": "BBC Sport"
//     //         },
//     //         "author": "BBC Sport",
//     //         "title": "Shane Warne memorial - watch & follow updates",
//     //         "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
//     //         "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
//     //         "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
//     //         "publishedAt": "2022-03-30T08:22:26.498888Z",
//     //         "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
//     //     },
//     //     {
//     //         "source": {
//     //             "id": "espn-cric-info",
//     //             "name": "ESPN Cric Info"
//     //         },
//     //         "author": null,
//     //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//     //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//     //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//     //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//     //         "publishedAt": "2020-04-27T11:41:47Z",
//     //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     //     },
//     //     {
//     //         "source": {
//     //             "id": "espn-cric-info",
//     //             "name": "ESPN Cric Info"
//     //         },
//     //         "author": null,
//     //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//     //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//     //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//     //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//     //         "publishedAt": "2020-03-30T15:26:05Z",
//     //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     //     }
//     // ]
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         atricles: [],
//     //         loading: false
//     //     }
//     // }

//     capitalizefirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1)
//     }
//     articles = [];
//     constructor(props) {
//         super(props);
//         // console.log("constructor of News.js")
//         this.state = {
//             articles: this.articles,
//             loading: true,
//             page: 1,
//             totalResults: 0
//         }
//         document.title = `${this.capitalizefirstLetter(props.category)} -NewsMonkey`
//     }
//     async updateNews() {
//         props.setProgress(10)
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`
//         this.setState(
//             {
//                 loading: true
//             }
//         )
//         let data = await fetch(url)
//         props.setProgress(30)

//         let parseData = await data.json()
//         // console.log(parseData);
//         props.setProgress(70)

//         this.setState(
//             {
//                 articles: parseData.articles,
//                 totalResults: parseData.totalResults,
//                 loading: false
//             })
//         props.setProgress(100)


//     }

//     async componentDidMount() {

//         this.updateNews();
//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=ed65fb6d855740b7b5efbb3d9943ea5b&page=1&pageSize=${props.pageSize}`
//         // this.setState(
//         //     {
//         //         loading: true
//         //     }
//         // )
//         // let data = await fetch(url)
//         // let parseData = await data.json()
//         // console.log(parseData);
//         // this.setState(
//         //     {
//         //         articles: parseData.articles,
//         //         totalResults: parseData.totalResults,
//         //         loading: false
//         //     })
//         // fetch(url).then((res) => res.json())
//         //     .then((json) => {
//         //         this.setState({
//         //             articles: json.articles,
//         //             loading: false
//         //         });
//         //     })
//         // console.log(this.state.atricles);


//     }

//     // handleNextClick = async () => {
//     //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
//     //     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=ed65fb6d855740b7b5efbb3d9943ea5b&page=${this.state.page + 1}&pageSize=${props.pageSize}`
//     //     //     this.setState(
//     //     //         {
//     //     //             loading: true
//     //     //         }
//     //     //     )
//     //     //     let data = await fetch(url)

//     //     //     let parseData = await data.json()
//     //     //     console.log(parseData);
//     //     //     this.setState(
//     //     //         {
//     //     //             articles: parseData.articles,
//     //     //             page: this.state.page + 1,
//     //     //             loading: false
//     //     //         })
//     //     // }
//     //     this.setState({ page: this.state.page + 1 })
//     //     this.updateNews()
//     // }

//     // handlePreviousClick = async () => {
//     //     // let url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=ed65fb6d855740b7b5efbb3d9943ea5b&page=${this.state.page - 1}&pageSize=${props.pageSize}`
//     //     // this.setState(
//     //     //     {
//     //     //         loading: true
//     //     //     }
//     //     // )
//     //     // let data = await fetch(url)

//     //     // let parseData = await data.json()
//     //     // console.log(parseData);
//     //     // this.setState(
//     //     //     {
//     //     //         articles: parseData.articles,
//     //     //         page: this.state.page - 1,
//     //     //         loading: false
//     //     //     })
//     //     this.setState({ page: this.state.page - 1 })
//     //     this.updateNews()
//     // }
//     fetchMoreData = async () => {
//         // a fake async api call like which sends
//         // 20 more records in 1.5 secs
//         this.setState({ page: this.state.page + 1 })
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=ed65fb6d855740b7b5efbb3d9943ea5b&page=${this.state.page}&pageSize=${props.pageSize}`


//         let data = await fetch(url)
//         let parseData = await data.json()
//         console.log(parseData);
//         this.setState(
//             {
//                 articles: this.state.articles.concat(parseData.articles),
//                 totalResults: parseData.totalResults,
//                 loading: false
//             })
//     }
//     render() {

//         return (
//             <>
//                 <h1 className='text-center m-4'>News Monkey-Top {this.capitalizefirstLetter(props.category)} Headlines</h1>

//                 {this.state.loading && <Spinner />}

//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Spinner />}>
//                     <div className="container">
//                         <div className="row justify-content-center">
//                             {this.state.articles.map((element) => {
//                                 return <div className="col-md-4" key={element.url}>
//                                     <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} color={props.color} />
//                                 </div>

//                             })}

//                         </div>

//                     </div>
//                 </InfiniteScroll>
//                 {/* <div className="container d-flex justify-content-between">

//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

//                 </div> */}


//                 {/* <NewItem/>
//                 <NewItem/> */}


//             </>
//         )
//     }
// }

// export default News
