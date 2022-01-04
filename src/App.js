import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name':'RRR',
  'birthday':'900222',
  'gender':'W',
  'job':'Programmer'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name':'Kavin',
  'birthday':'870422',
  'gender':'M',
  'job':'Programmer'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name':'Rose',
  'birthday':'971222',
  'gender':'W',
  'job':'Programmer'
},
]

function App() {
  return (
   <div>
   {
     customers.map(c => {
       return (
         <Customer
         key={c.id}
         id={c.id}
         image={c.image}
         name={c.name}
         birthday={c.birthday}
         gender={c.gender}
         job={c.job}
         />
       )
     })
   }
    </div>
  );
}

export default App;
