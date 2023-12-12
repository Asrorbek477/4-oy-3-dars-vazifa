//  10. Olimning poyezdi soat t da ketishi kerak edi. Lekin u T soat kechikdi. Olimning poyezdi soat nechada ketishini topuvchi algoritm yozing. Bu yerda (0 < t < 23).
function calculateDepartureTime(t, T) {
    const totalMinutes = (t * 60) + (T * 60);
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
  
    return {
      hours: hours,
      minutes: minutes
    };
  }
  
  const t = 10; 
  const T = 2; 
  const result = calculateDepartureTime(t, T);
  console.log(`The train will leave at ${result.hours}:${result.minutes}`); 
  
  