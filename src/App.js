import './styles/App.css'
import Layout from './pages/Layout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import TodoList from './pages/TodoList'
import NotFound from './pages/NotFound'
import TodoInfo from './pages/TodoInfo'

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <TodoList /> */}
        <TodoInfo />
      </Layout>
    </div>
  )
}

export default App
