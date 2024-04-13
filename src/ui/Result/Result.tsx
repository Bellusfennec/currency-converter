interface Props {
   amount: number
   convertible_currency: string
   conversion_into_currency: string
   course: number
}

export const numberWithSpaces = (x: number) => {
   const parts = x.toString().split(".");
   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   return parts.join(".");
}

export const Result = ({ amount, convertible_currency, conversion_into_currency, course }: Props) => {
   return (
      <div className="w-full">
         <div className="text-gray-500 font-semibold text-2xl">{numberWithSpaces(amount)} {convertible_currency} =</div>
         <div className="text-gray-600 font-bold text-3xl my-2.5">{numberWithSpaces((amount * course))} {conversion_into_currency}</div>
         <div className="text-gray-500 font-normal text-sm">1 {convertible_currency} = {course} {conversion_into_currency}</div>
         <div className="text-gray-500 font-normal text-sm">1 {conversion_into_currency} = {(1 / course).toFixed(7)} {convertible_currency}</div>
      </div>
   )
};
