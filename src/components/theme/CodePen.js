import React from 'react'

const CodePen = ( props ) => {
  const { pen, title, height } = props

  return (<>
    <iframe
      height={ height || 300 }
      scrolling="no"
      title="web-forms-lesson-2"
      src={ `https://codepen.io/tomaszkisiel/embed/${ pen }?height=265&theme-id=dark&default-tab=html,result` }
      frameBorder="no"
      allowtransparency="true"
      allowFullScreen={true}
      style={{ width: '100%' }}>
      <div style={{ height: height || 300, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em', padding: '1em' }}>
        See the Pen <a href={ `https://codepen.io/tomaszkisiel/pen/${ pen }` }>{ title }</a> by TomaszKisiel
        (<a href='https://codepen.io/tomaszkisiel'>@tomaszkisiel</a>) on <a href='https://codepen.io'>CodePen</a>.
      </div>
    </iframe>
  </>)
}

export default CodePen
