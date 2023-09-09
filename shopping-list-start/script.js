const linew = document.createElement('li');
linew.innerHTML= ` Grapes Juice
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`;

console.log(linew);

document.querySelector('ul').appendChild(linew);


function createnewElement(item){
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));


  const button = document.createElement('button');
  button.className= "remove-item btn-link text-red";

  const icon = document.createElement('i');
  icon.className= "fa-solid fa-xmark";

  button.appendChild(icon);
  li.appendChild(button);


  document.querySelector('.items').appendChild(li);

}

createnewElement('chicken');