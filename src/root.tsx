import * as ReactDOM from 'react-dom';

function render() {
    ReactDOM.render(
        <div className="md:container mx-auto flex items-center justify-center h-screen bg-gray-200">
            <p className=" text-indigo-400 text-2xl">React + Tailwind + Typescript + Electron = ❤</p>
        </div>
        , document.body);
}

render();