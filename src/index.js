import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListContext from './component/ListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <ListContext>
        <App />
    </ListContext>
);

reportWebVitals();
