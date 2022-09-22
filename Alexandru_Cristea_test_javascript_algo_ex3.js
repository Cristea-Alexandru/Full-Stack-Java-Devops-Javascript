//Exercise 3

    let notCorrectRow = new Array();
    let notCorrectCol = new Array();
    let notCorrectReg = new Array();

    // Point 1

function F31(){
    for(let i=0; i<verify.length; i++){
        if(!F21(verify[i])){
            notCorrectRow.push(i);
        }
    }
}

    // Point 2

function F32(){
    let alterArr = new Array(9);
    for(let i=0; i<alterArr.length; i++){
        alterArr[i] = new Array(9);
    }

    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            alterArr[i][j] = verify[j][i];
        }
    }

    for(let i=0; i<alterArr.length; i++){
        if(!F21(alterArr[i])){
            notCorrectCol.push(i);
        }
    }
}

    // Point 3

function F33(){
    let getReg = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]];
    let sudoku = new Array(9);
    for(let i=0; i<sudoku.length; i++){
        sudoku[i] = new Array(9);
    }

    for(let n=0; n<9; n++){
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                sudoku[n][i*3+j] = verify[getReg[n][0]+i][getReg[n][1]+j];
            }
        }
    }

    for(let i=0; i<sudoku.length; i++){
        if(!F21(sudoku[i])){
            notCorrectReg.push(i);
        }
    }
}

    // Point 4 

function displayAnomaly(){
    if(notCorrectRow.length > 0){
        document.write("<table border ='5'>");
    }

    if(notCorrectRow.length > 0){
        for(let i=0; i<notCorrectRow.length; i++){
            document.write("<tr><th>Line " + (notCorrectRow[i] + 1) + "</th>");
            for(let j=0; j<verify[notCorrectRow[i]].length; j++){
                document.write("<td>" + verify[notCorrectRow[i]][j] + "</td>");
            }
            document.write("</tr>");
        }
    }

    if(notCorrectCol.length > 0){
        for(let i = 0; i < notCorrectCol.length; i++){
            document.write("<tr><th>Column " + (notCorrectCol[i] + 1) + "</th>");
            for(let j = 0; j < verify[notCorrectCol[i]].length; j++){
                document.write("<td>" + verify[j][notCorrectCol[i]] + "</td>");
            }
            document.write("</tr>");
        }
    }

    let getReg = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]];
    let sudoku = new Array(9);

    for(let i = 0; i < sudoku.length; i++){
        sudoku[i] = new Array(9);
    }

    for(let n = 0; n < 9; n++){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                sudoku[n][i*3+j] = verify[getReg[n][0]+i][getReg[n][1]+j];
            }
        }
    }   

    if(notCorrectReg.length > 0){
        for(let i = 0; i < notCorrectReg.length; i++){
            document.write("<tr><th>Region " + (notCorrectReg[i] + 1) + "</th>");
            for(let j = 0; j < verify[notCorrectReg[i]].length; j++){
                document.write("<td>" + sudoku[notCorrectReg[i]][j] + "</td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");
    }else{
        document.write("<p>Table is correct</p>");
    }
}

    F31();
    F32();
    F33();
    displayAnomaly();