"use strict";

const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const player1_score = document.querySelector(".player1_score");
const player2_score = document.querySelector(".player2_score");
const curr_score_1 = document.querySelector(".curr_score_1");
const curr_score_2 = document.querySelector(".curr_score_2");
const new_btn = document.querySelector(".btn-new");
const roll_btn = document.querySelector(".btn-roll");
const hold_btn = document.querySelector(".btn-hold");
const dice = document.querySelector(".dice");

let curr_score = 0;
let total_score_1 = 0;
let total_score_2 = 0;
let curr_player = 1;

let game_state = 1;
dice.classList.add("hidden");

const player_colour = function () {
  if (curr_player === 1) {
    player1.style.backgroundColor = "rgb(247, 192, 201)";
    player2.style.backgroundColor = "rgb(205, 78, 159)";
  } else {
    player2.style.backgroundColor = "rgb(247, 192, 201)";
    player1.style.backgroundColor = "rgb(205, 78, 159)";
  }
};

player_colour();

roll_btn.addEventListener("click", function () {
  if (game_state) {
    let die_outcome = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice-${die_outcome}.png`;
    if (die_outcome === 1) {
      curr_score = 0;
      curr_player === 1
        ? (curr_score_1.textContent = curr_score)
        : (curr_score_2.textContent = curr_score);
      curr_player === 1 ? (curr_player = 2) : (curr_player = 1);
      player_colour();
    } else {
      curr_score += die_outcome;
      curr_player === 1
        ? (curr_score_1.textContent = curr_score)
        : (curr_score_2.textContent = curr_score);
    }
  }
});

hold_btn.addEventListener("click", function () {
  if (game_state) {
    if (curr_player === 1) {
      total_score_1 += curr_score;
      player1_score.textContent = total_score_1;
      if (total_score_1 >= 20) {
        game_state = 0;
        player1.style.backgroundColor = "rgb(54, 51, 51)";
        player1.style.color = "rgb(196, 30, 132)";
        dice.classList.add("hidden");
      } else {
        curr_score = 0;
        curr_score_1.textContent = 0;
        curr_player = 2;
        player_colour();
      }
    } else {
      total_score_2 += curr_score;
      player2_score.textContent = total_score_2;
      if (total_score_2 >= 20) {
        game_state = 0;
        player2.style.backgroundColor = "rgb(54, 51, 51)";
        player2.style.color = "rgb(196, 30, 132)";
        dice.classList.add("hidden");
      } else {
        curr_score = 0;
        curr_score_2.textContent = 0;
        curr_player = 1;
        player_colour();
      }
    }
  }
});

new_btn.addEventListener("click", function () {
  curr_score = 0;
  total_score_1 = 0;
  total_score_2 = 0;
  player1_score.textContent = 0;
  player2_score.textContent = 0;
  curr_score_1.textContent = 0;
  curr_score_2.textContent = 0;
  curr_player = 1;
  player_colour();
  game_state = 1;
  dice.classList.add("hidden");
  player1.style.color = "black";
  player2.style.color = "black";
});
