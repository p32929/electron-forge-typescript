import * as ReactDOM from 'react-dom';
import { Button } from './components/ui/button';

function render() {
    ReactDOM.render(
        <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Taxing Laughter: The Joke Tax Chronicles
            </h1>
            <Button>Hello</Button>
        </div>
        , document.body);
}

render();