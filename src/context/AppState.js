import React , {useReducer} from 'react';
import AppContext from './AppContext'

const initialState = [];

const files1 = ["Abdomen and pelvis.pdf" , 'All subjects.pdf' , 'ANATOMY SN RATNU.pdf' ,'BIOCHEM RATNU.pdf' , 'Blood physiology.pdf','Head nd neck.pdf' , 'lower-limb.pdf' , 'Neuroanatomy.pdf','Physiology excretion.pdf','PHYSIOLOGY RATNU.pdf','Physiology respiration.pdf','Thorax.pdf','Upper limb.pdf']
const files2 = ['pharma.pdf' , 'careers5.pdf' ]

const reducer = (state ,action)=>{
  switch (action.value){
    case '1':
      return files1;
    case '2':
      return files2;
    default:
      return null;
  }
}


export default function AppState(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{state , dispatch}}>{props.children}</AppContext.Provider>
  )
}
