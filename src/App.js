import './App.css'; 
import people from './Componentes/People/People';  
import UserCard from './Componentes/UserCard/UserCard'

function App() { 

  return ( 
    <> 
      <div className="App"> 

        {people.map((user, i) => { 
          return (<UserCard 
            nombre = {user.name}
            rating = {user.rating}
            gender = {user.gender}
            job = {user.job}
            city = {user.city} 
            />)
  }
  )}
      </div> 
    </>
  );
}

export default App;
