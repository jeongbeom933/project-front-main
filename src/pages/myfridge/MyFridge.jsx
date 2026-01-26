import React from 'react';
import { Link } from 'react-router-dom';
import AddIngredientModal from '../../components/myfridgecomponents/AddIngredientModal';
import IngredientList from '../../components/myfridgecomponents/IngredientList';

const MyFridge = () => {
  return (
    <div>
      <h1>나의 냉장고</h1>
      <Link to={"/foodrecommendation"}>추천 요리 보기</Link>
      <IngredientList>재료리스트</IngredientList>
      <AddIngredientModal></AddIngredientModal>
      <p>컴포넌트</p>
    </div>
  );
};

export default MyFridge;