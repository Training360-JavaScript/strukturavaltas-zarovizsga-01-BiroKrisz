function manipulateDom() {
   const elements = document.querySelectorAll('.quote').forEach( item => {
       item.style.fontStyle = 'italic'
       item.style.backgroundColor = 'lightblue'
       item.style.borderColor = 'blue'
   })

   return elements

};

export { manipulateDom };