let day = 20;
let month = 7;
let year = 2000;


        switch (day, month, year)
        {
            case 4: case 6: case 9 : case 11: s+= 30; break;
            case 2: s = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? 29 : 28;
                break;
        default: s = 31;
        }