$(document).ready(function () {
  let s = document.querySelectorAll(".pointes");
  let s1 = document.querySelector(".score1");
  let s2 = document.querySelector(".score2");
  let s3 = document.querySelector(".score3");
  let s4 = document.querySelector(".score4");
  let s5 = document.querySelector(".score5");
  let s6 = document.querySelector(".score6");
  let play_btn = document.querySelector(".play_btn");
  let reset_btn = document.querySelector(".reset_btn");
  let team_1_score = document.querySelector(".team-1_score");
  let team_2_score = document.querySelector(".team-2_score");
  let winner_name = document.querySelector(".winner_name");
  let show_winner = document.querySelector(".winner_box");
  let new_game = document.querySelector(".restart_game");
  let clickCounte = 0;
  let checkTurn = "team-1";
  let team1_score = 0;
  let team2_score = 0;
  let winner = "";
  let winner_team;

  const score = [0, 1, 2, 3, 4, 6];

  $(".restart_game").click(function () {
    clickCounte = 0;
    checkTurn = "team-1";
    team1_score = 0;
    team2_score = 0;
    winner = "";
    winner_team = "";
    play_btn.disabled = false;
    team_1_score.value = 0;
    team_2_score.value = 0;
    $(".winner_box").addClass("d-none");
    for (let i = 0; i < s.length; i++) {
      s[i].value = "";
      s[i].style.backgroundColor = "";
    }
  });
  let pointe = "";

  function checkWinner() {
    if (team1_score > team2_score) {
      winner = "Team-1 Win !";
    } else if (team1_score < team2_score) {
      winner = "Team-2 Win !";
    } else {
      winner = "Match Draw";
    }
    winner_name.innerHTML = winner;
    play_btn.disabled = true;
    $(".winner_box").removeClass("d-none");
  }

  reset_btn.addEventListener("click", function () {
    for (let i = 0; i < s.length; i++) {
      s[i].value = "";
      s[i].style.backgroundColor = "";
    }
    clickCounte = 0;
    play_btn.disabled = false;
  });
  // function checkWinner() {
  //   if (winner_team > 0) {
  //     winner = "Team-1 Win !";
  //     play_btn.disabled = true;
  //     setTimeout(function () {
  //       for (let i = 0; i < s.length; i++) {
  //         s[i].value = "";
  //         s[i].style.backgroundColor = "";
  //         team_2_score.value = 0;
  //         team_1_score.value = 0;
  //         team1_score = 0;
  //         team2_score = 0;
  //         winner_name.innerHTML = "";
  //       }
  //       clickCounte = 0;
  //       checkTurn = "team-1";
  //     }, 5000);
  //   } else if (winner_team < 0) {
  //     winner = "Team-2 Win !";
  //     play_btn.disabled = true;
  //     setTimeout(function () {
  //       play_btn.disabled = false;
  //       for (let i = 0; i < s.length; i++) {
  //         s[i].value = "";
  //         s[i].style.backgroundColor = "";
  //         team_1_score.value = 0;
  //         team_2_score.value = 0;
  //         team1_score = 0;
  //         team2_score = 0;
  //         winner_name.innerHTML = "";
  //       }
  //       clickCounte = 0;
  //       checkTurn = "team-1";
  //     }, 5000);
  //   }
  //   // else {
  //   //   winner = "Match Draw";
  //   //   play_btn.disabled = true;
  //   //   setTimeout(function () {
  //   //     play_btn.disabled = false;
  //   //     for (let i = 0; i < s.length; i++) {
  //   //       s[i].value = "";
  //   //       s[i].style.backgroundColor = "";
  //   //     }
  //   //     team_2_score.values = 0;
  //   //     team_1_score.values = 0;
  //   //     team1_score = 0;
  //   //     team2_score = 0;
  //   //     winner_name.innerHTML = "";
  //   //     clickCounte = 0;
  //   //     checkTurn = "team-1";
  //   //   }, 5000);
  //   // }
  //   winner_name.innerHTML = winner;
  // }

  // function checkWinner() {
  //   if (parseInt(team1_score) < parseInt(team2_score)) {
  //     winner = "Team-2 Win !";
  //     play_btn.disabled = true;
  //     setTimeout(function () {
  //       play_btn.disabled = false;
  //       for (let i = 0; i < s.length; i++) {
  //         s[i].value = "";
  //         s[i].style.backgroundColor = "";
  //         team_1_score.value = 0;
  //         team_2_score.value = 0;
  //         team1_score = 0;
  //         team2_score = 0;
  //         winner_name.innerHTML = "";
  //       }
  //       clickCounte = 0;
  //       checkTurn = "team-1";
  //     }, 5000);
  //   } else if (parseInt(team1_score) > parseInt(team2_score)) {
  //     winner = "Team-1 Win !";
  //     play_btn.disabled = true;
  //     setTimeout(function () {
  //       for (let i = 0; i < s.length; i++) {
  //         s[i].value = "";
  //         s[i].style.backgroundColor = "";
  //         team_2_score.value = 0;
  //         team_1_score.value = 0;
  //         team1_score = 0;
  //         team2_score = 0;
  //         winner_name.innerHTML = "";
  //       }
  //       clickCounte = 0;
  //       checkTurn = "team-1";
  //     }, 5000);
  //   } else if (parseInt(team1_score) === parseInt(team2_score)) {
  //     winner = "Match Draw";
  //     play_btn.disabled = true;
  //     setTimeout(function () {
  //       play_btn.disabled = false;
  //       for (let i = 0; i < s.length; i++) {
  //         s[i].value = "";
  //         s[i].style.backgroundColor = "";
  //         team_2_score.values = 0;
  //         team_1_score.values = 0;
  //         team1_score = 0;
  //         team2_score = 0;
  //         winner_name.innerHTML = "";
  //       }
  //       clickCounte = 0;
  //       checkTurn = "team-1";
  //     }, 5000);
  //   }
  //   winner_name.innerHTML = winner;
  // }

  function check() {
    if (checkTurn == "team-1") {
      for (let i = 0; i < s.length; i++) {
        if (s[i].value == 4) {
          s[i].style.backgroundColor = "#368C5C";
        }
        if (s[i].value == 6) {
          s[i].style.backgroundColor = "#368C5C";
        }
        if (s[i].value == "0") {
          checkTurn = "team-2";
          s[i].value = "W";
          team_1_score.value = ` ${team1_score}`;
          winner_team = ` ${team1_score + 1}`;
          play_btn.disabled = true;
        }
      }
    } else {
      for (let i = 0; i < s.length; i++) {
        if (s[i].value == 4) {
          s[i].style.backgroundColor = "#368C5C";
        }
        if (s[i].value == 6) {
          s[i].style.backgroundColor = "#368C5C";
        }
        if (s[i].value == "0") {
          clickCounte = 0;
          checkTurn = "team-1";
          s[i].value = "W";
          team_2_score.value = ` ${team2_score}`;
          play_btn.disabled = true;
          checkWinner();
        }
      }
    }
  }

  // function crick() {
  //   if (checkTurn == "team-1") {
  //     if (clickCounte === 1) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s1.value = pointe;
  //       team1_score += parseInt(s1.value);
  //       team_1_score.value = ` ${team1_score}`;
  //       winner_team += team1_score;
  //

  //
  //     } else if (clickCounte === 2) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s2.value = pointe;
  //       team1_score += parseInt(s2.value);
  //       team_1_score.value = ` ${team1_score}`;
  //       winner_team += team1_score;
  //

  //
  //     } else if (clickCounte === 3) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s3.value = pointe;
  //       team1_score += parseInt(s3.value);
  //       team_1_score.value = ` ${team1_score}`;
  //       winner_team += team1_score;
  //

  //
  //     } else if (clickCounte === 4) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s4.value = pointe;
  //       team1_score += parseInt(s4.value);
  //       team_1_score.value = ` ${team1_score}`;
  //       winner_team += team1_score;
  //

  //
  //     } else if (clickCounte === 5) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s5.value = pointe;
  //       team1_score += parseInt(s5.value);
  //       team_1_score.value = ` ${team1_score}`;
  //       winner_team += team1_score;
  //

  //
  //     } else if (clickCounte === 6) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s6.value = pointe;
  //       team1_score += parseInt(s6.value);
  //       team_1_score.value = ` ${team1_score}`;
  //       winner_team += team1_score;
  //

  //       clickCounte = 0;
  //       setTimeout(function () {
  //         play_btn.disabled = false;
  //         for (let i = 0; i < s.length; i++) {
  //           s[i].value = "";
  //           s[i].style.backgroundColor = "";
  //         }
  //         clickCounte = 0;
  //       }, 1000);

  //
  //     }
  //   } else {
  //     if (clickCounte === 1) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s1.value = pointe;
  //       team2_score += parseInt(s1.value);
  //       team_2_score.value = ` ${team2_score}`;

  //
  //     } else if (clickCounte === 2) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s2.value = pointe;
  //       team2_score += parseInt(s2.value);
  //       team_2_score.value = ` ${team2_score}`;

  //
  //     } else if (clickCounte === 3) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s3.value = pointe;
  //       team2_score += parseInt(s3.value);
  //       team_2_score.value = ` ${team2_score}`;

  //
  //     } else if (clickCounte === 4) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s4.value = pointe;
  //       team2_score += parseInt(s4.value);
  //       team_2_score.value = ` ${team2_score}`;

  //
  //     } else if (clickCounte === 5) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s5.value = pointe;
  //       team2_score += parseInt(s5.value);
  //       team_2_score.value = ` ${team2_score}`;

  //
  //     } else if (clickCounte === 6) {
  //       let index = Math.floor(Math.random() * score.length);
  //       pointe = score[index];
  //       s6.value = pointe;
  //       team2_score += parseInt(s6.value);
  //       team_2_score.value = ` ${team2_score}`;

  //       clickCounte = 0;
  //       setTimeout(function () {
  //         play_btn.disabled = false;
  //         for (let i = 0; i < s.length; i++) {
  //           s[i].value = "";
  //           s[i].style.backgroundColor = "";
  //         }
  //         clickCounte = 0;
  //       }, 1000);

  //
  //     }
  //   }
  // }

  play_btn.addEventListener("click", function () {
    if (checkTurn == "team-1") {
      if (clickCounte === 0) {
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s1.value = pointe;
        team1_score += parseInt(s1.value);
        team_1_score.value = ` ${team1_score}`;

        check();
      } else if (clickCounte === 1) {
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s2.value = pointe;
        team1_score += parseInt(s2.value);
        team_1_score.value = ` ${team1_score}`;

        check();
      } else if (clickCounte === 2) {
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s3.value = pointe;
        team1_score += parseInt(s3.value);
        team_1_score.value = ` ${team1_score}`;

        check();
      } else if (clickCounte === 3) {
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s4.value = pointe;
        team1_score += parseInt(s4.value);
        team_1_score.value = ` ${team1_score}`;

        check();
      } else if (clickCounte === 4) {
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s5.value = pointe;
        team1_score += parseInt(s5.value);
        team_1_score.value = ` ${team1_score}`;
        check();
      } else if (clickCounte === 5) {
        play_btn.disabled = true;
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s6.value = pointe;
        team1_score += parseInt(s6.value);
        team_1_score.value = ` ${team1_score}`;
        check();

        clickCounte = 0;
        setTimeout(function () {
          for (let i = 0; i < s.length; i++) {
            s[i].value = "";
            s[i].style.backgroundColor = "";
          }
          clickCounte = 0;
          play_btn.disabled = false;
        }, 1000);
      }
    } else {
      if (clickCounte === 0) {
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s1.value = pointe;
        team2_score += parseInt(s1.value);
        team_2_score.value = ` ${team2_score}`;
        winner_team -= s1.value;
        check();
        // console.log("final score" + winner_team);
        // console.log(team2_score);
        // console.log(clickCounte);
      } else if (clickCounte === 1) {
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s2.value = pointe;
        team2_score += parseInt(s2.value);
        team_2_score.value = ` ${team2_score}`;
        winner_team -= s2.value;

        check();
        // console.log("final score" + winner_team);
        // console.log(team2_score);
        // console.log("click" + clickCounte);
      } else if (clickCounte === 2) {
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s3.value = pointe;
        team2_score += parseInt(s3.value);
        team_2_score.value = ` ${team2_score}`;
        winner_team -= s3.value;

        check();
      } else if (clickCounte === 3) {
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s4.value = pointe;
        team2_score += parseInt(s4.value);
        team_2_score.value = ` ${team2_score}`;
        winner_team -= s4.value;

        check();
      } else if (clickCounte === 4) {
        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s5.value = pointe;
        team2_score += parseInt(s5.value);
        team_2_score.value = ` ${team2_score}`;
        winner_team -= s5.value;

        check();
      } else if (clickCounte === 5) {
        play_btn.disabled = true;

        let index = Math.floor(Math.random() * score.length);
        pointe = score[index];
        s6.value = pointe;
        team2_score += parseInt(s6.value);
        team_2_score.value = ` ${team2_score}`;
        winner_team -= s6.value;

        check();

        clickCounte = 0;
        setTimeout(function () {
          for (let i = 0; i < s.length; i++) {
            s[i].value = "";
            s[i].style.backgroundColor = "";
          }
          clickCounte = 0;
          play_btn.disabled = false;
        }, 1000);

        //  crick();
      }
    }
    clickCounte++;
  });
});
