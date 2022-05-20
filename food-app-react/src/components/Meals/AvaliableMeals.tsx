import React, { useEffect, useState } from "react";
import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {Meal} from "../../App";

interface AvailableMealsProps {
}

export default function AvailableMeals(props: AvailableMealsProps) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    //request zur rest api von firebase (backend)
    const fetchMeals =async () => {
      const response = await fetch('https://foa1-129ed-default-rtdb.europe-west1.firebasedatabase.app/meals.json').then();
      
      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      //daten aus json laden
      let loadedMeals: Meal[] = [];

      for(const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    
    fetchMeals().catch((error) => {
      let message = 'Unknown error';
      if(error instanceof Error){
        message = error.message;
      }

      setIsLoading(false);
      setHttpError(message);
    });

  }, []);

  if(isLoading){
    return (
      <section className="meals-loading">
        <p></p>
      </section>
    );
  }

  if(httpError){
    return (
      <section className="meals-error">
        <p>{httpError}</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => (
      <MealItem key={meal.id} meal={meal}/>
  ));
  return (
    <section className="available-meals">
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}
