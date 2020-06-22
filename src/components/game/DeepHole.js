import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Carrot } from '../../static/carrot-solid.svg'

const DeepHole = ( ) => {

  let carrots = [ ]
  for ( let i = 0; i < 100; i++ ) {
    carrots.push( <Carrot width={ 50 } style={{ marginLeft: 5, marginRight: 5, marginBottom: 10 }} /> )
  }

  return (<>
    <article className="uk-card uk-card-default uk-card-body">
      <p className="uk-text-center">{ carrots }</p>
    </article>
  </>)
}

export default DeepHole
