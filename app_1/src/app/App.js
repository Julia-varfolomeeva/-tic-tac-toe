
import React from 'react';
import './App.css';
import Header from '../header/Header';//1+ <Header/>
import Main from '../main/Main';
import Footer from '../footer/Footer'

 class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squares:Array(9).fill(null),//сщздает массив из 9 элементов , с пустым содержимым
      count:0,//счетчик ходов

    }
    this.winnerLine =[//комбинации выигрышей
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
   }
    isWinner = () =>{// метод выигрыша
      let s = (this.state.count % 2 === 0) ? 'X' : 'O';//присваеваем переменной s x или о
      for (let i = 0; i < 8 ; i++){//цикл по комбинациям
        let line = this.winnerLine[i];//один из комбинаций
        if (this.state.squares [line[0]] === s &&//если элементы комбинаций равны друг другу
          this.state.squares [line[1]] === s &&
          this.state.squares [line[2]] === s ){
            alert( s  + ' win');//пишет win
            setTimeout(()=>{//обнулятор через 3 сек
              this.setState({squares:Array(9).fill(null)});//обновляем массив
              this.setState({count:0});
             }, 5000)
            
          }
      }

    }
   clickHandler =(event)=>{
    //data номер квадрата по которому кликнули 
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;//это наш массив
    console.log(currentSquares);//отражает состояние массива

    if (currentSquares[data] === null){//проверка на пустоту
      currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
    //присваеваем элементу массива на который кликнули  если четный ход пиши x, если нечетный пиши о
    this.setState({count:this.state.count + 1});
    
    this.setState ({squares:currentSquares}); //массиву присваеваем новые значения}

   }
   else{
    alert('Так нельзя!')
   }
    this.isWinner();
  }

    render(){
    return (
      <div>

    <div className ="tic-tac-toe">
      <div className ="ttt-grid" onClick = {this.clickHandler} data="0">{this.state.squares[0]}</div>
      <div className ="ttt-grid" onClick = {this.clickHandler} data="1">{this.state.squares[1]}</div>
      <div className ="ttt-grid" onClick = {this.clickHandler} data="2">{this.state.squares[2]}</div>
      <div className ="ttt-grid" onClick = {this.clickHandler} data="3">{this.state.squares[3]}</div>
      <div className ="ttt-grid" onClick = {this.clickHandler} data="4">{this.state.squares[4]}</div>
      <div className ="ttt-grid" onClick = {this.clickHandler} data="5">{this.state.squares[5]}</div>
      <div className ="ttt-grid" onClick = {this.clickHandler} data="6">{this.state.squares[6]}</div>
      <div className ="ttt-grid" onClick = {this.clickHandler} data="7">{this.state.squares[7]}</div>
      <div className ="ttt-grid" onClick = {this.clickHandler} data="8">{this.state.squares[8]}</div>


      



    </div>
  
    <Header /> 
    <Main/>
    <Footer/> 
</div>
);
}

  }
  

    



export default App;
