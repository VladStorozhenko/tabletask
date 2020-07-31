/**
 * Table task 
 * Vladislav Storozhenko
*/

// response to get from the server (hard coded for demonstrational purposes)
let response = [
    {
      id: "Идентификатор",
      name: "Название",
      price: "Стоимость",
      quantity: "Количество",
    },
    [1, "iPhone 5", "400", 5],
    [2, "XBOX", "300", 7],
    [3, "Play Station 4", "300", 7],
    [4, "iPad Air 2", "400", 5],
    [5, "Samsung Galaxy s6", "300", 7],
    [6, "Nvidia Shield", "300", 7],
    [7, "iPhone 4", "400", 5],
    [8, "iPhone 6", "300", 7],
    [9, "XBOX", "300", 7],
    [10, "iPhone 5", "400", 5],
    [11, "XBOX", "300", 7],
    [12, "XBOX", "300", 7],
    [13, "Play Station 4", "300", 7],
    [14, "iPad Air 2", "400", 5],
    [15, "Samsung Galaxy s6", "300", 7],
    [16, "Nvidia Shield", "300", 7],
    [17, "iPhone 4", "400", 5],
    [18, "iPhone 6", "300", 7],
    [19, "XBOX", "300", 7],
    [20, "iPhone 5", "400", 5],
    [21, "XBOX", "300", 7],
    [22, "XBOX", "300", 7],
    [23, "Play Station 4", "300", 7],
    [24, "iPad Air 2", "400", 5],
    [25, "Samsung Galaxy s6", "300", 7],
    [26, "Nvidia Shield", "300", 7],
    [27, "iPhone 4", "400", 5],
    [28, "iPhone 6", "300", 7],
    [29, "XBOX", "300", 7],
    [30, "iPhone 5", "400", 5],
    [31, "XBOX", "300", 7],
    [32, "XBOX", "300", 7],
    [33, "Play Station 4", "300", 7],
    [34, "iPad Air 2", "400", 5],
    [35, "Samsung Galaxy s6", "300", 7],
    [36, "Nvidia Shield", "300", 7],
    [37, "iPhone 4", "400", 5],
    [38, "iPhone 6", "300", 7],
    [39, "XBOX", "300", 7],
    [40, "iPhone 5", "400", 5],
    [41, "XBOX", "300", 7],
    [42, "XBOX", "300", 7],
    [43, "Play Station 4", "300", 7],
    [44, "iPad Air 2", "400", 5],
    [45, "Samsung Galaxy s6", "300", 7],
    [46, "Nvidia Shield", "300", 7],
    [47, "iPhone 4", "400", 5],
    [48, "iPhone 6", "300", 7],
    [49, "XBOX", "300", 7],
    [50, "iPhone 5", "400", 5],
    [51, "XBOX", "300", 7],
    [52, "XBOX", "300", 7],
    [53, "iPhone 5", "400", 5],
    [54, "XBOX", "300", 7],
    [55, "Play Station 4", "300", 7],
    [56, "iPad Air 2", "400", 5],
    [57, "Samsung Galaxy s6", "300", 7],
    [58, "Nvidia Shield", "300", 7],
    [59, "iPhone 4", "400", 5],
    [60, "iPhone 6", "300", 7],
    [61, "XBOX", "300", 7],
    [62, "iPhone 5", "400", 5],
    [63, "XBOX", "300", 7],
    [64, "XBOX", "300", 7],
    [65, "Play Station 4", "300", 7],
    [66, "iPad Air 2", "400", 5],
    [67, "Samsung Galaxy s6", "300", 7],
    [68, "Nvidia Shield", "300", 7],
    [69, "iPhone 4", "400", 5],
    [70, "iPhone 6", "300", 7],
    [71, "XBOX", "300", 7],
    [72, "iPhone 5", "400", 5],
    [73, "XBOX", "300", 7],
    [74, "XBOX", "300", 7],
    [75, "Play Station 4", "300", 7],
    [76, "iPad Air 2", "400", 5],
    [77, "Samsung Galaxy s6", "300", 7],
    [78, "Nvidia Shield", "300", 7],
    [79, "iPhone 4", "400", 5],
    [80, "iPhone 6", "300", 7],
    [81, "XBOX", "300", 7],
    [82, "iPhone 5", "400", 5],
    [83, "XBOX", "300", 7],
    [84, "XBOX", "300", 7],
    [85, "Play Station 4", "300", 7],
    [86, "iPad Air 2", "400", 5],
    [87, "Samsung Galaxy s6", "300", 7],
    [88, "Nvidia Shield", "300", 7],
    [89, "iPhone 4", "400", 5],
    [90, "iPhone 6", "300", 7],
    [91, "XBOX", "300", 7],
    [92, "iPhone 5", "400", 5],
    [93, "XBOX", "300", 7],
    [94, "XBOX", "300", 7],
    [95, "Play Station 4", "300", 7],
    [96, "iPad Air 2", "400", 5],
    [97, "Samsung Galaxy s6", "300", 7],
    [98, "Nvidia Shield", "300", 7],
    [99, "iPhone 4", "400", 5],
    [100, "iPhone 6", "300", 7],
    [101, "XBOX", "300", 7],
    [102, "iPhone 5", "400", 5],
    [103, "XBOX", "300", 7],
    [104, "XBOX", "300", 7],
    [105, "iPhone 5", "400", 5],
    [106, "XBOX", "300", 7],
    [107, "Play Station 4", "300", 7],
    [108, "iPad Air 2", "400", 5],
    [109, "Samsung Galaxy s6", "300", 7],
    [110, "Nvidia Shield", "300", 7],
    [111, "iPhone 4", "400", 5],
    [112, "iPhone 6", "300", 7],
    [113, "XBOX", "300", 7],
    [114, "iPhone 5", "400", 5],
    [115, "XBOX", "300", 7],
    [116, "XBOX", "300", 7],
    [117, "Play Station 4", "300", 7],
    [118, "iPad Air 2", "400", 5],
    [119, "Samsung Galaxy s6", "300", 7],
    [120, "Nvidia Shield", "300", 7],
    [121, "iPhone 4", "400", 5],
    [122, "iPhone 6", "300", 7],
    [123, "XBOX", "300", 7],
    [224, "iPhone 5", "400", 5],
    [225, "XBOX", "300", 7],
    [226, "XBOX", "300", 7],
    [227, "Play Station 4", "300", 7],
    [228, "iPad Air 2", "400", 5],
    [229, "Samsung Galaxy s6", "300", 7],
    [230, "Nvidia Shield", "300", 7],
    [231, "iPhone 4", "400", 5],
    [232, "iPhone 6", "300", 7],
    [233, "XBOX", "300", 7],
    [234, "iPhone 5", "400", 5],
    [235, "XBOX", "300", 7],
    [236, "XBOX", "300", 7],
    [237, "Play Station 4", "300", 7],
    [238, "iPad Air 2", "400", 5],
    [239, "Samsung Galaxy s6", "300", 7],
    [240, "Nvidia Shield", "300", 7],
    [241, "iPhone 4", "400", 5],
    [242, "iPhone 6", "300", 7],
    [243, "XBOX", "300", 7],
    [244, "iPhone 5", "400", 5],
    [245, "XBOX", "300", 7],
    [246, "XBOX", "300", 7],
    [247, "Play Station 4", "300", 7],
    [248, "iPad Air 2", "400", 5],
    [249, "Samsung Galaxy s6", "300", 7],
    [250, "Nvidia Shield", "300", 7],
    [251, "iPhone 4", "400", 5],
    [252, "iPhone 6", "300", 7],
    [253, "XBOX", "300", 7],
    [254, "iPhone 5", "400", 5],
    [255, "XBOX", "300", 7],
    [256, "XBOX", "300", 7],
    [257, "iPhone 5", "400", 5],
    [258, "XBOX", "300", 7],
    [259, "Play Station 4", "300", 7],
    [260, "iPad Air 2", "400", 5],
    [261, "Samsung Galaxy s6", "300", 7],
    [262, "Nvidia Shield", "300", 7],
    [263, "iPhone 4", "400", 5],
    [264, "iPhone 6", "300", 7],
    [265, "XBOX", "300", 7],
    [266, "iPhone 5", "400", 5],
    [267, "XBOX", "300", 7],
    [268, "XBOX", "300", 7],
    [269, "Play Station 4", "300", 7],
    [270, "iPad Air 2", "400", 5],
    [271, "Samsung Galaxy s6", "300", 7],
    [272, "Nvidia Shield", "300", 7],
    [273, "iPhone 4", "400", 5],
    [274, "iPhone 6", "300", 7],
    [275, "XBOX", "300", 7],
    [276, "iPhone 5", "400", 5],
    [277, "XBOX", "300", 7],
    [278, "XBOX", "300", 7],
    [279, "Play Station 4", "300", 7],
    [280, "iPad Air 2", "400", 5],
    [281, "Samsung Galaxy s6", "300", 7],
    [282, "Nvidia Shield", "300", 7],
    [283, "iPhone 4", "400", 5],
    [284, "iPhone 6", "300", 7],
    [285, "XBOX", "300", 7],
    [286, "iPhone 5", "400", 5],
    [287, "XBOX", "300", 7],
    [288, "XBOX", "300", 7],
    [289, "Play Station 4", "300", 7],
    [290, "iPad Air 2", "400", 5],
    [291, "Samsung Galaxy s6", "300", 7],
    [292, "Nvidia Shield", "300", 7],
    [293, "iPhone 4", "400", 5],
    [294, "iPhone 6", "300", 7],
    [295, "XBOX", "300", 7],
    [296, "iPhone 5", "400", 5],
    [297, "XBOX", "300", 7],
    [298, "XBOX", "300", 7],
    [299, "Play Station 4", "300", 7],
    [300, "iPad Air 2", "400", 5],
    [301, "Samsung Galaxy s6", "300", 7],
    [302, "Nvidia Shield", "300", 7],
    [303, "iPhone 4", "400", 5],
    [304, "iPhone 6", "300", 7],
    [305, "XBOX", "300", 7],
    [306, "iPhone 5", "400", 5],
    [307, "XBOX", "300", 7],
    [308, "XBOX", "300", 7],
    [309, "iPhone 5", "400", 5],
    [310, "XBOX", "300", 7],
    [311, "Play Station 4", "300", 7],
    [312, "iPad Air 2", "400", 5],
    [313, "Samsung Galaxy s6", "300", 7],
    [314, "Nvidia Shield", "300", 7],
    [315, "iPhone 4", "400", 5],
    [316, "iPhone 6", "300", 7],
    [317, "XBOX", "300", 7],
    [318, "iPhone 5", "400", 5],
    [319, "XBOX", "300", 7],
    [320, "XBOX", "300", 7],
    [321, "Play Station 4", "300", 7],
    [322, "iPad Air 2", "400", 5],
    [323, "Samsung Galaxy s6", "300", 7],
    [324, "Nvidia Shield", "300", 7],
    [325, "iPhone 4", "400", 5],
    [326, "iPhone 6", "300", 7],
    [327, "XBOX", "300", 7],
    [328, "iPhone 5", "400", 5],
    [329, "XBOX", "300", 7],
    [330, "XBOX", "300", 7],
    [331, "Play Station 4", "300", 7],
    [332, "iPad Air 2", "400", 5],
    [333, "Samsung Galaxy s6", "300", 7],
    [334, "Nvidia Shield", "300", 7],
    [335, "iPhone 4", "400", 5],
    [336, "iPhone 6", "300", 7],
    [337, "XBOX", "300", 7],
    [338, "iPhone 5", "400", 5],
    [339, "XBOX", "300", 7],
    [340, "XBOX", "300", 7],
    [341, "Play Station 4", "300", 7],
    [342, "iPad Air 2", "400", 5],
    [343, "Samsung Galaxy s6", "300", 7],
    [344, "Nvidia Shield", "300", 7],
    [345, "iPhone 4", "400", 5],
    [346, "iPhone 6", "300", 7],
    [347, "XBOX", "300", 7],
    [348, "iPhone 5", "400", 5],
    [349, "XBOX", "300", 7],
    [350, "XBOX", "300", 7],
    [351, "Play Station 4", "300", 7],
    [352, "iPad Air 2", "400", 5],
    [353, "Samsung Galaxy s6", "300", 7],
    [354, "Nvidia Shield", "300", 7],
    [355, "iPhone 4", "400", 5],
    [356, "iPhone 6", "300", 7],
    [357, "XBOX", "300", 7],
    [358, "iPhone 5", "400", 5],
    [359, "XBOX", "300", 7],
    [360, "XBOX", "300", 7],
  ];
  
// ! handle response
  
const names = response[0]; // table structure
  
let tableHeaders = Object.values(names); // talbe columns 
let tableHeaderKeys = Object.keys(names); // table columns ids
let tableCounter = 0; // count how many tables were created
  
const data = response.slice(1).map((val) => {
    const obj = JSON.parse(JSON.stringify(names));
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = val[i];
    }
    return obj;
}); // get the data 

let dataArray = Array.from(data); // array of all data 
let currentPage = 0; // current page in the table
let dataSets; // sets of data to display per page 
let chunk = 1; // number of table rows to display per page
const tablesContainer = document.getElementById('tables'); // element to append all table to
const addTableButton = document.getElementById('add-table'); // button to add a table 

addTableButton.addEventListener('click', addTable);

/**
 * @param {id of table-to-create} id 
 */
function createTable(id) {
    // add table headers
    let tableHeaderHTML = ""; // reset table headers 
    tableHeaders.map((tableHeader) => {
        let th = `<th id='table-header-${id}'>${tableHeader}</th>`;
    
        tableHeaderHTML += th;
    });
    // return bare table template
    return `
    <div id='wrapper-${id}' class='wrapper'>
        <div>
            Choose how much data to show
            <br>
            <label>
                <input type='radio' name='dataPerPage-${id}' value='big' id='data-select-${id}' onclick='getChunk(${id})'>
                Big
            </label>
            <label>
                <input type='radio' name='dataPerPage-${id}' value='small' id='data-select-${id}' onclick='getChunk(${id})'>
                Small 
            </label>
            <label>
                <input type='radio' name='dataPerPage-${id}' value='custom' id='data-select' onclick='getChunk(${id})'>
                Custom
                <input type='number' name='dataPerPageCustom-${id}' id='custom-number-${id}' min='1' max='50' placeholder='number' required> 
            </label>
        </div>
        <input type='text' placeholder='Search in table' id='search-${id}'>
        <table class='table-sortable' id='table-${id}'>
            <thead>
                ${tableHeaderHTML}
            </thead>
            <tbody></tbody>
        </table>
        <div id='pagination-${id}'></div>
        <table class='selected' id='selected-${id}'>
            <thead>
                ${tableHeaderHTML}
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
    `
}
/**
 * Function that adds a table to the document and increases tableCounter variable
 * Enables sort in the table 
 * Enables search in the table  
 */
function addTable() {
    tableCounter++;
    tablesContainer.innerHTML += createTable(tableCounter);
    enableSort();
    enableSearch(tableCounter);
}
/**
 * Function that displays first chunk of data
 * @param {id of table to display info in} id 
 * @param {data to display, by default - default data array} data 
 */
function getChunk(id, data = dataArray) {
    document.querySelectorAll(`input[name='dataPerPage-${id}']`).forEach (input => {
        if (input.checked && input.value == 'big') {
            chunk = 20;
            populateTable(id, chunk, currentPage, data);
        }
        if (input.checked && input.value == 'small') {
            chunk = 10;
            populateTable(id, chunk, currentPage, data);
        }
        if (input.checked && input.value == 'custom') {
            populateTable(id, chunk, currentPage, data);

            let customNumberInput = document.getElementById(`custom-number-${id}`);
            customNumberInput.value = 1;
            customNumberInput.focus();
            customNumberInput.addEventListener('input', () => {
            chunk = customNumberInput.value;
                if (chunk > 50) {
                    chunk = 50;
                }
                if (!customNumberInput.value) {
                    chunk = 1;
                }
                chunk = +chunk;
                populateTable(id, chunk, currentPage, data);
            });
        }
    })
}

/**
 * 
 * @param {Id of table to populate with data} tableId 
 * @param {how much data to display per page} chunk 
 * @param {which page to display} page 
 * @param {data to slice (function sliceData) and show} dataSet 
 */
function populateTable(tableId, chunk, page, dataSet = dataArray) {
    currentPage = page; // assing currentPage to page 
    table = document.getElementById(`table-${tableId}`); // current table to populate
    /**
     * slice data for user
     */
    function sliceData() {
        dataSets = [];
        for (let i = 0; i < dataSet.length; i += chunk) {
            dataSets.push(dataSet.slice(i, i + chunk));
        }
    }

    sliceData();

    // Show data

    table.tBodies[0].innerHTML = ""; // reset table
    if (dataSets[page]) { // show current page 
    dataSets[page].forEach((item) => {
        let tr = document.createElement("tr");
        tr.className = "table-row";
        tableHeaderKeys.map((tableHeader) => {
        tr.innerHTML += `<td>${item[tableHeader]}</td>`;
        });
        tr.addEventListener("click", () => {
            displaySelected(tableId);
        });
        table.tBodies[0].appendChild(tr);
    });
    } else if(dataSets[0]) { // if there is no current page try to show first page 
        dataSets[0].forEach((item) => {
            let tr = document.createElement("tr");
            tr.className = "table-row";
            tableHeaderKeys.map((tableHeader) => {
            tr.innerHTML += `<td>${item[tableHeader]}</td>`;
            });
            tr.addEventListener("click", () => {
                displaySelected(tableId);
            });
            table.tBodies[0].appendChild(tr);
        });
    } else { // if there is no data to show
        table.tBodies[0].innerHTML = "No matching data";
    }
    addPagination(tableId, dataSets.length, chunk, page); // initiate pagination 
    enableDisplaySelected(tableCounter); // initiate display of selected table row
}
/**
 * 
 * @param {id of table to add pagination to} id 
 * @param {number of pages for pagination} length 
 * @param {how many rows to show per page} chunk 
 * @param {current page} page 
 */
function addPagination(id, length, chunk, page) {
    let searchInput = document.getElementById(`search-${id}`); // search input for search function 
    let paginationBlock = document.getElementById(`pagination-${id}`); // pagination block to populate with pagination buttons
    paginationBlock.className = 'pagination-block'; // add class name 

    if (paginationBlock.querySelectorAll(".pagination-button")) { // remove all pagination buttons if present
        paginationBlock
          .querySelectorAll(".pagination-button")
          .forEach((item) => item.remove());
      }

    let back = document.createElement('button'); // back button
    back.className = 'pagination-button';
    back.innerText = '<';

    back.addEventListener('click', () => { // back button function
        if (page > 0) {
            page--;
            currentPage--;
            if (searchInput.value) { // respect the searched table
                searchTable(id, dataArray);
            } else {
                populateTable(id, chunk, page);
            }
        }
    })

    paginationBlock.appendChild(back); // add back button to pagination

    for (let i = 0; i < length; i++) { // create pagination buttons
        let paginationButton = document.createElement('button');
        paginationButton.innerText = i + 1;
        paginationButton.id = `pagination-${id}-button-${i}`;

        if (currentPage == i) { // active button 
            paginationButton.className = 'pagination-button active';
        } else {
            paginationButton.className = 'pagination-button';
        }

        paginationButton.addEventListener('click', () => { // pagination buttons' function 
            if (searchInput.value) { // if table is searched - respect the search
                currentPage = i;
                searchTable(id, dataArray)
            } else {
                populateTable(id, chunk, i);
            }
        });

        if(page - 2 == i || page - 1 == i || page == i || page + 1 == i || page + 2 == i) { // only show buttons for closest pages 
            paginationBlock.appendChild(paginationButton);
        }

    }

    let forward = document.createElement('button'); // forward button
    forward.className = 'pagination-button';
    forward.innerText = '>';

    forward.addEventListener('click', () => { // forward button function 
        if (page + 1 < length) {
            page++;
            currentPage++;
            if(searchInput.value) { // respect the searched table
                searchTable(id, dataArray);
            } else {
                populateTable(id, chunk, page);
            }
        }
    });

    paginationBlock.appendChild(forward); // add forward button to pagination 
}
/**
 * 
 * @param {id of the table to sort} id 
 * @param {which table column to sort} column 
 * @param {order of sort - ascending or descending (ascending by default)} asc 
 */  
function sortTableByColumn(id, column, asc = true) {
    let order = asc ? "asc" : "desc"; // order of sort
    let dataToSort = dataArray; // for clarity's sake 
    let columnToSort;
    columnToSort = tableHeaderKeys[column];
    let table = document.getElementById(`table-${id}`);
    let thead = table.tHead;
    let sortedData = dataToSort.sort(compareValues(columnToSort));
    // sorting is done by adding and removing css classes to table headers
    thead.querySelectorAll("th").forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
    thead.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
    thead.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);
    /**
     * Comparing function, can compare any data types
     * @param {which column to sort} key 
     */
    function compareValues(key) {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0;
        }
        // check if it's sorting string or number
        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
      };
    }
    let searchInput = document.getElementById(`search-${id}`); // search input for search function 

    if (searchInput.value) { // respect searched table
      searchTable(id, sortedData);
    } else {
        populateTable(id, chunk, currentPage, sortedData);
    }

  }
/**
    * Function that enables sort for every new created table
*/
function enableSort() {
    document.querySelectorAll(".table-sortable thead th").forEach((headerCell) => {
        let tableId = headerCell.id.split('-')[2];
      
        headerCell.addEventListener("click", () => {
            let headerIndex = Array.prototype.indexOf.call(
              headerCell.parentElement.children,
              headerCell
            );
            const currentIsAscending = headerCell.classList.contains("th-sort-asc");
            sortTableByColumn(tableId, headerIndex, !currentIsAscending);
        });
        });
}
/**
 * Function that enables search for every created table 
 * @param {number of created pages} tableCounter 
 */
function enableSearch(tableCounter) {
    for (let i = 1; i <= tableCounter; i++) {
        let searchInput = document.getElementById(`search-${i}`);

        searchInput.addEventListener('input', function() {
            searchTable(i);
        })
    }
}
/**
 * Function that searches and displays searched data on every input 
 * @param {id of the table to search in} id 
 * @param {data to search in, by default - default data array} dataToSearchIn 
 */
function searchTable(id, dataToSearchIn = dataArray) {
    let searchedArray = [];

    let searchInput = document.getElementById(`search-${id}`);

    let filter = searchInput.value.toUpperCase();

    dataToSearchIn.filter((item) => {
      if (Object.values(item).join('').toUpperCase().indexOf(filter) != -1) {
        searchedArray.push(item);
      }
    });
    populateTable(id, chunk, currentPage, searchedArray);
}
/**
 * Function that enables displaying of selected row for every table 
 * @param {number of created tables} tableCounter 
 */
function enableDisplaySelected(tableCounter) {
    for (let i = 1; i <= tableCounter; i++) {
        let table = document.getElementById(`table-${i}`);
        let allTableRows = table.querySelectorAll('tr');
        let [th, ...tableRows] = allTableRows;
        tableRows.forEach(row => {
            row.addEventListener('click', () => {
                displaySelected(i, row);
            });
        })

    }
}
/**
 * Function that displays selected row
 * @param {id of the table to display selected row of} id 
 * @param {row to display} row 
 */
function displaySelected(id, row) {
    let selectedBlock = document.getElementById(`selected-${id}`); // table to display selected row in 
    let selectedBody = selectedBlock.tBodies[0];
    if (row) { // display row only if it's defined
        selectedBlock.style.display = 'table';
        selectedBody.innerHTML = row.outerHTML;
    }
}

addTable(); // add first table on load

// 666 rows of code