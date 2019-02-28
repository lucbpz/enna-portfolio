import React, { useState } from 'react';

const withState = (propName, handlerStateName, initialValue) => (BaseComponent) => (props) => {
    const [state, handleState] = useState(initialValue);

    const handler = {
        [propName]: state,
        [handlerStateName]: handleState
    }

    return <BaseComponent {...{...handler , ...props}} />
}

export default withState;