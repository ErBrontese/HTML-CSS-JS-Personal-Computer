let priority = 10;
function somma(a, b) {
    let risultato = a + b;
    return risultato
}

function sottrazione(a, b) {
    let risultato = a - b;
    return risultato
}


function prodotto(a, b) {
    let risultato = a * b;
    return risultato
}


function divisione(a, b) {
    let risultato = a / b;
    return risultato
}


class Shell {
    //Struttura shell   
    shell;
    //Campo in qui andremo a scrivere nella shell
    textarea;
    //Sequenze di div 
    div;


    isVisible = true;


    constructor() {
        let contenitore = document.createElement("div");
        contenitore.className = "contenitore";

        let top = document.createElement("div");
        top.className = "top";
        contenitore.appendChild(top);


        //Bottone Rosso
        let button_red = document.createElement("div");
        button_red.className = "buttonred";

        button_red.addEventListener("click", () => { this.close(this.isVisible) })
        //Contenuto bottono rosso 
        let button_red_text = document.createElement("div");
        button_red_text.className = "contenutobottonered";
        //Posizionamento contenuto bottono rosso a bottone rosso 
        button_red.appendChild(button_red_text);
        //Riempimento contenuto botttono rosso 
        button_red_text.innerHTML = "&#10006";

        //Posizionamento bottone rosso sul top della pagin 
        top.appendChild(button_red);


        //Bottone Giallo     
        let button_yellow = document.createElement("div");
        button_yellow.className = "buttonyellow";
        //Contenuto bottono rosso 
        button_yellow.addEventListener("click", () => {
            this.shell.style.width = "50%";
            this.shell.style.height = "70%";
            this.shell.style.top = "15%";
            this.shell.style.left = "30%";


        })

        //Contenuto bottone Giallo 
        let button_yellow_text = document.createElement("div");
        button_yellow_text.className = " contenutobottoneyellow";
        //Posizionamento contenuto bottone giallo a bottone giallo 
        button_yellow.appendChild(button_yellow_text);
        //Riempimento contenuto bottone giallo 
        button_yellow_text.innerHTML = "&#45";
        //Posizionamento bottone  giallo sul top della pagina     
        top.appendChild(button_yellow);


        //Bottone verde 
        let button_green = document.createElement("div");
        button_green.className = " buttongreen";
        //Contenuto bottone verde 
        button_green.addEventListener("click", () => {
            this.shell.style.width = "100%";
            this.shell.style.height = "101%";
            this.shell.style.top = "0%";
            this.shell.style.left = "0%";

        })



        let button_green_text = document.createElement("div");
        button_green_text.className = " contenutobottonegreen";
        //Posizionamento contenuto buttone verde a bottone verde
        button_green.appendChild(button_green_text);
        //Riempimento contenuto bottone verde e rottazione contenuto 
        button_green_text.innerHTML = "&harr;"
        //Posizionamento bottone verde sul top della pagina 
        top.appendChild(button_green);

        //Scritta top shell
        let scritta = document.createElement("div");
        scritta.className = "scritta";
        //Contenuto scritta top 
        scritta.textContent = "Erbrontese- zsh - home";
        //Posizionamento scritta sul top
        top.appendChild(scritta);


        let text = document.createElement("div");
        text.className = "text";
        contenitore.appendChild(text);



        this.shell = contenitore;

        this.textarea = text;

        this.div = this.funzionalita();
        this.textarea.appendChild(this.div);


        this.textarea.addEventListener("click", (e) => { this.div.focus(); this.shell.style.zIndex = ++priority; })

    }

    dragElement(elmnt) {
        console.log("dragElement: " + elmnt);
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;


        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }




    }





    funzionalita() {

        let scritta_left = document.createElement("div");
        scritta_left.textContent = "ErbronteseMacBook-Pro-di-Matteo ~ $ "
        scritta_left.className = "scritta_left"
        this.textarea.appendChild(scritta_left);


        var commando = document.createElement("div");
        commando.setAttribute("contenteditable", "true");
        commando.className = "commando";
        commando.addEventListener("keydown", (e) => { this.nuovaLinea(e) });
        setTimeout((() => { commando.focus() }), 0);

        return commando;

    }



    risposta(command) {
        let input = command.split(" ");
        let response;

        switch (input[0]) {
            case "somma":
                response = somma(parseInt(input[1]), parseInt(input[2]));

                let div = document.createElement("div");
                div.textContent = response;
                this.textarea.appendChild(div);

                break;

            case "sottrazione":
                response = sottrazione(parseInt(input[1]), parseInt(input[2]));

                let div_2 = document.createElement("div");
                div_2.textContent = response;
                this.textarea.appendChild(div_2);

                break;

            case "divisione":
                response = divisione(parseInt(input[1]), parseInt(input[2]));

                let div_3 = document.createElement("div");
                div_3.textContent = response;
                this.textarea.appendChild(div_3);

                break;

            case "prodotto":
                response = prodotto(parseInt(input[1]), parseInt(input[2]));

                let div_4 = document.createElement("div");
                div_4.textContent = response;
                this.textarea.appendChild(div_4);
                break;

            case "clear":
                while (this.textarea.lastElementChild != null) {
                    this.textarea.removeChild(this.textarea.lastElementChild);
                }
                break;

            case "google":

                let div_5 = document.createElement("div");
                div_5.textContent = "Appertura sul browser";
                window.open("https://www.google.com", "_blank");
                this.textarea.appendChild(div_5);
                break;

            case "date":

                let div_7 = document.createElement("div");
                div_7.textContent = new Date();
                div_7.style.color = "white";
                this.textarea.appendChild(div_7);
                break;


            case "help":
                let div_8 = document.createElement("div");
                div_8.innerHTML = " -Calcolatrice(somma, divisione, sottrazione, prodotto) <br> -google <br> -youtube <br> -supermario <br> -date ";
                div_8.style.color = "white";
                this.textarea.appendChild(div_8);

                break;


            case "supermario":
                let div_9 = document.createElement("div");
                window.open("https://supermario-game.com");
                div_9.textContent = "Appertura sul Browser"
                div_9.style.color = "white";
                this.textarea.appendChild(div_9);

                break;




            case "poweroff":
                let div_10 = document.createElement("div");
                div_10.textContent = "Spegnimento computer";
                div_10.style.color = "white";
                this.textarea.appendChild(div_10);
                setTimeout('window.close()', 500);
                break;


            default:
                response = "Command not found";

                let div_6 = document.createElement("div");
                div_6.textContent = response;
                this.textarea.appendChild(div_6);

                break;
        }




    }


    nuovaLinea(e) {

        if (e.code == "Enter") {
            e.preventDefault();
            let text = this.div.innerText;
            this.div.contentEditable = "false";
            this.risposta(text)
            this.div = this.funzionalita();
            this.textarea.appendChild(this.div);
        }
    }









    close(visible) {
        if (visible) {
            this.shell.style.display = "none";
            this.risposta("clear");
            this.isVisible = false;

        }
        else {
            this.shell.style.display = "block";
            this.risposta("clear");
            this.isVisible = true;
        }

    }

}






class Note {
    //Struttira shell   
    finestra;
    //Campo in qui andremo a scrivere nella shell
    textarea;
    //Sequenze di div 
    div;


    isVisible = true;


    constructor() {
        let contenitore2 = document.createElement("div");
        contenitore2.className = "contenitore2";

        let top = document.createElement("div");
        top.className = "top";
        contenitore2.appendChild(top);


        //Bottone Rosso
        let button_red = document.createElement("div");
        button_red.className = "buttonred";

        button_red.addEventListener("click", () => { this.close(this.isVisible) })
        //Contenuto bottono rosso 
        let button_red_text = document.createElement("div");
        button_red_text.className = "contenutobottonered";
        //Posizionamento contenuto bottono rosso a bottone rosso 
        button_red.appendChild(button_red_text);
        //Riempimento contenuto botttono rosso 
        button_red_text.innerHTML = "&#10006";

        //Posizionamento bottone rosso sul top della pagin 
        top.appendChild(button_red);


        //Bottone Giallo     
        let button_yellow = document.createElement("div");
        button_yellow.className = "buttonyellow";
        //Contenuto bottone Giallo 
        button_yellow.addEventListener("click", () => {
            this.window.style.width = "50%";
            this.window.style.height = "70%";
            this.window.style.top = "15%";
            this.window.style.left = "30%";


        })


        let button_yellow_text = document.createElement("div");
        button_yellow_text.className = " contenutobottoneyellow";
        //Posizionamento contenuto bottone giallo a bottone giallo 
        button_yellow.appendChild(button_yellow_text);
        //Riempimento contenuto bottone giallo 
        button_yellow_text.innerHTML = "&#45";
        //Posizionamento bottone  giallo sul top della pagina     
        top.appendChild(button_yellow);


        //Bottone verde 
        let button_green = document.createElement("div");
        button_green.className = " buttongreen";
        //Contenuto bottone verde 
        //Contenuto bottone verde 
        button_green.addEventListener("click", () => {
            this.window.style.width = "100%";
            this.window.style.height = "101%";
            this.window.style.top = "0%";
            this.window.style.left = "0%";

        })
        let button_green_text = document.createElement("div");
        button_green_text.className = " contenutobottonegreen";
        //Posizionamento contenuto buttone verde a bottone verde
        button_green.appendChild(button_green_text);
        //Riempimento contenuto bottone verde e rottazione contenuto 
        button_green_text.innerHTML = "&harr;"
        //Posizionamento bottone verde sul top della pagina 
        top.appendChild(button_green);

        //Scritta top shell
        let scritta = document.createElement("div");
        scritta.className = "scritta";
        //Contenuto scritta top 
        scritta.textContent = "Note";
        //Posizionamento scritta sul top
        top.appendChild(scritta);


        let text = document.createElement("div");
        text.className = "text_Note";
        contenitore2.appendChild(text);



        this.window = contenitore2;


        this.textarea = text;

        this.div = this.funzionalita();
        this.textarea.appendChild(this.div);


        this.textarea.addEventListener("click", (e) => { this.div.focus(); this.window.style.zIndex = ++priority; })





    }

    dragElement(elmnt) {
        console.log("dragElement: " + elmnt);
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;


        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }




    }



    funzionalita() {




        var commando = document.createElement("div");
        commando.setAttribute("contenteditable", "true");
        commando.className = "commando";

        setTimeout((() => { commando.focus() }), 0);

        return commando;

    }









    close(visible) {
        if (visible) {
            this.window.style.display = "none";
            this.isVisible = false;
        }
        else {
            this.window.style.display = "block";
            this.isVisible = true;
        }

    }

}





class Dino {
    //Struttira shell   
    finestra;
    //Campo in qui andremo a scrivere nella shell
    textarea;
    //Sequenze di div 
    div;


    isVisible = true;


    constructor() {
        let contenitore = document.createElement("div");
        contenitore.className = "contenitore";

        let top = document.createElement("div");
        top.className = "top";
        contenitore.appendChild(top);


        //Bottone Rosso
        let button_red = document.createElement("div");
        button_red.className = "buttonred";

        button_red.addEventListener("click", () => { this.close(this.isVisible) })
        //Contenuto bottono rosso 
        let button_red_text = document.createElement("div");
        button_red_text.className = "contenutobottonered";
        //Posizionamento contenuto bottono rosso a bottone rosso 
        button_red.appendChild(button_red_text);
        //Riempimento contenuto botttono rosso 
        button_red_text.innerHTML = "&#10006";

        //Posizionamento bottone rosso sul top della pagin 
        top.appendChild(button_red);


        //Bottone Giallo     
        let button_yellow = document.createElement("div");
        button_yellow.className = "buttonyellow";
        //Contenuto bottone Giallo 
        button_yellow.addEventListener("click", () => {
            this.window.style.width = "50%";
            this.window.style.height = "70%";
            this.window.style.top = "15%";
            this.window.style.left = "30%";


        })

        let button_yellow_text = document.createElement("div");
        button_yellow_text.className = " contenutobottoneyellow";
        //Posizionamento contenuto bottone giallo a bottone giallo 
        button_yellow.appendChild(button_yellow_text);
        //Riempimento contenuto bottone giallo 
        button_yellow_text.innerHTML = "&#45";
        //Posizionamento bottone  giallo sul top della pagina     
        top.appendChild(button_yellow);


        //Bottone verde 
        let button_green = document.createElement("div");
        button_green.className = " buttongreen";
        //Contenuto bottone verde
        //Contenuto bottone verde 
        button_green.addEventListener("click", () => {
            this.window.style.width = "100%";
            this.window.style.height = "101%";
            this.window.style.top = "0%";
            this.window.style.left = "0%";

        })
        let button_green_text = document.createElement("div");
        button_green_text.className = " contenutobottonegreen";
        //Posizionamento contenuto buttone verde a bottone verde
        button_green.appendChild(button_green_text);
        //Riempimento contenuto bottone verde e rottazione contenuto 
        button_green_text.innerHTML = "&harr;"
        //Posizionamento bottone verde sul top della pagina 
        top.appendChild(button_green);

        //Scritta top shell
        let scritta = document.createElement("div");
        scritta.className = "scritta";
        //Contenuto scritta top 
        scritta.textContent = "Salva il dinosauro ";
        //Posizionamento scritta sul top
        top.appendChild(scritta);


        let text = document.createElement("div");
        text.className = "text_Dino";
        contenitore.appendChild(text);



        this.window = contenitore;


        this.textarea = text;

        this.div = this.funzionalita();
        this.textarea.appendChild(this.div);

        this.textarea.addEventListener("click", (e) => { this.div.funzionalita(); this.window.style.zIndex = ++priority; })







    }

    dragElement(elmnt) {
        console.log("dragElement: " + elmnt);
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;


        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }




    }



    funzionalita() {
        var game = document.createElement("div");
        game.className = "game";
        this.textarea.appendChild(game);

        var oDiv = document.createElement('div');
        var oDiv_id = 'dino';
        oDiv.setAttribute('id', oDiv_id);
        game.appendChild(oDiv);


        var cactus = document.createElement('div');
        var cactus_id = 'cactus';
        cactus.setAttribute('id', cactus_id);
        game.appendChild(cactus);





        function jump() {
            if (dino.classList != "jump") {

                dino.classList.add("jump");

                setTimeout(function () {
                    dino.classList.remove("jump");
                }, 300);
            }
        }



        let vivo = setInterval(function () {
            var delayInMilliseconds = 15000; //1 second               //  set your counter to 1
            let punteggio = document.createElement("div");

            // Prendiamo la posizione del top  del dinosauro 
            let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

            // Prendiamo la posizione del left  del  cactus 
            let cactusLeft = parseInt(
                window.getComputedStyle(cactus).getPropertyValue("left")
            );
            //Calcolo della collisione 

            if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {

                alert("Hai perso ");
                console.log("sss");



                let msg = prompt("Vuoi rigocare ?");

                //  start the loop
                if (msg == 'si') {
                    const myTimeout = setTimeout(funzionalita(), 50000);


                } else {
                    window.location.reload(true);
                }

            } else {
                console.log("10");

            }
        }, 10);


        document.addEventListener("keydown", function (event) {

            jump();
        });




        return game;


    }



    close(visible) {
        if (visible) {
            this.window.style.display = "none";
            this.isVisible = false;
        }
        else {
            this.window.style.display = "block";
            this.isVisible = true;
        }

    }

}




class Cestino {
    //Struttira shell   
    finestra;
    //Campo in qui andremo a scrivere nella shell
    textarea;
    //Sequenze di div 
    div;


    isVisible = true;


    constructor() {
        let contenitore = document.createElement("div");
        contenitore.className = "contenitore";

        let top = document.createElement("div");
        top.className = "top";
        contenitore.appendChild(top);


        //Bottone Rosso
        let button_red = document.createElement("div");
        button_red.className = "buttonred";

        button_red.addEventListener("click", () => { this.close(this.isVisible) })
        //Contenuto bottono rosso 
        let button_red_text = document.createElement("div");
        button_red_text.className = "contenutobottonered";
        //Posizionamento contenuto bottono rosso a bottone rosso 
        button_red.appendChild(button_red_text);
        //Riempimento contenuto botttono rosso 
        button_red_text.innerHTML = "&#10006";

        //Posizionamento bottone rosso sul top della pagin 
        top.appendChild(button_red);


        //Bottone Giallo     
        let button_yellow = document.createElement("div");
        button_yellow.className = "buttonyellow";
        //Contenuto bottone Giallo
        button_yellow.addEventListener("click", () => {
            this.window.style.width = "50%";
            this.window.style.height = "70%";
            this.window.style.top = "15%";
            this.window.style.left = "30%";


        })

        let button_yellow_text = document.createElement("div");
        button_yellow_text.className = " contenutobottoneyellow";
        //Posizionamento contenuto bottone giallo a bottone giallo 
        button_yellow.appendChild(button_yellow_text);
        //Riempimento contenuto bottone giallo 
        button_yellow_text.innerHTML = "&#45";
        //Posizionamento bottone  giallo sul top della pagina     
        top.appendChild(button_yellow);


        //Bottone verde 
        let button_green = document.createElement("div");
        button_green.className = " buttongreen";
        //Contenuto bottone verde
        //Contenuto bottone verde 
        button_green.addEventListener("click", () => {
            this.window.style.width = "100%";
            this.window.style.height = "101%";
            this.window.style.top = "0%";
            this.window.style.left = "0%";

        })
        let button_green_text = document.createElement("div");
        button_green_text.className = " contenutobottonegreen";
        //Posizionamento contenuto buttone verde a bottone verde
        button_green.appendChild(button_green_text);
        //Riempimento contenuto bottone verde e rottazione contenuto 
        button_green_text.innerHTML = "&harr;"
        //Posizionamento bottone verde sul top della pagina 
        top.appendChild(button_green);

        //Scritta top shell
        let scritta = document.createElement("div");
        scritta.className = "scritta";
        //Contenuto scritta top 
        scritta.textContent = "Cestino";
        //Posizionamento scritta sul top
        top.appendChild(scritta);


        let text = document.createElement("div");
        text.className = "text_Cestino";
        contenitore.appendChild(text);



        this.window = contenitore;


        this.textarea = text;

        this.div = this.funzionalita();
        this.textarea.appendChild(this.div);

        this.textarea.addEventListener("click", (e) => { this.div.funzionalita(); this.window.style.zIndex = ++priority; })







    }

    dragElement(elmnt) {
        console.log("dragElement: " + elmnt);
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;


        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }




    }



    funzionalita() {
        var window = document.createElement("div");

        this.textarea.appendChild(window);


        var file1 = document.createElement("div");
        file1.className = "file1";
        window.appendChild(file1);

        var text1 = document.createElement("div");
        text1.className = "text1";
        text1.textContent = "Sistemi Operativi";
        window.appendChild(text1);


        var file2 = document.createElement("div");
        file2.className = "file2";
        window.appendChild(file2);


        var text2 = document.createElement("div");
        text2.className = "text2";
        text2.textContent = "ItLaw";
        window.appendChild(text2);




        var file3 = document.createElement("div");
        file3.className = "file3";
        window.appendChild(file3);

        var text3 = document.createElement("div");
        text3.className = "text3";
        text3.textContent = "Fisica";
        window.appendChild(text3);





        var file4 = document.createElement("div");
        file4.className = "file4";
        window.appendChild(file4);



        var text4 = document.createElement("div");
        text4.className = "text4";
        text4.textContent = "CSS";
        window.appendChild(text4);



        var file5 = document.createElement("div");
        file5.className = "file5";
        window.appendChild(file5);


        var text5 = document.createElement("div");
        text5.className = "text5";
        text5.textContent = "CSS";
        window.appendChild(text5);




        var file6 = document.createElement("div");
        file6.className = "file6";
        window.appendChild(file6);


        var text6 = document.createElement("div");
        text6.className = "text6";
        text6.textContent = "HTML";
        window.appendChild(text6);




        var file7 = document.createElement("div");
        file7.className = "file7";
        window.appendChild(file7);


        var file8 = document.createElement("div");
        file8.className = "file8";
        window.appendChild(file8);



        var file9 = document.createElement("div");
        file9.className = "file9";
        window.appendChild(file9);





        var file10 = document.createElement("div");
        file10.className = "file10";
        window.appendChild(file10);



        var text10 = document.createElement("div");
        text10.className = "text10";
        text10.textContent = "Analisi";
        window.appendChild(text10);







        var file11 = document.createElement("div");
        file11.className = "file11";
        window.appendChild(file11);


        var text11 = document.createElement("div");
        text11.className = "text11";
        text11.textContent = "Analisi";
        window.appendChild(text11);




        var file12 = document.createElement("div");
        file12.className = "file12";
        window.appendChild(file12);












        return window;


    }



    close(visible) {
        if (visible) {
            this.window.style.display = "none";
            this.isVisible = false;
        }
        else {
            this.window.style.display = "block";
            this.isVisible = true;
        }

    }

}



function createShell() {
    let myShell = new Shell();
    document.body.appendChild(myShell.shell);
    myShell.dragElement(myShell.shell);
}


function createNote() {
    let myNote = new Note();
    document.body.appendChild(myNote.window);
    myNote.dragElement(myNote.window);
}


function createDino() {
    let myDino = new Dino();
    document.body.appendChild(myDino.window);
    myDino.dragElement(myDino.window);
}


function poweroff() {
    setTimeout("window.close()", 500);



}
function createCestino() {

    let myCestino = new Cestino();
    document.body.appendChild(myCestino.window);
    myCestino.dragElement(myCestino.window);
}






class Galleria {
    //Struttira shell   
    finestra;
    //Campo in qui andremo a scrivere nella shell
    textarea;
    //Sequenze di div 
    div;


    isVisible = true;


    constructor() {
        let contenitore = document.createElement("div");
        contenitore.className = "contenitore";

        let top = document.createElement("div");
        top.className = "top";
        contenitore.appendChild(top);


        //Bottone Rosso
        let button_red = document.createElement("div");
        button_red.className = "buttonred";

        button_red.addEventListener("click", () => { this.close(this.isVisible) })
        //Contenuto bottono rosso 
        let button_red_text = document.createElement("div");
        button_red_text.className = "contenutobottonered";
        //Posizionamento contenuto bottono rosso a bottone rosso 
        button_red.appendChild(button_red_text);
        //Riempimento contenuto botttono rosso 
        button_red_text.innerHTML = "&#10006";

        //Posizionamento bottone rosso sul top della pagin 
        top.appendChild(button_red);


        //Bottone Giallo     
        let button_yellow = document.createElement("div");
        button_yellow.className = "buttonyellow";
        //Contenuto bottone Giallo
        button_yellow.addEventListener("click", () => {
            this.window.style.width = "50%";
            this.window.style.height = "70%";
            this.window.style.top = "15%";
            this.window.style.left = "30%";


        })

        let button_yellow_text = document.createElement("div");
        button_yellow_text.className = " contenutobottoneyellow";
        //Posizionamento contenuto bottone giallo a bottone giallo 
        button_yellow.appendChild(button_yellow_text);
        //Riempimento contenuto bottone giallo 
        button_yellow_text.innerHTML = "&#45";
        //Posizionamento bottone  giallo sul top della pagina     
        top.appendChild(button_yellow);


        //Bottone verde 
        let button_green = document.createElement("div");
        button_green.className = " buttongreen";
        //Contenuto bottone verde
        //Contenuto bottone verde 
        button_green.addEventListener("click", () => {
            this.window.style.width = "100%";
            this.window.style.height = "101%";
            this.window.style.top = "0%";
            this.window.style.left = "0%";

        })
        let button_green_text = document.createElement("div");
        button_green_text.className = " contenutobottonegreen";
        //Posizionamento contenuto buttone verde a bottone verde
        button_green.appendChild(button_green_text);
        //Riempimento contenuto bottone verde e rottazione contenuto 
        button_green_text.innerHTML = "&harr;"
        //Posizionamento bottone verde sul top della pagina 
        top.appendChild(button_green);

        //Scritta top shell
        let scritta = document.createElement("div");
        scritta.className = "scritta";
        //Contenuto scritta top 
        scritta.textContent = "Galleria";
        //Posizionamento scritta sul top
        top.appendChild(scritta);


        let text = document.createElement("div");
        text.className = "text_Cestino";
        contenitore.appendChild(text);



        this.window = contenitore;


        this.textarea = text;

        this.div = this.funzionalita();
        this.textarea.appendChild(this.div);

        this.textarea.addEventListener("click", (e) => { this.div.focus(); this.window.style.zIndex = ++priority; })









    }

    dragElement(elmnt) {
        console.log("dragElement: " + elmnt);
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;


        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }




    }



    funzionalita() {
        

        function conteggio(){
            var valore=count;

          
              valore=valore+1;
              console.log("ck");
              return count;
          }

      

       


        var window = document.createElement("div");
        this.textarea.appendChild(window);


        let pulsante = document.createElement("button");
        pulsante.className = "pulsante";
        pulsante.innerHTML = "Avanti";
        window.appendChild(pulsante);
        
        var somma=0;
        pulsante.onclick = function () {
            somma++;
            
             

             if(somma==1){
                 console.log("aaa");
             }else if(somma==2){
                 var foto2 = document.createElement("div");
                 foto2.className = "foto2";
                 window.appendChild(foto2);
                 console.log("bbb");
             }else if(somma==3){
                window.removeChild(window.lastChild);
               
   
                 console.log("ccc");
             }else if(somma==4){
                 console.log("ddd");
             }else if(somma==5){
                 console.log("eee");
             }else if(somma==6){
                 somma=0;
             }
     return window;

        }
         


/*


             if(count==1){
               
   
   
            } else if (count == 2) {
                window.removeChild(window.firstChild);
   
   
                var foto2 = document.createElement("div");
                foto2.className = "foto2";
                window.appendChild(foto2);
            } else if (count == 3) {
   
                window.removeChild(window.firstChild);
   
   
                var foto3 = document.createElement("div");
                foto3.className = "foto3";
                window.appendChild(foto3);
   
            } else if (count == 4) {
                window.removeChild(window.firstChild);
   
   
                var foto4 = document.createElement("div");
                foto4.className = "foto4";
                window.appendChild(foto4);
   
            } else if (count == 5) {
                window.removeChild(window.firstChild);
   
   
                var foto5 = document.createElement("div");
                foto5.className = "foto5";
                window.appendChild(foto5);
   
   
            } else {
                window.removeChild(window.firstChild);
                count = 0;
            }
   
   
            return window;
              
             };

*/










        return window;


    }



    close(visible) {
        if (visible) {
            this.window.style.display = "none";
            this.isVisible = false;
        }
        else {
            this.window.style.display = "block";
            this.isVisible = true;
        }

    }

}

function createGalleria() {

    let myGalleria = new Galleria();
    document.body.appendChild(myGalleria.window);
    myGalleria.dragElement(myGalleria.window);


}




