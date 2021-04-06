import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: string = 'O';
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  processPlay(line: number, column: number) {
    if (this.board[line][column] == '' && this.winner == '') {
      this.board[line][column] = this.currentPlayer;
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }
      if (this.currentPlayer == 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  checkWinner(player:String) : boolean{
    for (let index = 0; index < this.board.length; index++) {
      if (this.board[index][0] == player && this.board[index][1] == player && this.board[index][2] == player){
        return true
      }
    }
    for (let index = 0; index < this.board.length; index++) {
      if (this.board[0][index] == player && this.board[1][index] == player && this.board[2][index] == player){
        return true
      }
    }
    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player){
      return true
    }
    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player){
      return true
    }

    return false
  }

  reset() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }

}
