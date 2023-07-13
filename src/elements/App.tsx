import React from 'react'
import { Button } from "@/components/ui/button";
import { controller } from '@/lib/StatesController';
import { useSelector } from 'react-redux';

interface Props {

}

const App: React.FC<Props> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);

    return (
        <div className='container text-center gap-4 space-x-4 space-y-4'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Counter: {states.counter}
            </h1>
            <Button onClick={() => {
                controller.increase()
            }}>+++</Button>
            <Button onClick={() => {
                controller.decrease()
            }}>---</Button>
        </div>
    )

}

export default App;