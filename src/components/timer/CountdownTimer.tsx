import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownProps) {
  // Función que calcula el tiempo restante
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Actualiza el contador cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg text-black">
      <h2 className="text-3xl font-bold mb-2">¡Falta poco para la sorpresa!</h2>
      <p className="pb-2">
        La sorpresa se revelara cuando el contador llegue ha cero
      </p>
      <div className="flex space-x-6 text-2xl">
        <div className="flex flex-col items-center">
          <span className="font-mono">{timeLeft.days}</span>
          <span className="text-sm">Días</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono">{timeLeft.hours}</span>
          <span className="text-sm">Horas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono">{timeLeft.minutes}</span>
          <span className="text-sm">Minutos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono">{timeLeft.seconds}</span>
          <span className="text-sm">Segundos</span>
        </div>
      </div>
    </div>
  );
}
