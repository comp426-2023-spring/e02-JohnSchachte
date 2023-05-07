// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

  document.getElementById('gameForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting and causing a page reload
  
    const rpsRadio = document.getElementById('rpsRadio');
    const rplsRadio = document.getElementById('rplsRadio');
  
    if (rpsRadio.checked) {
        console.log("rps was selected")
      window.location.href = '/app/rps';
    } else if (rplsRadio.checked) {
        console.log("rpls was selected")
      window.location.href = '/app/rpsls';
    } else {
      alert('Please select a game mode.');
    }
  });

  document.getElementById("rpsRadio").addEventListener('click', (event) => {
    console.log("onclick works")
    const views = ["rockView","scissorView","paperView"];
    views.forEach(view => {
        document.getElementById(view).style.display ="inline";
    })
    const removeViews = ["lizardView","spockView"]
    removeViews.forEach(view => {
        document.getElementById(view).style.display ="none";
    })
  });

  document.getElementById("rplsRadio").addEventListener('click', (event) => {
    console.log("onclick works")
    const views = ["rockView","scissorView","paperView","lizardView","spockView"];
    views.forEach(view => {
        document.getElementById(view).style.display ="inline";
    })
  })

  document.getElementById('refreshButton').addEventListener('click', () => {
    window.location.reload();
  });