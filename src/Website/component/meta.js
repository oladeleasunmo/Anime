import React from 'react'
import {Helmet} from 'react-helmet'

const Meta =({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
            {/* <meta description={des}  /> */}
        </Helmet>
    )
}

Meta.defaultProps = {
    title: ' i am a boy'
}

export default Meta