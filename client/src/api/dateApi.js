import isThisWeek from "date-fns/is_this_week";
import isToday from "date-fns/is_today";
import isYesterday from "date-fns/is_yesterday";
import format from "date-fns/format";



export const toDate = timestamp => {
    const date = new Date(timestamp);
    if (isThisWeek(date)) {
        const timeFormat = format(date, "h:mm A");
        if (isToday(date)) return `Today at ${timeFormat}`;
        else if (isYesterday(date)) return `Yesterday at ${timeFormat}`;
        else return `Last ${format(date, "dddd")} at ${timeFormat}`;
    } 
    return format(date, "Do MMM YYYY");
}


export default {
    toDate
}