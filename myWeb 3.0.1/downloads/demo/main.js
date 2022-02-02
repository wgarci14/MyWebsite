// Get Your age
function getAge() {
    var dob = new Date(2000,1,1);
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    var age = Math.abs(age_dt.getUTCFullYear() - 1970);
  
    document.write("<div class=\"mb-1 text-muted\"> Age: " + age + " yrs </div>")
     
  }
  
  // About me Animation
  window.sr = ScrollReveal();
  
  sr.reveal('.avatar', {
    duration: 2000,
    delay: 1500,
    origin: 'top',
    distance: '200px',
    viewFactor: 0.7
  });
  sr.reveal('.aboutme', {
    duration: 2000,
    delay: 500,
    origin: 'bottom',
    distance: "50px",
    viewFactor: 0.8
  });           