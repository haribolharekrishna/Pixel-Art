// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

document.getElementById('btn').addEventListener('click',makeGrid);
document.getElementById('clrbtn').addEventListener('click',changecolor);
let col;
function changecolor()
{
    col = document.getElementById('colorPicker').value;
}

function makeGrid() {

// Your code goes here!
        event.preventDefault();
        let tb1 = document.createElement('table');
        let tb1body = document.createElement('tbody');
        let h = document.getElementById('inputHeight').value;
        let w = document.getElementById('inputWidth').value;
        col = document.getElementById('colorPicker').value;
        for(let i = 0; i < h; i++)
        {
            let row = document.createElement('tr');
            for(let j = 0; j < w; j++)
            {
                let cell = document.createElement('td');
                cell.addEventListener('click',function(e)
                {
                    cell.style.backgroundColor = col;
                });
                row.appendChild(cell);
            }
            tb1body.appendChild(row);
        }
        tb1.appendChild(tb1body);
        document.body.appendChild(tb1);
}
