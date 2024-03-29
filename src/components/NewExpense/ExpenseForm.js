import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = ()=>{
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');
// const [userInput, setUserInput]=useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// })
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput({...userInput,
        //     enteredTitle:event.target.value})
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({...userInput,
        //     enteredAmount:event.target.value});
    }
    
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
        // setUserInput({...userInput,
        //     enteredDate:event.target.value});
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)

        }
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')

    }

    // const inputChangeHandler =(identifier,value)=>{
    //     if(identifier ==="title"){
    //         seEnteredTitle(value);
    //     }else if(identifier==="date"){
    //         setEnteredDate(value);
    //     }else{
    //         setEnteredAmout(value);
    //     };
    // };
    
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control label">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                {/* <input type="text" onChange={(event)=>inputChangeHandler('title',event.target.value)}/> */}
            </div>
            <div className="new-expense__control label">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                {/* <input type="text" onChange={(event)=>inputChangeHandler('title',event.target.value)}/> */}
            </div>
            <div className="new-expense__control label">
                <label>Date</label>
                <input type="Date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                {/* <input type="text" onChange={(event)=>inputChangeHandler('title',event.target.value)}/> */}
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}
export default ExpenseForm;