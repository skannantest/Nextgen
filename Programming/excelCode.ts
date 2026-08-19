import * as XLSX from 'xlsx';

function palindrome() {

    const workbook = XLSX.readFile("data.xlsx");
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const data = XLSX.utils.sheet_to_json(sheet);

    const palindrom = (data[0] as any).name;
    let reverse = "";

    for (let i = palindrom.length - 1; i >= 0; i--) {
        reverse = reverse + palindrom.charAt(i);
    }

    if (palindrom == reverse) {
        console.log(reverse + " Is the palindrome");
    } else {
        console.log(reverse + " Is not the palindrome");
    }
}

palindrome();