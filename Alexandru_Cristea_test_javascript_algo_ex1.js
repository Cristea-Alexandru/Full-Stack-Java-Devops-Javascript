//Exercise 1

    // Point 1

    /*
    function to_verify(){
        let verify = new Array(9);
        for(let i=0; i<9; i++){
            verify[i] = new Array(9);
        }
    }
    */

    let verify = new Array(9);
    for(let i=0; i<9; i++){
        verify[i] = new Array(9);
    }

    // Point 2

function F11(){
    for(let n=0; n<9; n++){
        for(let m=0; m<9; m++){
            verify[n][m] = array_number[n].split(" ")[m];
        }
    }
}

    // Point 3

function F12(){
    document.write("<h1> Sudoku </h1><br><br>");
    document.write("<table border = '5'>");
    for(let i=0; i<verify.length; i++){
        document.write("<tr>");
        for(let j=0; j<verify[i].length; j++){
            document.write("<td>" + verify[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table> <br><hr><br>");
}
//to_verify();
F11();
F12();