import './styles/App.css'
import Layout from './pages/Layout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import TodoList from './pages/TodoList'
import NotFound from './pages/NotFound'
import TodoInfo from './pages/TodoInfo'
import NewTodo from './pages/NewTodo'

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <TodoList /> */}
        {/* <TodoInfo /> */}
        <NewTodo />
      </Layout>
    </div>
  )
}

export default App
