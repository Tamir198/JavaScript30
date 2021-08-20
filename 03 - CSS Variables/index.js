var spacing = document.getElementById("spacing");
var blur = document.getElementById("blur");
var base = document.getElementById("base");

spacing.addEventListener("change", handleSpacingChanges);
spacing.addEventListener("mousemove", handleSpacingChanges);
blur.addEventListener("change", handleBlurChanges);
blur.addEventListener("mousemove", handleBlurChanges);
base.addEventListener("change", handleBaseChanges);
base.addEventListener("mousemove", handleBaseChanges);


function handleSpacingChanges(e){
  setCssVariable("--spacing",spacing.value + 'px');
}

function handleBlurChanges(e){
  setCssVariable("--blur",blur.value + 'px');
}

function handleBaseChanges(e){
  console.log(base.value);
  setCssVariable("--base",base.value);
}

function setCssVariable(name,value){
  document.documentElement.style.setProperty(name, ''+value);
}