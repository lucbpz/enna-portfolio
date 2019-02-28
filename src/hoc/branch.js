import React from 'react';

const branch = (p, A, B) => (BaseComponent) => (props) => p(props) ? <A {...props}/> : <B {...props}/>

export default branch;