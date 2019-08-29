const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

const simpleDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate() || 1;
    const monthIndex = isNaN(date.getMonth()) ? 0 : date.getMonth();
    const year = date.getFullYear() || 2000
    return `${day  } ${  monthNames[monthIndex]  } ${  year}`;
}

export { simpleDate };
