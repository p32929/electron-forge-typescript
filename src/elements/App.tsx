
import { useActions, useAppState } from '@/overmind/OvermindHelper'
import React from 'react'

interface Props {

}

const App: React.FC<Props> = (props) => {
    const actions = useActions()
    const states = useAppState()

    return (
        <div>
            App
        </div>
    )

}

export default App;