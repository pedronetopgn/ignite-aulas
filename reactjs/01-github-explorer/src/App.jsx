import { RepositoryList } from './components/RepositoryList';
import { Counter } from './components/Counter';
 
import './styles/global.scss';
import { RepositoryItem } from './components/RepositoryItem';

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    );
}