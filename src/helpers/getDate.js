export const getDate = () => {

    const date = new Date();

    const datetime = date.getDate() + "/"
                + (date.getMonth() + 1)  + "/" 
                + date.getFullYear() + " - "  
                + date.getHours() + ":"  
                + date.getMinutes() + ":" 
                + date.getSeconds();

    return datetime;
}