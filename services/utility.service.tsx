// export function ConvertSecondsToHoursAndMinutes(seconds: number): string {
//   const hours = Math.floor(seconds / 3600);
//   const remainingSecondsAfterHours = seconds % 3600;
//   const minutes = Math.floor(remainingSecondsAfterHours / 60);
//   const remainingSeconds = remainingSecondsAfterHours % 60;

//   if (hours > 0) {
//     return `${hours} h ${minutes} min ${remainingSeconds} sec`;
//   } else if (minutes > 0) {
//     return `${minutes} min ${remainingSeconds} sec`;
//   } else {
//     return `${remainingSeconds} sec`;
//   }
// }

export function ConvertSecondsToHoursAndMinutes(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const remainingSecondsAfterHours = seconds % 3600;
  const minutes = Math.floor(remainingSecondsAfterHours / 60);
  const remainingSeconds = remainingSecondsAfterHours % 60;

  const formattedSeconds = remainingSeconds.toFixed(2);

  if (hours > 0) {
    return `${hours} hr ${minutes} min ${formattedSeconds} sec`;
  } else if (minutes > 0) {
    return `${minutes} min ${formattedSeconds} sec`;
  } else {
    return `${formattedSeconds} sec`;
  }
}



export function FormatCategory(category: string[]): string {
    return category.join(" | ")
}
