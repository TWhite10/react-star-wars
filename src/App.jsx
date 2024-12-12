import { useState, useEffect } from 'react'
import { getAllStarships } from './services/sw-api'
import StarshipCard from './components/StarShipCard'

export default function App() {
    const [starships, setStarships] = useState(null)

    useEffect(() => {
        const getStarships = async () => {
            const data = await getAllStarships()
            setStarships(data)
        }
        getStarships()
    }, [])

   
    const loaded = () => {
        return (
          <div className="App"style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '20px',
            borderRadius: '5px',
            textAlign: 'center'
        }}>
             <h1>STAR WARS STARSHIPS</h1>
             <div className="starShipDivs" >
              {starships.map((starship) => (
              <StarshipCard 
                  key={starship.name} 
                  starship={starship} 
              />
          ))}
             </div>
          
      </div>
        )
    }

 
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return starships ? loaded() : loading()
}