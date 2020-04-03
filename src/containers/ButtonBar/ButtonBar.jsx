import React from 'react'
import { getMostPop, getTopAir, getTopRate } from '../../actions/actions'
import { connect } from 'react-redux'

function ButtonBar(props) {
    return (
        <div>
            <button onClick={props.getPop}>Most Popular</button>
            <button onClick={props.getTop}>Top Rated</button>
            <button onClick={props.getAir}>Top Airing</button>
        </div>
    )
}

const mapDispatchToProps = dipsatch => {
    return {
        getPop: () => dipsatch(getMostPop()),
        getTop: () => dipsatch(getTopRate()),
        getAir: () => dipsatch(getTopAir())
    }
}

export default connect(null, mapDispatchToProps)(ButtonBar)