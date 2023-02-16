import './styles/App.css'
import Layout from './pages/Layout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import TodoList from './pages/TodoList'
import NotFound from './pages/NotFound'
import TodoInfo from './pages/TodoInfo'
import NewTodo from './pages/NewTodo'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/todo-info" component={TodoInfo} />
          <Route path="/todo-lists" component={TodoList} />
          <Route path="/new-todo" component={NewTodo} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
