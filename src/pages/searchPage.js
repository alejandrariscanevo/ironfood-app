import React, {useState} from 'react'
import MealList from '../components/MealList'
import "../pages/SearchPageElements.css"
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const SearchPage = () => {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function handleChange(e){
        setCalories(e.target.value)
    }

    function getMealData(){
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=2a7fb5d65d154c9eb8ccc6cd3d5e9cdf&timeFrame=day&targetCalories=${calories}`
        )
        .then((response) => response.json())
        .then((data) => {
            setMealData(data);
            console.log(data);
        })
        .catch(() => {
            console.log('error');
        })
    }
    return (
        <>
        <Navbar />
        <Sidebar />
        <div className="searchPage">
          <section className= "controls">
              <input 
              type="number"
              placeholder="Calories (e.g. 2000)"
              onChange={handleChange} />           
          <button onClick={getMealData}>Get Daily Meal Plan</button>
          {mealData && <MealList mealData={mealData} />}
          </section>
        </div>
        </>
    )
}

export default SearchPage
