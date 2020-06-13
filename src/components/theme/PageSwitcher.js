import React from 'react'
import { Link } from 'react-router-dom'

const PageSwitcher = ( props ) => {
  const { previousURL, previousText, nextURL, nextText } = props

  let previousSwitcher = null
  let nextSwitcher = null

  if ( previousURL !== undefined && previousText !== undefined ) {
    previousSwitcher = <h5>
      <Link to={ previousURL } style={{ color: 'inherit' }}>
        <span uk-icon="chevron-left"></span>
        { previousText }
      </Link>
    </h5>
  }

  if ( nextURL !== undefined && nextText !== undefined ) {
    nextSwitcher = <h5>
      <Link to={ nextURL } style={{ color: 'inherit' }}>
        { nextText }
        <span uk-icon="chevron-right"></span>
      </Link>
    </h5>
  }

  return (<>
    <div className="uk-grid uk-child-width-expand" style={{ paddingTop: 25 }}>
      <div>
        { previousSwitcher }
      </div>
      <div className="uk-text-right">
        { nextSwitcher }
      </div>
    </div>
  </>)
}

export default PageSwitcher
