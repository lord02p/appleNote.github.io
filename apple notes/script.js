var main_conteinar = document.querySelector('.note_container');
var input_value = '';
var textarea_value = '';

function note_container() {
    main_conteinar.innerHTML = `
   <div class="notes_container">
   <div class="padding_con">

       <div class="back_bar">
           <div onclick="folder_container()">
               <img src="./images/ic_back_arrow.png" alt="" >
               <p>Folders</p>
           </div>
           <img src="./images/ic_options.png" alt="">
       </div>

       <div class="page_name m-t">
           <h2>All Notes</h2>
           <div>
               <img src="./images/ic_search.png" alt="">
               <input type="text" id="input" placeholder="Search">
           </div>
       </div>
       <p id ="notes-name">Notes</p>
        <div id ="final_input_result"></div>

   </div>


   <div class="bottom_bar">
       <p>2 notes</p>
       <img src="./images/add_note.png" id="add_note" alt="" onclick="note_edit_container()">
   </div>
</div>
   `;




    for (let index = 1; index <= localStorage.length; index++) {
        if (localStorage[`note-12-15-18-4-${index}`]) {
            var sp = localStorage[`note-12-15-18-4-${index}`];
            var fsp = sp.split('>')
            console.log(fsp);
            var div = document.createElement('div');
            div.classList.add('notes_bar');
            var h4 = document.createElement('h4');
            h4.innerText = fsp[0];
            div.append(h4);
            var p = document.createElement('p');
            p.innerText = fsp[1]
            div.append(p);
            var anp = document.createElement('p');
            anp.innerText = fsp[2]
            div.append(anp)
            document.querySelector('#final_input_result').append(div)

            div.addEventListener('click', (e) => {
                note_edit_container();
                setTimeout(() => {
                    document.getElementById('note_input').value = fsp[0];
                    document.getElementById('textarea').value = fsp[1];
                    // console.log(e);
                }, 200);
            })
        } else {}


    }

}

function folder_container() {
    main_conteinar.innerHTML = `
    <div class="folder_container">
    <div class="padding_con">
        <div class="page_name ">
            <h2>Folders</h2>
        </div>
        <div class=" m-t bar b-r-t " onclick="note_container()">
            <div>
                <img src="./images/add_note.png" alt="">
                <p>All Notes</p>
            </div>
            <img src="./images/arr.png" class="size" alt="">
        </div>

        <div class="bar s-m-t">
            <div>
                <img src="./images/pin.png" alt="">
                <p>Printed</p>
            </div>
            <img src="./images/arr.png" class="size" alt="">
        </div>


        <div class="bar s-m-t b-r-b">
            <div>
                <img src="./images/ic_settings.png" alt="">
                <p>Settings</p>
            </div>
            <img src="./images/arr.png" class="size" alt="">
        </div>
    </div>


    <div class="bottom_bar">
        <img src="./images/add_note.png" alt="">
    </div>
</div>
    `;
}

function note_edit_container() {
    main_conteinar.innerHTML = `
    
    <div class="edit_note_container bg-white">
    <div class="padding_con">

        <div class="back_bar">
            <div class="left-box">
                <img src="./images/ic_back_arrow.png" alt="">
                <p>Folders</p>
            </div>
            <p onclick="save_note()">Done</p>
        </div>
        <div class="date_time">
            <p>13 May 2022, 21:43</p>
        </div>

        <div class="inputs_con">
            <input id ="note_input" type="text" placeholder="Note Title">
            <textarea id ="textarea" placeholder="Note Text"></textarea>
        </div>
    </div>
</div>

`;


}


var num = localStorage.length;

function save_note() {
    var b = ++num;
    num = b;
    setTimeout(() => {
        note_container();
    }, 200);

    input_value = document.getElementById('note_input').value;
    textarea_value = document.getElementById('textarea').value;

    var date = new Date;
    localStorage.setItem(`note-12-15-18-4-${num}`, `${input_value} > ${textarea_value} > ${date.toLocaleString()}`)






}