let circle = document.getElementById('circle')
let shop = document.getElementById('shop')
let onclick_score = Number(localStorage.getItem('onclick_score'))


let patch_note = document.getElementById('patch_note')
    patch_note.classList.add('hide')

let onclick_upgrade_function1 = Number(localStorage.getItem('onclick_upgrade_function1'))

let cursor_score = Number(localStorage.getItem('cursor_score'))
let old_blender_score = Number(localStorage.getItem('old_blender_score'))
let ps5_score = Number(localStorage.getItem('ps5_score'))
let blenders_speed = Number(localStorage.getItem('blenders_speed'))


let toggle_button1 = document.getElementById('toggle_button1')
let toggle_button2 = document.getElementById('toggle_button2')



let visibility_click_update1 = document.getElementById('click_update1')
let visibility_cursor_update1 = document.getElementById('cursor_update1')
let visibility_blenders_speed_update1 = document.getElementById('blenders_speed_update1')
let visibility_blenders_speed_update2 = document.getElementById('blenders_speed_update2')
let visibility_blenders_speed_update3 = document.getElementById('blenders_speed_update3')
let visibility_click_update2 = document.getElementById('click_update2')
let visibility_cursor_update2 = document.getElementById('cursor_update2')
let visibility_cursor_update3 = document.getElementById('cursor_update3')
let visibility_old_blender_update1 = document.getElementById('old_blender_update1')
let visibility_old_blender_update2 = document.getElementById('old_blender_update2')
let visibility_ps5_update1 = document.getElementById('ps5_update1')


let printScore = document.getElementById('score')
let printScore_per_sec = document.getElementById('score_per_second')


let print_cursor_price = document.getElementById('price_of_cursor')
let print_old_blender_price = document.getElementById('price_of_blender')
let print_ps5_price = document.getElementById('price_of_ps5')
let print_battery_price = document.getElementById('price_of_battery')
let print_dst_price = document.getElementById('price_of_dst')
let print_video_price = document.getElementById('price_of_video')
let print_new_blender_price = document.getElementById('price_of_new_blender')
let print_computer_price = document.getElementById('price_of_computer')
let print_generator_price = document.getElementById('price_of_generator')


let print_quantity_of_cursors = document.getElementById('quantity_of_cursors')
let print_quantity_of_old_blenders = document.getElementById('quantity_of_old_blenders')
let print_quantity_of_ps5s = document.getElementById('quantity_of_ps5')
let print_quantity_of_batterys = document.getElementById('quantity_of_battery')
let print_quantity_of_dsts = document.getElementById('quantity_of_dsts')
let print_quantity_of_videos = document.getElementById('quantity_of_videos')
let print_quantity_of_new_blenders = document.getElementById('quantity_of_new_blenders')
let print_quantity_of_computers = document.getElementById('quantity_of_computers')
let print_quantity_of_generators = document.getElementById('quantity_of_generators')

let print_cursor_info = document.getElementById('cursor_info')
let print_old_blender_info = document.getElementById('old_blender_info')
let print_ps5_info = document.getElementById('ps5_info')
let print_battery_info = document.getElementById('battery_info')
let print_dst_info = document.getElementById('dst_info')
let print_video_info = document.getElementById('video_info')
let print_new_blender_info = document.getElementById('new_blender_info')
let print_computer_info = document.getElementById('computer_info')
let print_generator_info = document.getElementById('generator_info')



let click_update1_remember = localStorage.getItem('click_update1_remember') || "false"
let cursor_update1_remember = localStorage.getItem('cursor_update1_remember') || "false"
let blenders_speed_update1_remember = localStorage.getItem('blenders_speed_update1_remember') || "false"
let blenders_speed_update2_remember = localStorage.getItem('blenders_speed_update2_remember') || "false"
let blenders_speed_update3_remember = localStorage.getItem('blenders_speed_update3_remember') || "false"
let click_update2_remember = localStorage.getItem('click_update2_remember') || "false"
let cursor_update2_remember = localStorage.getItem('cursor_update2_remember') || "false"
let cursor_update3_remember = localStorage.getItem('cursor_update3_remember') || "false"
let old_blender_update1_remember = localStorage.getItem('old_blender_update1_remember') || "false"
let old_blender_update2_remember = localStorage.getItem('old_blender_update2_remember') || "false"
let ps5_update1_remember = localStorage.getItem('ps5_update1_remember') || "false"



let bln_per_sec = Number(localStorage.getItem("blenders_per_sec"))



let cursor_price = Number(localStorage.getItem("cursor_price"))
let old_blender_price = Number(localStorage.getItem("old_blender_price"))
let ps5_price = Number(localStorage.getItem("ps5_price"))
let battery_price = Number(localStorage.getItem("battery_price"))
let dst_price = Number(localStorage.getItem("dst_price"))
let video_price = Number(localStorage.getItem("video_price"))
let new_blender_price = Number(localStorage.getItem("new_blender_price"))
let computer_price = Number(localStorage.getItem("computer_price"))
let generator_price = Number(localStorage.getItem("generator_price"))

let format_cursor_price = localStorage.getItem("format_cursor_price")
let format_old_blender_price = localStorage.getItem("format_old_blender_price")
let format_ps5_price = localStorage.getItem("format_ps5_price")
let format_battery_price = Number(localStorage.getItem("format_battery_price"))
let format_dst_price = Number(localStorage.getItem("format_dst_price"))
let format_video_price = Number(localStorage.getItem("format_video_price"))
let format_new_blender_price = Number(localStorage.getItem("format_new_blender_price"))
let format_computer_price = Number(localStorage.getItem("format_computer_price"))
let format_generator_price = Number(localStorage.getItem("format_generator_price"))


let score = Number(localStorage.getItem("score"))
let maxScore = Number(localStorage.getItem("maxScore"))
let format_score = localStorage.getItem("format_score")



let quantity_of_cursors = Number(localStorage.getItem("quantity_of_cursors"))
let quantity_of_old_blenders = Number(localStorage.getItem("quantity_of_old_blenders"))
let quantity_of_ps5s = Number(localStorage.getItem("quantity_of_ps5s"))
let quantity_of_batterys = Number(localStorage.getItem("quantity_of_batterys"))
let quantity_of_dsts = Number(localStorage.getItem("quantity_of_dsts"))
let quantity_of_videos = Number(localStorage.getItem("quantity_of_videos"))
let quantity_of_new_blenders = Number(localStorage.getItem("quantity_of_new_blenders"))
let quantity_of_computers = Number(localStorage.getItem("quantity_of_computers"))
let quantity_of_generators = Number(localStorage.getItem("quantity_of_generators"))


downloadStorage()


/*

let wipeAllPlayers = true

if (wipeAllPlayers) {

 score = 100000000
format_score = score
maxScore = 0
bln_per_sec = 0
cursor_price = 0 
old_blender_price = 0 
ps5_price = 0 
battery_price = 0 
dst_price = 0 
video_price = 0 
new_blender_price = 0 
computer_price = 0 
generator_price = 0 
onclick_score = 0
onclick_upgrade_function1 = "false"
click_update1_remember = "false"
cursor_update1_remember = "false"
blenders_speed_update1_remember = "false"
blenders_speed_update2_remember = "false"
blenders_speed_update3_remember = "false"
click_update2_remember = "false"
old_blender_update1_remember = "false"
old_blender_update2_remember = "false"
cursor_update2_remember = "false"
cursor_update3_remember = "false"
ps5_update1_remember = "false"
cursor_score = 0
blenders_speed = 0
quantity_of_cursors = 0
quantity_of_old_blenders = 0
quantity_of_ps5s = 0
quantity_of_batterys = 0
quantity_of_dsts = 0
quantity_of_videos = 0
quantity_of_new_blenders = 0
quantity_of_computers = 0
quantity_of_generators = 0

    localStorage.clear()
     wipeAllPlayers = false

}
*/

if (score == 0 || score == null) {
    score = 0
}       

if(cursor_price == 0 || cursor_price == null) {
  cursor_price = 50
}

if(old_blender_price == 0 || old_blender_price == null) {
  old_blender_price = 150
}

if(ps5_price == 0 || ps5_price == null) {
  ps5_price = 1150
}

if(battery_price == 0 || battery_price == null) {
  battery_price = 11500
}

if(dst_price == 0 || dst_price == null) {
  dst_price = 238500
}

if(video_price == 0 || video_price == null) {
  video_price = 1585000
}

if(new_blender_price == 0 || new_blender_price == null) {
  new_blender_price = 20000000
}

if(computer_price == 0 || computer_price == null) {
  computer_price = 313000000
}

if(generator_price == 0 || generator_price == null) {
  generator_price = 5100000000
}

if (bln_per_sec == 0 || bln_per_sec == null) {
    bln_per_sec = 0
}     

if (onclick_score == 0 || onclick_score == null) {
    onclick_score = 1
}       

if (cursor_score == 0 || cursor_score == null) {
    cursor_score = 0.5
}

if (old_blender_score == 0 || old_blender_score == null) {
    old_blender_score = 2
}

if (ps5_score == 0 || ps5_score == null) {
    ps5_score = 20
}

if (blenders_speed == 0 || blenders_speed == null){
    blenders_speed = 1
}



if (onclick_upgrade_function1 == null || onclick_upgrade_function1 == 0) {
    onclick_upgrade_function1 = "false"
} 



              print_quantity_of_ps5s.innerHTML = quantity_of_ps5s
            print_quantity_of_cursors.innerHTML = quantity_of_cursors 
          print_quantity_of_old_blenders.innerHTML = quantity_of_old_blenders
        print_quantity_of_batterys.innerHTML = quantity_of_batterys
      print_quantity_of_dsts.innerHTML = quantity_of_dsts
    print_quantity_of_videos.innerHTML = quantity_of_videos
  print_quantity_of_new_blenders.innerHTML = quantity_of_new_blenders
print_quantity_of_computers.innerHTML = quantity_of_computers
print_quantity_of_generators.innerHTML = quantity_of_generators

        printScore.innerHTML = "blenders: " + format_score

      print_ps5_price.innerHTML = format_ps5_price
    print_old_blender_price.innerHTML = format_old_blender_price
  print_cursor_price.innerHTML = format_cursor_price
print_battery_price.innerHTML = format_battery_price
print_dst_price.innerHTML = format_dst_price
print_video_price.innerHTML = format_video_price
print_new_blender_price.innerHTML = format_new_blender_price
print_computer_price.innerHTML = format_computer_price
print_generator_price.innerHTML = format_generator_price

printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec)



setInterval(function(){


              if(maxScore >= 10000) {
                if(blenders_speed_update1_remember == "false"){
                    visibility_blenders_speed_update1.classList.remove('hide')
                } else {
                visibility_blenders_speed_update1.classList.add('hide')
               } 
            } else {
                visibility_blenders_speed_update1.classList.add('hide')
          }



                        if(maxScore >= 50000) {
                if(blenders_speed_update2_remember == "false"){
                    visibility_blenders_speed_update2.classList.remove('hide')
                } else {
                visibility_blenders_speed_update2.classList.add('hide')
               } 
            } else {
                visibility_blenders_speed_update2.classList.add('hide')
          }


            if(maxScore >= 100000) {
                if(blenders_speed_update3_remember == "false"){
                    visibility_blenders_speed_update3.classList.remove('hide')
                } else {
                visibility_blenders_speed_update3.classList.add('hide')
               } 
            } else {
                visibility_blenders_speed_update3.classList.add('hide')
          }

                                 
          if(maxScore >= 700000) {
                if(click_update2_remember == "false"){
                   visibility_click_update2.classList.remove('hide')
                } else {
                visibility_click_update2.classList.add('hide')
               } 
            } else {
                visibility_click_update2.classList.add('hide')
          }


             if(quantity_of_cursors >= 10) {
                if(cursor_update2_remember == "false"){
                   visibility_cursor_update2.classList.remove('hide')
                } else {
                visibility_cursor_update2.classList.add('hide')
               } 
            } else {
                visibility_cursor_update2.classList.add('hide')
          }


            if(quantity_of_cursors >= 20) {
                if(cursor_update3_remember == "false"){
                   visibility_cursor_update3.classList.remove('hide')
                } else {
                visibility_cursor_update3.classList.add('hide')
               } 
            } else {
                visibility_cursor_update3.classList.add('hide')
          }


             if(quantity_of_old_blenders >= 25) {
                if(old_blender_update1_remember == "false"){
                   visibility_old_blender_update1.classList.remove('hide')
                } else {
                visibility_old_blender_update1.classList.add('hide')
               } 
            } else {
                visibility_old_blender_update1.classList.add('hide')
          }

            if(quantity_of_old_blenders >= 50) {
                if(old_blender_update2_remember == "false"){
                   visibility_old_blender_update2.classList.remove('hide')
                } else {
                visibility_old_blender_update2.classList.add('hide')
               } 
            } else {
                visibility_old_blender_update2.classList.add('hide')
          }


           if(quantity_of_ps5s >= 15) {
                if(ps5_update1_remember == "false"){
                   visibility_ps5_update1.classList.remove('hide')
                } else {
                visibility_ps5_update1.classList.add('hide')
               } 
            } else {
                visibility_ps5_update1.classList.add('hide')
          }



}, 10)

setInterval(function (){
    

    format_score = formatNum(score)

              localStorage.setItem("score", score)
               localStorage.setItem("format_score", format_score)


    format_cursor_price = formatNum(cursor_price)

       localStorage.setItem("format_cursor_price", format_cursor_price)
         print_cursor_price.innerHTML = format_cursor_price

if(score >= cursor_price){
    print_cursor_price.classList.add('green_price')
} else {
     print_cursor_price.classList.remove('green_price')
}



format_old_blender_price = formatNum(old_blender_price)

       localStorage.setItem("format_old_blender_price", format_old_blender_price)
         print_old_blender_price.innerHTML = format_old_blender_price

if(score >= old_blender_price){
    print_old_blender_price.classList.add('green_price')
} else {
     print_old_blender_price.classList.remove('green_price')
}



format_ps5_price = formatNum(ps5_price)

       localStorage.setItem("format_ps5_price", format_ps5_price)
         print_ps5_price.innerHTML = format_ps5_price

if(score >= ps5_price){
    print_ps5_price.classList.add('green_price')
} else {
     print_ps5_price.classList.remove('green_price')
}


format_battery_price = formatNum(battery_price)

       localStorage.setItem("format_battery_price", format_battery_price)
         print_battery_price.innerHTML = format_battery_price

if(score >= battery_price){
    print_battery_price.classList.add('green_price')
} else {
     print_battery_price.classList.remove('green_price')
}


format_dst_price = formatNum(dst_price)

       localStorage.setItem("format_dst_price", format_dst_price)
         print_dst_price.innerHTML = format_dst_price

if(score >= dst_price){
    print_dst_price.classList.add('green_price')
} else {
     print_dst_price.classList.remove('green_price')
}


    
format_video_price = formatNum(video_price)

       localStorage.setItem("format_video_price", format_video_price)
         print_video_price.innerHTML = format_video_price

if(score >= video_price){
    print_video_price.classList.add('green_price')
} else {
     print_video_price.classList.remove('green_price')
}



format_new_blender_price = formatNum(new_blender_price)

       localStorage.setItem("format_new_blender_price", format_new_blender_price)
         print_new_blender_price.innerHTML = format_new_blender_price

if(score >= new_blender_price){
    print_new_blender_price.classList.add('green_price')
} else {
     print_new_blender_price.classList.remove('green_price')
}


format_computer_price = formatNum(computer_price)

       localStorage.setItem("format_new_blender_price", format_computer_price)
         print_computer_price.innerHTML = format_computer_price

if(score >= computer_price){
    print_computer_price.classList.add('green_price')
} else {
     print_computer_price.classList.remove('green_price')
}


format_generator_price = formatNum(generator_price)

       localStorage.setItem("format_new_blender_price", format_generator_price)
         print_generator_price.innerHTML = format_generator_price

if(score >= generator_price){
    print_generator_price.classList.add('green_price')
} else {
     print_generator_price.classList.remove('green_price')
}




              print_cursor_info.innerHTML = `<b>` + "There is no abilities yet." + `</b>` + `<br><br>` + formatInfoItemNum(Number((quantity_of_cursors * cursor_score) * blenders_speed)) + " blenders per sec."
              +  " ( " + Number(((((quantity_of_cursors * cursor_score) * blenders_speed) / bln_per_sec) * 100)).toFixed(1) + "%" + " )"
              + `<br><br>` 
              + "Each cursor creates " + formatInfoItemNum(Number((cursor_score) * blenders_speed)) + " blenders per sec. "



              print_old_blender_info.innerHTML = `<b>` + "There is no abilities yet." + `</b>` + `<br><br>` + formatInfoItemNum(Number((quantity_of_old_blenders * old_blender_score) * blenders_speed)) + " blenders per sec." 
              +  " ( " + Number(((((quantity_of_old_blenders * old_blender_score) * blenders_speed) / bln_per_sec) * 100)).toFixed(1) + "%" + " )"
              + `<br><br>` 
              + "Each old blender creates " + formatInfoItemNum(Number((old_blender_score) * blenders_speed)) + " blenders per sec."



              print_ps5_info.innerHTML = `<b>` + "Gain +1% blenders for each battery." + `</b>` + `<br><br>` + formatInfoItemNum(Number((quantity_of_ps5s * ps5_score + (quantity_of_batterys * (quantity_of_ps5s * ps5_score)/100)) * blenders_speed)) + " blenders per sec."
              +  " ( " + Number(((quantity_of_ps5s * ps5_score + (quantity_of_batterys * (quantity_of_ps5s * ps5_score)/100) * blenders_speed) / bln_per_sec) * 100).toFixed(1) + "%" + " )"
              + `<br><br>` 
              + "Each PS5 creates " + formatInfoItemNum(Number(((ps5_score + (quantity_of_batterys * (ps5_score)/100)))) * blenders_speed) + " blenders per sec."



              print_battery_info.innerHTML = `<b>` + "There is no abilities yet." + `</b>` + `<br><br>` + formatInfoItemNum(Number((quantity_of_batterys * 35) * blenders_speed)) + " blenders per sec."
              +  " ( " + Number(((((quantity_of_batterys * 35) * blenders_speed) / bln_per_sec) * 100)).toFixed(1) + "%" + " )"
              + `<br><br>`
              + "Each battery creates " + formatInfoItemNum(Number((35) * blenders_speed)) + " blenders per sec."



              print_dst_info.innerHTML = `<b>` + "Gain +2% blenders for each old blender." + `</b>` + `<br><br>` + formatInfoItemNum(Number(((quantity_of_dsts * 150) + (quantity_of_old_blenders * ((quantity_of_dsts * 150)/100) * 2)) * blenders_speed)) + " blenders per sec."
              +  " ( " + Number((((quantity_of_dsts * 150) + (quantity_of_old_blenders * ((quantity_of_dsts * 150)/100) * 2) * blenders_speed) / bln_per_sec) * 100).toFixed(1) + "%" + " )"
              + `<br><br>`
              + "Each DST creates " + formatInfoItemNum(Number(((150) + (quantity_of_old_blenders * ((150)/100) * 2)) * blenders_speed)) + " blenders per sec."



               print_video_info.innerHTML = `<b>` + "Gain +1% blenders for each old blender." + `</b>` + `<br><br>` + formatInfoItemNum(Number((((quantity_of_videos * 1250) + (quantity_of_old_blenders * (quantity_of_videos * 1250)/100))) * blenders_speed)) + " blenders per sec."
            +  " ( " + Number((((quantity_of_videos * 1250) + (quantity_of_old_blenders * ((quantity_of_videos * 1250)/100)) * blenders_speed) / bln_per_sec) * 100).toFixed(1) + "%" + " )"
              + `<br><br>`
              + "Each video creates " + formatInfoItemNum(Number(((1250) + (quantity_of_old_blenders * (1250)/100)) * blenders_speed)) + " blenders per sec."



              print_new_blender_info.innerHTML =`<b>` + "There is no abilities yet." + `</b>` + `<br><br>` + formatInfoItemNum(Number((((quantity_of_new_blenders * 7650) )) * blenders_speed)) + " blenders per sec."
              +  " ( " + Number(((((quantity_of_new_blenders * 7650) * blenders_speed) / bln_per_sec) * 100)).toFixed(1) + "%" + " )"
              + `<br><br>`
              + "Each new blender creates " + formatInfoItemNum(Number(((7650) * blenders_speed))) + " blenders per sec."


              print_computer_info.innerHTML =`<b>` + "There is no abilities yet." + `</b>` + `<br><br>` + formatInfoItemNum(Number((((quantity_of_computers * 42500) )) * blenders_speed)) + " blenders per sec."
              +  " ( " + Number(((((quantity_of_computers * 42500) * blenders_speed) / bln_per_sec) * 100)).toFixed(1) + "%" + " )"
              + `<br><br>`
              + "Each computer creates " + formatInfoItemNum(Number(((42500) * blenders_speed))) + " blenders per sec."



               print_generator_info.innerHTML =`<b>` + "There is no abilities yet." + `</b>` + `<br><br>` + formatInfoItemNum(Number((((quantity_of_generators * 255000) )) * blenders_speed)) + " blenders per sec."
              +  " ( " + Number(((((quantity_of_generators * 255000) * blenders_speed) / bln_per_sec) * 100)).toFixed(1) + "%" + " )"
              + `<br><br>`
              + "Each computer creates " + formatInfoItemNum(Number(((255000) * blenders_speed))) + " blenders per sec."




      if (score > maxScore) {
         maxScore = score;
         localStorage.setItem("maxScore", maxScore);
   }

}, 10)


setInterval(function(){
      score += Number(bln_per_sec / 10)
          localStorage.setItem("score", score)
             localStorage.setItem("format_score", format_score)

            printScore.innerHTML = "blenders: " + format_score
               printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec)
}, 100)



function onclickCircle() {

        if(onclick_upgrade_function1 == "true"){
            score += Number((bln_per_sec + onclick_score) / 100 * 15)
        } else {
            score += Number(onclick_score)
        }


          printScore.innerHTML = "blenders: " + format_score

     localStorage.setItem("score", score)
       localStorage.setItem("format_score", format_score)
           localStorage.setItem("onclick_upgrade_function1", onclick_upgrade_function1)


       circle.classList.add('clickAnimation')

        setTimeout(function () {
        circle.classList.remove('clickAnimation')
               circle.classList.add('circle:hover')
    }, 150)
}


function buyCursor() {

    if(score >= cursor_price){

        quantity_of_cursors = Number(quantity_of_cursors + 1)

            score = Number((score - cursor_price).toFixed(0))

    cursor_price = Number((cursor_price * 1.1).toFixed(0))

    updateBPS()
     }
    printScore.innerHTML = "blenders: " + format_score
    print_cursor_price.innerHTML = format_cursor_price
    print_quantity_of_cursors.innerHTML = quantity_of_cursors 


downloadStorage()
}



function buyOldBlender() {

    if(score >= old_blender_price){

           quantity_of_old_blenders = Number(quantity_of_old_blenders + 1)

            score = Number((score - old_blender_price).toFixed(0))

    old_blender_price = Number((old_blender_price * 1.1).toFixed(0))

    updateBPS()
     }
    printScore.innerHTML = "blenders: " + format_score
    print_old_blender_price.innerHTML = format_old_blender_price
    print_quantity_of_old_blenders.innerHTML = quantity_of_old_blenders


downloadStorage()
}

function buyPS5() {

    if(score >= ps5_price){

           quantity_of_ps5s = Number(quantity_of_ps5s + 1)

            score = Number((score - ps5_price).toFixed(0))

    ps5_price = Number((ps5_price * 1.1).toFixed(0))

    updateBPS()
     }     
    printScore.innerHTML = "blenders: " + format_score
    print_ps5_price.innerHTML = format_ps5_price
    print_quantity_of_ps5s.innerHTML = quantity_of_ps5s

downloadStorage()
}


function buyBattery() {

    if(score >= battery_price){

           quantity_of_batterys = Number(quantity_of_batterys + 1)

            score = Number((score - battery_price).toFixed(0))

    battery_price = Number((battery_price * 1.1).toFixed(0))

    updateBPS()
     } 
    printScore.innerHTML = "blenders: " + format_score
    print_battery_price.innerHTML = battery_price
    print_quantity_of_batterys.innerHTML = quantity_of_batterys

downloadStorage()
}



function buyDST() {

    if(score >= dst_price){

           quantity_of_dsts = Number(quantity_of_dsts + 1)

            score = Number((score - dst_price).toFixed(0))

    dst_price = Number((dst_price * 1.1).toFixed(0))

    updateBPS()
     } 
    printScore.innerHTML = "blenders: " + format_score
    print_dst_price.innerHTML = dst_price
    print_quantity_of_dsts.innerHTML = quantity_of_dsts

downloadStorage()
}



function buyVideo() {

    if(score >= video_price){

           quantity_of_videos = Number(quantity_of_videos + 1)

            score = Number((score - video_price).toFixed(0))

    video_price = Number((video_price * 1.1).toFixed(0))

    updateBPS()
     }  
    printScore.innerHTML = "blenders: " + format_score
    print_video_price.innerHTML = video_price
    print_quantity_of_videos.innerHTML = quantity_of_videos

 downloadStorage()
}


function buyNewBlender() {

    if(score >= new_blender_price){

           quantity_of_new_blenders = Number(quantity_of_new_blenders + 1)

            score = Number((score - new_blender_price).toFixed(0))

    new_blender_price = Number((new_blender_price * 1.1).toFixed(0))

    updateBPS()
     }       
    printScore.innerHTML = "blenders: " + format_score
    print_new_blender_price.innerHTML = format_new_blender_price
    print_quantity_of_new_blenders.innerHTML = quantity_of_new_blenders

downloadStorage()
}


function buyComputer() {

    if(score >= computer_price){

           quantity_of_computers = Number(quantity_of_computers + 1)

            score = Number((score - computer_price).toFixed(0))

    computer_price = Number((computer_price * 1.1).toFixed(0))

    updateBPS()
     }
    printScore.innerHTML = "blenders: " + format_score
    print_computer_price.innerHTML = format_computer_price
    print_quantity_of_computers.innerHTML = quantity_of_computers

downloadStorage()
}


function buyGenerator() {

    if(score >= generator_price){

           quantity_of_generators = Number(quantity_of_generators + 1)

            score = Number((score - generator_price).toFixed(0))

    generator_price = Number((generator_price * 1.1).toFixed(0))

    updateBPS()
     }     
    printScore.innerHTML = "blenders: " + format_score
    print_generator_price.innerHTML = format_generator_price
    print_quantity_of_generators.innerHTML = quantity_of_generators

downloadStorage()
}



function click_update1() {
    if (score >= 200) {
    visibility_click_update1.classList.add('hide')
      score = Number((score - 200).toFixed(0))

      click_update1_remember = "true"

          onclick_score = Number(onclick_score + 1)
    }
        printScore.innerHTML = "blenders: " + score
        
downloadStorage()
}


function cursor_update1() {
    if (score >= 1000) {
    visibility_cursor_update1.classList.add('hide')
      score = Number((score - 1000).toFixed(0))

      cursor_update1_remember = "true"

          cursor_score = Number(cursor_score * 2)

           updateBPS()         
    }
       printScore.innerHTML = "blenders: " + format_score
    printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec)

downloadStorage()
}


function blenders_speed_update1() {
    if (score >= 30000) {
    visibility_blenders_speed_update1.classList.add('hide')
      score = Number((score - 30000).toFixed(0))

      blenders_speed_update1_remember = "true"

          blenders_speed = Number(blenders_speed + 0.05)

           updateBPS()
    }
       printScore.innerHTML = "blenders: " + format_score
    printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec)
      
downloadStorage()
}

function blenders_speed_update2() {
    if (score >= 70000) {
    visibility_blenders_speed_update2.classList.add('hide')
      score = Number((score - 70000).toFixed(0))

      blenders_speed_update2_remember = "true"

          blenders_speed = Number(blenders_speed + 0.05)

           updateBPS()  
    }

       printScore.innerHTML = "blenders: " + format_score
    printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec) 

downloadStorage()
}

function blenders_speed_update3() {
    if (score >= 130000) {
    visibility_blenders_speed_update3.classList.add('hide')
      score = Number((score - 130000).toFixed(0))

      blenders_speed_update3_remember = "true"

          blenders_speed = Number(blenders_speed + 0.05)

           updateBPS()      
    }
       printScore.innerHTML = "blenders: " + format_score
    printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec)
      
downloadStorage()
}


function click_update2() {
    if (score >= 810000) {
    visibility_click_update2.classList.add('hide')
      score = Number((score - 810000).toFixed(0))

      click_update2_remember = "true"

          onclick_upgrade_function1 = "true"
           
    }
        printScore.innerHTML = "blenders: " + score
        
downloadStorage()
}


function cursor_update2() {
    if (score >= 5000) {
    visibility_cursor_update2.classList.add('hide')
      score = Number((score - 5000).toFixed(0))

      cursor_update2_remember = "true"

          cursor_score = Number(cursor_score * 2)

           updateBPS()   
    }
       printScore.innerHTML = "blenders: " + format_score
    printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec)
      
downloadStorage()
}


function cursor_update3() {
    if (score >= 10000) {
    visibility_cursor_update3.classList.add('hide')
      score = Number((score - 10000).toFixed(0))

      cursor_update3_remember = "true"

          cursor_score = Number(cursor_score * 2)

           updateBPS()   
    }
       printScore.innerHTML = "blenders: " + format_score
    printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec)
      
downloadStorage()
}


function old_blender_update1() {
    if (score >= 15000) {
    visibility_old_blender_update1.classList.add('hide')
      score = Number((score - 15000).toFixed(0))

      old_blender_update1_remember = "true"

          old_blender_score = Number(old_blender_score * 2)

           updateBPS()
    }
       printScore.innerHTML = "blenders: " + format_score
    printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec)

downloadStorage()
}


function old_blender_update2() {
    if (score >= 150000) {
    visibility_old_blender_update2.classList.add('hide')
      score = Number((score - 150000).toFixed(0))

      old_blender_update2_remember = "true"

          old_blender_score = Number(old_blender_score * 2)

           updateBPS()
    }
       printScore.innerHTML = "blenders: " + format_score
    printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec)
      
downloadStorage()
}

function ps5_update1() {
    if (score >= 55000) {
    visibility_ps5_update1.classList.add('hide')
      score = Number((score - 55000).toFixed(0))

      ps5_update1_remember = "true"

          ps5_score = Number(ps5_score * 2)

           updateBPS()
    }
       printScore.innerHTML = "blenders: " + format_score
    printScore_per_sec.innerHTML = "blenders per sec: " + formatInfoItemNum(bln_per_sec)
      
downloadStorage()
}


function updateBPS() {

    bln_per_sec = Number(((quantity_of_cursors * cursor_score) 
    + (quantity_of_old_blenders * old_blender_score) 
    + ((quantity_of_ps5s * ps5_score) + (quantity_of_batterys * (quantity_of_ps5s * 20)/100))    //(quantity_of_ps5s * 20)/100 это 1% от пс5
    + (quantity_of_batterys * 35)
    + ((quantity_of_dsts * 150) + (quantity_of_old_blenders * ((quantity_of_dsts * 150)/100) * 2))
    + ((quantity_of_videos * 1250) + (quantity_of_old_blenders * (quantity_of_videos * 1250)/100))
    + ((quantity_of_new_blenders * 7650))
    + ((quantity_of_computers * 42500))
    + ((quantity_of_generators * 255000))

    ) * blenders_speed)

downloadStorage()

}


document.addEventListener("visibilitychange", function () {

    if (document.hidden) {

        localStorage.setItem("lastTime", Date.now())

    } else {
        let lastTime = Number(localStorage.getItem("lastTime"))
        let now = Date.now()

        let secondsPassed = (now - lastTime) / 1000

        score += (secondsPassed * bln_per_sec) * 0.75

    localStorage.removeItem("lastTime")

        printScore.innerHTML = "blenders: " + format_score
        localStorage.setItem("score", score)
        localStorage.setItem("format_score", format_score)
    }
})



function toggleShop() {
    shop.classList.add('toggle_shop')
    toggle_button2.classList.remove('toggle_button2_show')
    toggle_button2.classList.add('toggle_button2_hide')
}

function toggleShop2() {
    shop.classList.remove('toggle_shop')
    toggle_button2.classList.add('toggle_button2_show')
    toggle_button1.classList.remove('toggle_button1_hide')
}

function formatNum(num) {
if(num >= 1e19) {
   return Number((num / 1e19).toFixed(3)) + " Qui"
}
if(num >= 1e15) {
   return Number((num / 1e15).toFixed(3)) + " Qua"
}
if(num >= 1e12) {
   return Number((num / 1e12).toFixed(3)) + " T"
}
if(num >= 1e9) {
   return Number((num / 1e9).toFixed(3)) + " B"
}
if(num >= 1e6) {
   return Number((num / 1e6).toFixed(3)) + " M"
}
if(num >= 1e3) {
   return Number((num / 1e3).toFixed(3)) + " K"
 }
 if(num < 1e3) {
   return Number((num).toFixed(0))
 }
 
}


function formatInfoItemNum(num) {

if(num >= 1e19) {
   return Number((num / 1e19).toFixed(3)) + " Qui"
}
if(num >= 1e15) {
   return Number((num / 1e15).toFixed(3)) + " Qua"
}
if(num >= 1e12) {
   return Number((num / 1e12).toFixed(3)) + " T"
}
if(num >= 1e9) {
   return Number((num / 1e9).toFixed(3)) + " B"
}
if(num >= 1e6) {
   return Number((num / 1e6).toFixed(3)) + " M"
}
if(num >= 1e3) {
   return Number((num / 1e3).toFixed(3)) + " K"
 }
 if(num < 1e3) {
   return Number((num).toFixed(1))
 }
 
}


function patch_note_visibility() {
    patch_note.classList.toggle('hide')
}


function downloadStorage(){

localStorage.setItem("score", score)
localStorage.setItem("maxScore", maxScore);
localStorage.setItem("format_score", format_score)

localStorage.setItem("cursor_price", cursor_price)
localStorage.setItem("old_blender_price", old_blender_price)
localStorage.setItem("ps5_price", ps5_price)
localStorage.setItem("battery_price", battery_price)
localStorage.setItem("dst_price", dst_price)
localStorage.setItem("video_price", video_price)
localStorage.setItem("new_blender_price", new_blender_price)
localStorage.setItem("computer_price", computer_price)
localStorage.setItem("generator_price", generator_price)


localStorage.setItem("blenders_per_sec", bln_per_sec)
localStorage.setItem("onclick_score", onclick_score)
localStorage.setItem("onclick_upgrade_function1", onclick_upgrade_function1)
localStorage.setItem("cursor_score", cursor_score)
localStorage.setItem("ps5_score", ps5_score)
localStorage.setItem("blenders_speed", blenders_speed)

localStorage.setItem("format_cursor_price", format_cursor_price)
localStorage.setItem("format_old_blender_price", format_old_blender_price)
localStorage.setItem("format_ps5_price", format_ps5_price)
localStorage.setItem("format_battery_price", format_battery_price)
localStorage.setItem("format_dst_price", format_dst_price)
localStorage.setItem("format_video_price", format_video_price)
localStorage.setItem("format_new_blender_price", format_new_blender_price)
localStorage.setItem("format_computer_price", format_computer_price)
localStorage.setItem("format_generator_price", format_generator_price)


localStorage.setItem("click_update1_remember", click_update1_remember)
localStorage.setItem("cursor_update1_remember", cursor_update1_remember)

localStorage.setItem("blenders_speed_update1_remember", blenders_speed_update1_remember)
localStorage.setItem("blenders_speed_update2_remember", blenders_speed_update2_remember)
localStorage.setItem("blenders_speed_update3_remember", blenders_speed_update3_remember)
localStorage.setItem("click_update2_remember", click_update2_remember)

localStorage.setItem("old_blender_update1_remember", old_blender_update1_remember)
localStorage.setItem("old_blender_update2_remember", old_blender_update2_remember)

localStorage.setItem("cursor_update2_remember", cursor_update2_remember)
localStorage.setItem("cursor_update3_remember", cursor_update3_remember)

localStorage.setItem("ps5_update1_remember", ps5_update1_remember)


localStorage.setItem("quantity_of_old_blenders", quantity_of_old_blenders)
localStorage.setItem("quantity_of_cursors", quantity_of_cursors)
localStorage.setItem("quantity_of_ps5s", quantity_of_ps5s)
localStorage.setItem("quantity_of_batterys", quantity_of_batterys)
localStorage.setItem("quantity_of_dsts", quantity_of_dsts)
localStorage.setItem("quantity_of_videos", quantity_of_videos)
localStorage.setItem("quantity_of_new_blenders", quantity_of_new_blenders)
localStorage.setItem("quantity_of_computers", quantity_of_computers)
localStorage.setItem("quantity_of_generators", quantity_of_generators)
}