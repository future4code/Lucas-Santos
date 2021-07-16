export const useDateFix = (date: string) => {
  const fixDate = (number: number) => { return number <= 9 ? '0' + number : number }

  const newDate = new Date(date)
  const dateFixed = ((fixDate(newDate.getDate()+1).toString()) + "/" + (fixDate(newDate.getMonth()+1).toString()) + "/" + newDate.getFullYear())

  return dateFixed
}