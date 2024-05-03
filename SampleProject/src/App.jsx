
import AddContact from './AddContact_Component/AddContact'
import './App.css'
import ViewContact from './ViewContact_Component/ViewContact'

function App() {
   const contactListData = [
    {
      id:1,
      name:"Sathish",
      phone:"9898989898"
    },
    {
      id:2,
      name:"Kishore",
      phone:"7676767676"
    }
   ]

  return (
    <div>
      {/* <AddContact /> */}
      <ViewContact getList={contactListData} />
    </div>
  )
}

export default App
