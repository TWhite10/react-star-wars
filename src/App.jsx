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
            <div className="App">
                {starships.map((starship) => (
                    <StarshipCard starship={starship} />
                ))}
            </div>
        )
    }

 
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return starships ? loaded() : loading()
}