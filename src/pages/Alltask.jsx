import { Task1, Task2, Task3, Task4, Task5} from '../Components/Practice/task';
import * as all from '../Components/Practice/task';
import {useNavigate} from 'react-router-dom';
import MyButton from '../Components/Book/UI/button/MyButton';

export default function Alltask() {
  const navigate = useNavigate();

  return (
    <>
      <MyButton  onClick={() =>navigate(`/React_test/`)}>go back</MyButton>
      <h2 style={{marginTop: '50px'}}>Задачи по учебнику</h2>
      <Task1/>
      <Task2/>
      <Task3/>
      <Task4/>
      <Task5/>
      <all.Task6/>
      <all.Task7/>
      <all.Task8/>
      <all.Task9/>
      <all.Task10/>
      <all.Task11/>
      <all.Task12/>
      <all.Task13/>
      <all.Task14/>
      <all.Task15/>
      <all.Task16/>
      <all.Task17/>
      <all.Task18/>
      <all.Task19/>
      <all.Task20/>
      <all.Task21/>
      <all.Task22/>
      <all.Task23/>
      <all.Task24/>
      <all.Task25/>
      <all.Task26/>
      <all.Task27/>
      <all.Task28/>
      <all.Task29/>
      <all.Task30/>
      <all.Task31/>
      <all.Task32/>
      <all.Task33/>
      <all.Task34/>
      <all.Task35/>
      <all.Task36/>
      <all.Task37/>
      <all.Task38/>
      <all.Task39/>
    </>
  )
}
