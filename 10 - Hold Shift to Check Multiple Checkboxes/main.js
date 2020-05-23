const check = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
  let inBetween = false;
  if(e.shiftKey && this.checked){
    check.forEach(c => {
      if(c === this || c === lastChecked)
        inBetween = !inBetween;
      
      if(inBetween)
        c.checked = true;
    })
  }
  lastChecked = this;
}
check.forEach(c => c.addEventListener('click', handleCheck))