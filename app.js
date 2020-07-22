let menu = document.getElementById('menu')
let search =document.getElementById('search')
let items =menu.getElementsByTagName('li')
let resultNotFound =document.getElementById('result-not-found')

let result

function filterCheck(){
    // for  filltering out the result
    let result =0
    for (let i=0;i<items.length;i++){
          if(items[i].innerText.toUpperCase().indexOf(search.value.toUpperCase()) >-1 ){
                  items[i].style.display="block"
                  result++
                    }
              else{
                  items[i].style.display="none"
                    }

            if(items[i].innerText.toUpperCase().indexOf(search.value.toUpperCase()) >-1){
                items[i].style="order:"+items[i].innerText.toUpperCase().indexOf(search.value.toUpperCase())+";"
            }

            // for showing limited result -------------Note !-----------------------------------------
            // if(items[i].style.order>3){
            //     items[i].style.display="none"
            // }--------------------------------------------------------------------------------------
        }   
                 // ------------------------------------------Note !---------------------------------------------//
                // if  we want to show only filterized result use bolow code and set style of list display none
                // if(search.value==""){
                //     items[i].style.display="none"
                // }
                // --------------------------------------------------------------------------------------------//
                
           
        // for shoaing result not found
        if(result>0){
            resultNotFound.style.display="none"
        }
        else{
            resultNotFound.style.display="block"
        }
}