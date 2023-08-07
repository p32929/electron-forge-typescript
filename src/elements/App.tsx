
import { Button } from '@/components/ui/button'
import { useActions, useAppState } from '@/overmind/OvermindHelper'
import React from 'react'

interface Props {

}
const App: React.FC<Props> = (props) => {
    const actions = useActions()
    const states = useAppState()

    return (
        <div className='container text-center gap-4 space-x-4 space-y-4'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Counter: {states.counter}
            </h1>

            <Button onClick={() => {
                actions.increaseCounter(-1)
            }}>---</Button>

            <Button onClick={() => {
                actions.increaseCounter(1)
            }}>+++</Button>
        </div>
    )

}

export default App;