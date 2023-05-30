module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
    }
}