import Login from "./auth/Login"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Todo List</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <AddTodo />
          <Todos />
        </div>
      </div> */}
      <Login />
    </div>
  )
}

export default App