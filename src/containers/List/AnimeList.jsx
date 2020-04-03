import React from 'react'
import { connect } from 'react-redux'

function AnimeList(props) {
    return (
        <div>
            {props.results.map((item) =>
                <div key={item.id} id={item.id}>
                    <h3 className='cardH'>
                        {item.attributes.canonicalTitle}
                    </h3>
                    <p>
                        Avrage Rating:   {item.attributes.averageRating}
                    </p>
                    <p>
                        Popularity rank: {item.attributes.popularityRank}
                    </p>
                    <p>
                        Age rating: {item.attributes.ageRating}
                    </p>
                    <p>
                        Number of episodes: {item.attributes.episodeCount}
                    </p>
                    <p>
                        Status: {item.attributes.status}
                    </p>
                    <img className='img' src={item.attributes.posterImage.medium} alt="" />
                    <p className='descHide' id={item.id + 'desc'}>
                        Synopsis: {item.attributes.synopsis}
                    </p>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: [...state.results]
    }
}

export default connect(mapStateToProps, null)(AnimeList)