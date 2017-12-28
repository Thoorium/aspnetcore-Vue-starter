import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'

export const routes = [
    { path: '/', component: HomePage, display: 'Home', style: 'home icon' },
    { path: '/counter', component: CounterExample, display: 'Counter', style: 'idea icon' },
    { path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'tasks icon' }
]