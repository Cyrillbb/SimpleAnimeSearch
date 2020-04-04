import React from 'react'
import { connect } from 'react-redux'
import { getMore, toggleFav } from '../../actions/actions'
import { useState } from 'react'
import AnimeCard from './AnimeCard';

function AnimeList(props) {
    const [offset, setOffset] = useState(10)


    return (
        <div>

            {props.results.map((item) =>
                <AnimeCard key={item.id} id={item.id}>
                    <h3 className='cardH'>
                        <i className="far fa-star"
                        onClick={() => {props.addFav(item.id)}}
                        ></i>
                        {item.attributes.canonicalTitle}
                    </h3>
                    <img className='img' src={item.attributes.posterImage.medium} alt="" />
                </AnimeCard>
            )}
            <button onClick={
                () => {
                    setOffset(offset + 10);
                    props.getMoreRes(props.url, offset);
                }
            }>

                Show More</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: [...state.results.loadedData],
        url: state.results.url
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMoreRes: (url, offset) => dispatch(getMore(url, offset)),
        addFav: (id) => dispatch(toggleFav(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList)